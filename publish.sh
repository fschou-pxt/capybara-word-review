#!/usr/bin/env bash
#
# Commit and push capybaraaroundtheworld.com.
#
#   ./publish.sh "what changed"     commit everything, then push
#   ./publish.sh -n "what changed"  commit only, do not push
#
# The site is served straight from the repository, so a push IS the deploy.
# That is why this checks a few things first — on a static site the usual
# failure is not a crash, it is a page that quietly 404s in one language.
#
# What it checks:
#   1. Every page still parses as HTML and has its stylesheet link.
#   2. The two URLs App Store Connect points at exist on disk. If either is
#      missing or renamed, Apple's reviewer sees a 404 and the app is rejected.
#   3. Every language dictionary still has the same keys the pages use.

set -euo pipefail

push=1
if [ "${1:-}" = "-n" ]; then push=0; shift; fi
msg="${1:-}"

say()  { printf "\n\033[1m▸ %s\033[0m\n" "$*"; }
die()  { printf "\n\033[31m✗ %s\033[0m\n\n" "$*" >&2; exit 1; }

[ -n "$msg" ] || die "Say what changed:  ./publish.sh \"added ten languages to the Plotopia policy\""

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$here" || die "Could not enter $here"

# ------------------------------------------------- 0. the App Store links

say "App Store Connect links"
for f in plotopia/privacy-policy.html plotopia/terms.html; do
  printf "  %-34s " "$f"
  [ -f "$f" ] && echo present || { echo MISSING; die "$f is what App Store Connect links to. Without it a reviewer gets a 404."; }
done

# ------------------------------------------------------- 1. the language files

say "Language dictionaries"
node - <<'JS' || die "A language check failed. Nothing was committed."
const fs = require("fs");
let bad = 0;

// Plotopia landing page: its dictionary must cover exactly the keys the page uses.
try {
  const html = fs.readFileSync("plotopia/index.html", "utf8");
  const src  = fs.readFileSync("plotopia/i18n-plotopia.js", "utf8");
  const dict = eval("(" + src.match(/var I18N = (\{[\s\S]*?\n  \});/)[1] + ")");
  const keys = [...new Set([...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]))];
  for (const [lang, d] of Object.entries(dict)) {
    const missing = keys.filter(k => !(k in d));
    const orphan  = Object.keys(d).filter(k => !keys.includes(k));
    if (missing.length || orphan.length) {
      bad++;
      console.log(`  plotopia ${lang}: missing ${JSON.stringify(missing)} orphan ${JSON.stringify(orphan)}`);
    }
  }
  console.log(`  plotopia/index.html  ${keys.length} keys x ${Object.keys(dict).length + 1} languages  ${bad ? "MISMATCH" : "ok"}`);
} catch (e) { bad++; console.log("  plotopia dictionary: " + e.message); }

// Both privacy policies: every language block must render the same structure.
for (const page of ["plotopia/privacy-policy.html", "wordReview/privacy-policy.html"]) {
  try {
    const s = fs.readFileSync(page, "utf8");
    const n = (s.match(/label:\s*"/g) || []).length;
    console.log(`  ${page}  ${n} languages  ${n ? "ok" : "NO LOCALISATIONS"}`);
    if (!n) bad++;
  } catch (e) { bad++; console.log(`  ${page}: ` + e.message); }
}
process.exit(bad ? 1 : 0);
JS

# --------------------------------------------------- 2. show, then confirm

if [ -z "$(git status --porcelain)" ]; then
  say "Nothing to commit — the site is already up to date."
  exit 0
fi

say "About to publish"
git status --short
echo
printf "  Message: %s\n" "$msg"
printf "  Branch:  %s\n" "$(git rev-parse --abbrev-ref HEAD)"
[ "$push" = 1 ] && printf "  Then:    push — THIS IS THE DEPLOY, the live site changes\n" \
                || printf "  Then:    stop (no push, site unchanged)\n"
echo
read -r -p "  Go ahead? [y/N] " ok
case "$ok" in y|Y|yes|YES) ;; *) die "Stopped. Nothing was committed." ;; esac

say "Commit"
git add -A
git commit -m "$msg"

if [ "$push" = 1 ]; then
  say "Push"
  branch="$(git rev-parse --abbrev-ref HEAD)"
  if git rev-parse --abbrev-ref "@{upstream}" >/dev/null 2>&1; then git push; else git push -u origin "$branch"; fi
  say "Live. Give the CDN a minute, then hard-refresh."
else
  say "Committed. The live site has NOT changed until you push."
fi
