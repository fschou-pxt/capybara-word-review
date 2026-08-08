/* Capy's Plotopia landing page — language switcher.

   Same shape as /assets/i18n.js, but a SEPARATE file with its own dictionary.
   The Word Review dictionary is ~1200 lines of strings this page never shows;
   pointing the page at it would download all of them to translate none.

   English lives inline in the HTML and is the always-working fallback — a
   missing key here falls back to it rather than rendering blank. The chosen
   language is stored under the same "wr_lang" key the rest of the site uses,
   so picking Japanese here keeps Japanese when you walk back to the homepage.

   'ar' is RTL. */
(function () {
  "use strict";

  var LANGS = [
    ["en", "English"], ["zh-Hans", "简体中文"], ["zh-Hant", "繁體中文"],
    ["ja", "日本語"], ["ko", "한국어"], ["es", "Español"], ["fr", "Français"],
    ["de", "Deutsch"], ["it", "Italiano"], ["pt-BR", "Português"],
    ["ru", "Русский"], ["nl", "Nederlands"], ["pl", "Polski"],
    ["tr", "Türkçe"], ["ar", "العربية"]
  ];
  var RTL = { ar: true };

  var I18N = {
    "zh-Hans": {
      p_nav_how: "玩法", p_nav_feat: "功能", p_nav_join: "加入故事", p_nav_all: "应用",
      p_ribbon: "✨ 即将登陆 App Store",
      p_h1: "一起<br>创作故事",
      p_lead: "一个故事，每人一支手机。<b>卡比</b> 负责讲述，并问你接下来会发生什么——握笔的人来决定。没有人偷看后面，也没有人独自等待。",
      p_cta_join: "加入故事 →", p_cta_how: "怎么玩",
      p_hero_small: "已经在玩了？会有人把四个字符的代码念给你听。",
      p_how_title: "一个故事是怎么诞生的 📖",
      p_how_sub: "四分钟就能开始。想写多久就写多久。🌿",
      p_s1t: "1 · 布置场景",
      p_s1p: "挑一到三种类型、一种语言，以及文字的成熟程度。有角色就加进来——或者全部留白，看看 卡比 会编出什么。",
      p_s2t: "2 · 分享代码",
      p_s2p: "大家用四个字符加入，手机或浏览器都行。不用注册、不用账号、不用邮箱。",
      p_s3t: "3 · 轮流接力",
      p_s3p: "卡比 写下一段，然后提出一个问题。主持人把笔交给回答的人——故事就在他的选择上转弯。",
      p_feat_title: "为一起阅读而做 ✨",
      p_feat_sub: "为家庭、教室，和漫长的车程而生。🚗",
      p_f1t: "十种语言", p_f1p: "故事和界面是分开的：可以用英文菜单读一篇日文故事，反过来也行。",
      p_f2t: "朗读出来", p_f2p: "任何段落，自然的嗓音——给还不能独立阅读、但能跟着听的孩子。",
      p_f3t: "这是什么意思？", p_f3p: "点任意词语，用<i>你的</i>语言解释，而且是按故事里的那个意思——不是词典的第一条。",
      p_f4t: "按读者调整", p_f4p: "从“刚接触这门语言”到大学程度。讲述者按这个水平来写，并且会自我检查。",
      p_f5t: "让故事分岔", p_f5p: "对接下来的走向谈不拢？那就分成两条。两边都从同样的段落继续往下走。",
      p_f6t: "留住你写的", p_f6p: "把故事存进书库，它会跟着你到每一台设备——重读、朗读，或者以后接着写。",
      p_end_title: "有人给了你代码？",
      p_end_sub: "你可以直接在这个浏览器里加入——不用装应用，不用账号。但开启故事的那个人需要应用。",
      p_end_more: "更多 卡比 的作品",
      p_ft_privacy: "隐私", p_ft_terms: "条款", p_ft_support: "支持",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · 用 🍊 和午睡做成"
    },
    "zh-Hant": {
      p_nav_how: "玩法", p_nav_feat: "功能", p_nav_join: "加入故事", p_nav_all: "應用程式",
      p_ribbon: "✨ 即將登陸 App Store",
      p_h1: "一起<br>創作故事",
      p_lead: "一個故事，每人一支手機。<b>卡比</b> 負責敘述，並問你接下來會發生什麼——握筆的人來決定。沒有人偷看後面，也沒有人獨自等待。",
      p_cta_join: "加入故事 →", p_cta_how: "怎麼玩",
      p_hero_small: "已經在玩了？會有人把四個字元的代碼唸給你聽。",
      p_how_title: "一個故事是怎麼誕生的 📖",
      p_how_sub: "四分鐘就能開始。想寫多久就寫多久。🌿",
      p_s1t: "1 · 佈置場景",
      p_s1p: "挑一到三種類型、一種語言，以及文字的成熟程度。有角色就加進來——或者全部留白，看看 卡比 會編出什麼。",
      p_s2t: "2 · 分享代碼",
      p_s2p: "大家用四個字元加入，手機或瀏覽器都行。不用註冊、不用帳號、不用電子郵件。",
      p_s3t: "3 · 輪流接力",
      p_s3p: "卡比 寫下一段，然後提出一個問題。主持人把筆交給回答的人——故事就在他的選擇上轉彎。",
      p_feat_title: "為一起閱讀而做 ✨",
      p_feat_sub: "為家庭、教室，和漫長的車程而生。🚗",
      p_f1t: "十種語言", p_f1p: "故事和介面是分開的：可以用英文選單讀一篇日文故事，反過來也行。",
      p_f2t: "朗讀出來", p_f2p: "任何段落，自然的嗓音——給還不能獨立閱讀、但能跟著聽的孩子。",
      p_f3t: "這是什麼意思？", p_f3p: "點任意字詞，用<i>你的</i>語言解釋，而且是按故事裡的那個意思——不是字典的第一條。",
      p_f4t: "按讀者調整", p_f4p: "從「剛接觸這門語言」到大學程度。敘述者按這個水平來寫，並且會自我檢查。",
      p_f5t: "讓故事分岔", p_f5p: "對接下來的走向談不攏？那就分成兩條。兩邊都從同樣的段落繼續往下走。",
      p_f6t: "留住你寫的", p_f6p: "把故事存進書庫，它會跟著你到每一台裝置——重讀、朗讀，或者以後接著寫。",
      p_end_title: "有人給了你代碼？",
      p_end_sub: "你可以直接在這個瀏覽器裡加入——不用裝應用程式，不用帳號。但開啟故事的那個人需要應用程式。",
      p_end_more: "更多 卡比 的作品",
      p_ft_privacy: "隱私", p_ft_terms: "條款", p_ft_support: "支援",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · 用 🍊 和午睡做成"
    },
    "ja": {
      p_nav_how: "遊び方", p_nav_feat: "機能", p_nav_join: "物語に参加", p_nav_all: "アプリ",
      p_ribbon: "✨ App Store にまもなく登場",
      p_h1: "いっしょに<br>物語をつくろう",
      p_lead: "ひとつの物語を、それぞれの端末で。<b>カ⁠ピ</b> が語り、次に何が起こるかを尋ねます——決めるのはペンを持つ人。先を読まれることも、ひとりで待つこともありません。",
      p_cta_join: "物語に参加 →", p_cta_how: "遊び方",
      p_hero_small: "もう始まっている？ 誰かが4文字のコードを読み上げてくれます。",
      p_how_title: "物語が生まれるまで 📖",
      p_how_sub: "始めるのに4分。終わるのはお好きなだけ。🌿",
      p_s1t: "1 · 舞台をととのえる",
      p_s1p: "ジャンルを1〜3つ、言語、そして文章の大人っぽさを選びます。登場人物がいれば加えて——全部空欄にして、カ⁠ピ が何を思いつくか見るのもあり。",
      p_s2t: "2 · コードを共有",
      p_s2p: "みんな4文字で参加。スマホでもブラウザでも。アカウントも登録もメールも不要です。",
      p_s3t: "3 · 順番に書く",
      p_s3p: "カ⁠ピ が一節を書き、問いかけます。ホストは答える人にペンを渡す——物語はその選択で曲がります。",
      p_feat_title: "いっしょに読むために ✨",
      p_feat_sub: "家族に、教室に、長いドライブに。🚗",
      p_f1t: "10の言語", p_f1p: "物語と画面表示は別々です。日本語の物語を英語のメニューで読むことも、その逆も。",
      p_f2t: "読み上げ", p_f2p: "どの一節も自然な声で——自分ではまだ読めないけれど、耳では追える子のために。",
      p_f3t: "これ、どういう意味？", p_f3p: "どの語をタップしても<i>あなたの</i>言語で説明します。しかも物語で使われている意味で——辞書の最初の項目ではなく。",
      p_f4t: "読み手に合わせて", p_f4p: "「この言語は初めて」から大学レベルまで。語り手はその幅に合わせて書き、自分で確かめます。",
      p_f5t: "物語を分ける", p_f5p: "次の展開で意見が割れた？ ふたつに分けましょう。どちらも同じ一節から続いていきます。",
      p_f6t: "書いたものを残す", p_f6p: "物語をライブラリに保存すれば、どの端末にもついてきます——読み返す、読み上げる、続きを書く。",
      p_end_title: "コードをもらいましたか？",
      p_end_sub: "このブラウザからそのまま参加できます——アプリもアカウントも不要。ただし物語を始めた人にはアプリが必要です。",
      p_end_more: "カ⁠ピ の他のアプリ",
      p_ft_privacy: "プライバシー", p_ft_terms: "利用規約", p_ft_support: "サポート",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · 🍊 とお昼寝でつくりました"
    },
    "ko": {
      p_nav_how: "이렇게 해요", p_nav_feat: "기능", p_nav_join: "이야기 참여", p_nav_all: "앱",
      p_ribbon: "✨ App Store에 곧 출시",
      p_h1: "함께<br>이야기를 만들어요",
      p_lead: "하나의 이야기, 각자의 화면에서. <b>카피</b>가 들려주고 다음에 무슨 일이 일어날지 묻습니다 — 정하는 사람은 펜을 쥔 사람. 아무도 먼저 읽지 않고, 아무도 혼자 기다리지 않아요.",
      p_cta_join: "이야기 참여 →", p_cta_how: "이렇게 해요",
      p_hero_small: "이미 하고 있나요? 누군가 네 글자 코드를 읽어 줄 거예요.",
      p_how_title: "이야기가 시작되는 방법 📖",
      p_how_sub: "시작에 4분. 끝내는 건 원하는 만큼. 🌿",
      p_s1t: "1 · 무대를 정해요",
      p_s1p: "장르 하나에서 셋, 언어, 그리고 문장이 얼마나 어른스러울지를 고르세요. 등장인물이 있으면 넣고 — 아니면 전부 비워 두고 카피가 무엇을 지어내는지 보세요.",
      p_s2t: "2 · 코드를 나눠요",
      p_s2p: "모두 네 글자로 참여합니다. 휴대폰에서도, 브라우저에서도. 계정도 가입도 이메일도 필요 없어요.",
      p_s3t: "3 · 번갈아 써요",
      p_s3p: "카피가 한 대목을 쓰고 질문을 던집니다. 호스트는 답하는 사람에게 펜을 넘기고 — 이야기는 그 선택에서 방향을 틉니다.",
      p_feat_title: "함께 읽기 위해 ✨",
      p_feat_sub: "가족과, 교실과, 긴 자동차 여행을 위해. 🚗",
      p_f1t: "열 개 언어", p_f1p: "이야기와 메뉴는 따로입니다. 영어 메뉴로 일본어 이야기를 읽어도 되고, 그 반대도 됩니다.",
      p_f2t: "소리 내어 읽기", p_f2p: "어떤 대목이든 자연스러운 목소리로 — 아직 혼자 읽지는 못해도 따라올 수 있는 아이를 위해.",
      p_f3t: "이게 무슨 뜻이죠?", p_f3p: "아무 단어나 누르면 <i>당신의</i> 언어로 설명해 줍니다. 그것도 이야기가 쓰고 있는 그 뜻으로 — 사전의 첫 번째 뜻이 아니라.",
      p_f4t: "읽는 사람에 맞춰", p_f4p: "“이 언어는 처음”부터 대학 수준까지. 화자는 그 범위에 맞춰 쓰고 스스로 확인합니다.",
      p_f5t: "이야기 가지치기", p_f5p: "다음 전개에 합의가 안 되나요? 둘로 나누세요. 양쪽 모두 같은 대목에서 이어집니다.",
      p_f6t: "만든 것을 간직하기", p_f6p: "이야기를 서재에 저장하면 모든 기기로 따라옵니다 — 다시 읽고, 소리 내어 듣고, 나중에 이어 쓰세요.",
      p_end_title: "누가 코드를 보내 줬나요?",
      p_end_sub: "이 브라우저에서 바로 참여할 수 있어요 — 앱도 계정도 필요 없습니다. 다만 이야기를 시작한 사람에게는 앱이 필요해요.",
      p_end_more: "카피의 다른 앱",
      p_ft_privacy: "개인정보", p_ft_terms: "이용약관", p_ft_support: "지원",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · 🍊와 낮잠으로 만들었어요"
    },
    "es": {
      p_nav_how: "Cómo funciona", p_nav_feat: "Funciones", p_nav_join: "Únete a una historia", p_nav_all: "Apps",
      p_ribbon: "✨ Muy pronto en la App Store",
      p_h1: "Creemos historias<br>juntos",
      p_lead: "Una historia, cada uno en su móvil. <b>Capy</b> narra y pregunta qué pasa ahora, y quien tiene la pluma decide. Nadie se adelanta leyendo, nadie espera solo.",
      p_cta_join: "Únete a una historia →", p_cta_how: "Cómo funciona",
      p_hero_small: "¿Ya estáis jugando? Alguien te leerá un código de cuatro caracteres.",
      p_how_title: "Así nace una historia 📖",
      p_how_sub: "Cuatro minutos para empezar. Lo que quieras para terminar. 🌿",
      p_s1t: "1 · Preparad la escena",
      p_s1p: "Elegid uno o tres géneros, un idioma y cuán adulta debe ser la escritura. Añadid personajes si los tenéis, o dejadlo todo en blanco y ved qué se inventa Capy.",
      p_s2t: "2 · Compartid el código",
      p_s2p: "Todos entran con cuatro caracteres, desde el móvil o el navegador. Sin cuentas, sin registros, sin correo.",
      p_s3t: "3 · Por turnos",
      p_s3p: "Capy escribe un pasaje y hace una pregunta. El anfitrión pasa la pluma a quien la responde, y la historia gira con lo que elija.",
      p_feat_title: "Hecho para leer juntos ✨",
      p_feat_sub: "Para familias, aulas y viajes largos en coche. 🚗",
      p_f1t: "Diez idiomas", p_f1p: "La historia y los menús van por separado: lee una historia en japonés con los menús en español, o al revés.",
      p_f2t: "Leer en voz alta", p_f2p: "Cualquier pasaje, con voz natural — para quien puede seguir la historia pero aún no leerla solo.",
      p_f3t: "¿Qué significa esto?", p_f3p: "Toca cualquier palabra y tendrás una explicación en <i>tu</i> idioma, para el sentido que la historia le está dando, no el primero del diccionario.",
      p_f4t: "A la medida de quien lee", p_f4p: "Desde “empiezo con este idioma” hasta nivel universitario. El narrador escribe en esa franja y se revisa a sí mismo.",
      p_f5t: "Ramifica la historia", p_f5p: "¿No os ponéis de acuerdo? Partidla en dos. Las dos mitades siguen adelante desde los mismos pasajes.",
      p_f6t: "Guarda lo que creáis", p_f6p: "Guarda una historia en tu biblioteca y te seguirá a todos tus dispositivos: para releerla, escucharla o continuarla más tarde.",
      p_end_title: "¿Te han enviado un código?",
      p_end_sub: "Puedes unirte desde este navegador, sin app y sin cuenta. Quien empezó la historia sí necesita la app.",
      p_end_more: "Más de Capy",
      p_ft_privacy: "Privacidad", p_ft_terms: "Términos", p_ft_support: "Soporte",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Hecho con 🍊 y siestas"
    },
    "fr": {
      p_nav_how: "Comment ça marche", p_nav_feat: "Fonctions", p_nav_join: "Rejoindre une histoire", p_nav_all: "Apps",
      p_ribbon: "✨ Bientôt sur l'App Store",
      p_h1: "Créons des histoires<br>ensemble",
      p_lead: "Une histoire, chacun sur son téléphone. <b>Capy</b> raconte et demande ce qui arrive ensuite — et celui qui tient la plume décide. Personne ne lit en avance, personne n'attend seul.",
      p_cta_join: "Rejoindre une histoire →", p_cta_how: "Comment ça marche",
      p_hero_small: "Déjà en train de jouer ? Quelqu'un vous lira un code de quatre caractères.",
      p_how_title: "Comment naît une histoire 📖",
      p_how_sub: "Quatre minutes pour commencer. Le temps que vous voulez pour finir. 🌿",
      p_s1t: "1 · Plantez le décor",
      p_s1p: "Choisissez un genre ou trois, une langue, et le degré d'écriture. Ajoutez des personnages si vous en avez — ou laissez tout vide et voyez ce que Capy invente.",
      p_s2t: "2 · Partagez le code",
      p_s2p: "Chacun rejoint avec quatre caractères, sur un téléphone ou dans un navigateur. Sans compte, sans inscription, sans e-mail.",
      p_s3t: "3 · Chacun son tour",
      p_s3p: "Capy écrit un passage et pose une question. L'hôte tend la plume à celui qui y répond — et l'histoire bascule sur son choix.",
      p_feat_title: "Fait pour lire ensemble ✨",
      p_feat_sub: "Pour les familles, les classes et les longs trajets en voiture. 🚗",
      p_f1t: "Dix langues", p_f1p: "L'histoire et les menus sont séparés : lisez une histoire en japonais avec des menus en français, ou l'inverse.",
      p_f2t: "Lecture à voix haute", p_f2p: "N'importe quel passage, d'une voix naturelle — pour l'enfant qui suit l'histoire mais ne la lit pas encore seul.",
      p_f3t: "Ça veut dire quoi ?", p_f3p: "Touchez un mot et obtenez une explication dans <i>votre</i> langue, pour le sens que l'histoire lui donne — pas la première entrée du dictionnaire.",
      p_f4t: "Au niveau du lecteur", p_f4p: "De « je débute dans cette langue » au niveau universitaire. Le narrateur écrit dans cette tranche et se relit.",
      p_f5t: "Faites bifurquer l'histoire", p_f5p: "Pas d'accord sur la suite ? Coupez-la en deux. Les deux moitiés continuent, à partir des mêmes passages.",
      p_f6t: "Gardez ce que vous écrivez", p_f6p: "Enregistrez une histoire dans votre bibliothèque et elle vous suit sur tous vos appareils — à relire, à écouter, ou à continuer plus tard.",
      p_end_title: "On vous a envoyé un code ?",
      p_end_sub: "Vous pouvez rejoindre depuis ce navigateur — sans app, sans compte. En revanche, celui qui a lancé l'histoire a besoin de l'app.",
      p_end_more: "Découvrir Capy",
      p_ft_privacy: "Confidentialité", p_ft_terms: "Conditions", p_ft_support: "Assistance",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Fait avec 🍊 et des siestes"
    },
    "de": {
      p_nav_how: "So geht's", p_nav_feat: "Funktionen", p_nav_join: "Geschichte beitreten", p_nav_all: "Apps",
      p_ribbon: "✨ Bald im App Store",
      p_h1: "Lasst uns gemeinsam<br>Geschichten schreiben",
      p_lead: "Eine Geschichte, jeder auf seinem eigenen Gerät. <b>Capy</b> erzählt und fragt, was als Nächstes passiert — und wer die Feder hält, entscheidet. Niemand liest vor, niemand wartet allein.",
      p_cta_join: "Geschichte beitreten →", p_cta_how: "So geht's",
      p_hero_small: "Schon dabei? Jemand liest dir einen Code aus vier Zeichen vor.",
      p_how_title: "So entsteht eine Geschichte 📖",
      p_how_sub: "Vier Minuten zum Anfangen. So lange ihr wollt zum Aufhören. 🌿",
      p_s1t: "1 · Die Bühne bauen",
      p_s1p: "Wählt ein Genre oder drei, eine Sprache und wie erwachsen geschrieben werden soll. Fügt Figuren hinzu, wenn ihr welche habt — oder lasst alles leer und schaut, was Capy erfindet.",
      p_s2t: "2 · Den Code teilen",
      p_s2p: "Alle steigen mit vier Zeichen ein, am Handy oder im Browser. Keine Konten, keine Anmeldung, keine E-Mail.",
      p_s3t: "3 · Reihum",
      p_s3p: "Capy schreibt einen Abschnitt und stellt eine Frage. Der Gastgeber reicht die Feder weiter an den, der antwortet — und die Geschichte dreht sich mit seiner Wahl.",
      p_feat_title: "Zum gemeinsamen Lesen gemacht ✨",
      p_feat_sub: "Für Familien, Klassenzimmer und lange Autofahrten. 🚗",
      p_f1t: "Zehn Sprachen", p_f1p: "Geschichte und Menüs sind getrennt: Lies eine japanische Geschichte mit deutschen Menüs — oder umgekehrt.",
      p_f2t: "Vorlesen lassen", p_f2p: "Jeden Abschnitt, mit natürlicher Stimme — für ein Kind, das folgen, aber noch nicht allein lesen kann.",
      p_f3t: "Was heißt das?", p_f3p: "Tippe ein beliebiges Wort an und bekomme eine Erklärung in <i>deiner</i> Sprache — für die Bedeutung, die die Geschichte gerade benutzt, nicht die erste im Wörterbuch.",
      p_f4t: "Auf den Leser abgestimmt", p_f4p: "Von „gerade erst angefangen“ bis Universitätsniveau. Der Erzähler schreibt in dieser Spanne und prüft sich selbst.",
      p_f5t: "Die Geschichte teilen", p_f5p: "Uneinig, wie es weitergeht? Teilt sie in zwei. Beide Hälften laufen weiter, von denselben Abschnitten aus.",
      p_f6t: "Behaltet, was ihr schreibt", p_f6p: "Speichere eine Geschichte in deiner Bibliothek, und sie folgt dir auf jedes Gerät — zum Nachlesen, Vorlesen oder Weiterschreiben.",
      p_end_title: "Hat dir jemand einen Code geschickt?",
      p_end_sub: "Du kannst direkt in diesem Browser mitmachen — ohne App, ohne Konto. Wer die Geschichte begonnen hat, braucht allerdings die App.",
      p_end_more: "Mehr von Capy",
      p_ft_privacy: "Datenschutz", p_ft_terms: "Nutzungsbedingungen", p_ft_support: "Support",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Mit 🍊 und Nickerchen gemacht"
    },
    "it": {
      p_nav_how: "Come funziona", p_nav_feat: "Funzioni", p_nav_join: "Entra in una storia", p_nav_all: "App",
      p_ribbon: "✨ Presto su App Store",
      p_h1: "Creiamo storie<br>insieme",
      p_lead: "Una storia, ognuno sul proprio telefono. <b>Capy</b> narra e chiede cosa succede dopo — e chi tiene la penna decide. Nessuno legge avanti, nessuno aspetta da solo.",
      p_cta_join: "Entra in una storia →", p_cta_how: "Come funziona",
      p_hero_small: "Già in gioco? Qualcuno ti leggerà un codice di quattro caratteri.",
      p_how_title: "Come nasce una storia 📖",
      p_how_sub: "Quattro minuti per cominciare. Il tempo che volete per finire. 🌿",
      p_s1t: "1 · Preparate la scena",
      p_s1p: "Scegliete un genere o tre, una lingua e quanto adulta debba essere la scrittura. Aggiungete i personaggi se li avete — o lasciate tutto vuoto e guardate cosa inventa Capy.",
      p_s2t: "2 · Condividete il codice",
      p_s2p: "Si entra tutti con quattro caratteri, da telefono o dal browser. Niente account, niente registrazioni, niente email.",
      p_s3t: "3 · A turno",
      p_s3p: "Capy scrive un passaggio e fa una domanda. L'ospite passa la penna a chi risponde — e la storia gira su quello che sceglie.",
      p_feat_title: "Fatto per leggere insieme ✨",
      p_feat_sub: "Per famiglie, aule e lunghi viaggi in auto. 🚗",
      p_f1t: "Dieci lingue", p_f1p: "Storia e menu sono separati: leggi una storia in giapponese con i menu in italiano, o il contrario.",
      p_f2t: "Lettura ad alta voce", p_f2p: "Qualsiasi passaggio, con voce naturale — per chi segue la storia ma non riesce ancora a leggerla da solo.",
      p_f3t: "Che cosa vuol dire?", p_f3p: "Tocca una parola qualsiasi e avrai una spiegazione nella <i>tua</i> lingua, nel senso che la storia le sta dando — non il primo del dizionario.",
      p_f4t: "Su misura per chi legge", p_f4p: "Da “sono agli inizi con questa lingua” fino al livello universitario. Il narratore scrive in quella fascia e si controlla.",
      p_f5t: "Ramifica la storia", p_f5p: "Non riuscite a mettervi d'accordo? Dividetela in due. Entrambe le metà proseguono, dagli stessi passaggi.",
      p_f6t: "Tieni quello che scrivi", p_f6p: "Salva una storia nella tua libreria e ti seguirà su ogni dispositivo — per rileggerla, ascoltarla o continuarla più tardi.",
      p_end_title: "Ti hanno mandato un codice?",
      p_end_sub: "Puoi entrare da questo browser — senza app e senza account. Chi ha iniziato la storia, però, l'app le serve.",
      p_end_more: "Altro da Capy",
      p_ft_privacy: "Privacy", p_ft_terms: "Termini", p_ft_support: "Assistenza",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Fatto con 🍊 e pisolini"
    },
    "pt-BR": {
      p_nav_how: "Como funciona", p_nav_feat: "Recursos", p_nav_join: "Entrar numa história", p_nav_all: "Apps",
      p_ribbon: "✨ Em breve na App Store",
      p_h1: "Vamos criar histórias<br>juntos",
      p_lead: "Uma história, cada um no seu celular. <b>Capy</b> narra e pergunta o que acontece agora — e quem está com a caneta decide. Ninguém lê na frente, ninguém espera sozinho.",
      p_cta_join: "Entrar numa história →", p_cta_how: "Como funciona",
      p_hero_small: "Já está jogando? Alguém vai ler para você um código de quatro caracteres.",
      p_how_title: "Como uma história acontece 📖",
      p_how_sub: "Quatro minutos para começar. O tempo que quiserem para terminar. 🌿",
      p_s1t: "1 · Montem a cena",
      p_s1p: "Escolham um gênero ou três, um idioma e quão adulta deve ser a escrita. Acrescentem personagens, se tiverem — ou deixem tudo em branco e vejam o que Capy inventa.",
      p_s2t: "2 · Compartilhem o código",
      p_s2p: "Todo mundo entra com quatro caracteres, no celular ou no navegador. Sem contas, sem cadastros, sem e-mail.",
      p_s3t: "3 · Um de cada vez",
      p_s3p: "Capy escreve um trecho e faz uma pergunta. O anfitrião passa a caneta para quem responder — e a história vira conforme a escolha.",
      p_feat_title: "Feito para ler junto ✨",
      p_feat_sub: "Para famílias, salas de aula e viagens longas de carro. 🚗",
      p_f1t: "Dez idiomas", p_f1p: "A história e os menus são separados: leia uma história em japonês com os menus em português, ou o contrário.",
      p_f2t: "Ler em voz alta", p_f2p: "Qualquer trecho, com voz natural — para a criança que acompanha a história mas ainda não lê sozinha.",
      p_f3t: "O que isso quer dizer?", p_f3p: "Toque em qualquer palavra e receba uma explicação no <i>seu</i> idioma, no sentido que a história está usando — não o primeiro do dicionário.",
      p_f4t: "No nível de quem lê", p_f4p: "De “estou começando neste idioma” até nível universitário. O narrador escreve nessa faixa e se confere.",
      p_f5t: "Ramifique a história", p_f5p: "Não chegaram a um acordo? Dividam em duas. As duas metades seguem em frente, a partir dos mesmos trechos.",
      p_f6t: "Guarde o que vocês criam", p_f6p: "Salve uma história na sua biblioteca e ela vai com você para todos os aparelhos — para reler, ouvir ou continuar depois.",
      p_end_title: "Alguém te mandou um código?",
      p_end_sub: "Você pode entrar por este navegador — sem app, sem conta. Quem começou a história, essa pessoa precisa do app.",
      p_end_more: "Mais do Capy",
      p_ft_privacy: "Privacidade", p_ft_terms: "Termos", p_ft_support: "Suporte",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Feito com 🍊 e sonecas"
    },
    "ru": {
      p_nav_how: "Как это работает", p_nav_feat: "Возможности", p_nav_join: "Присоединиться", p_nav_all: "Приложения",
      p_ribbon: "✨ Скоро в App Store",
      p_h1: "Давайте сочинять<br>истории вместе",
      p_lead: "Одна история, у каждого свой телефон. <b>Capy</b> рассказывает и спрашивает, что будет дальше, — решает тот, у кого перо. Никто не заглядывает вперёд и никто не ждёт в одиночку.",
      p_cta_join: "Присоединиться →", p_cta_how: "Как это работает",
      p_hero_small: "Уже играете? Кто-нибудь продиктует вам код из четырёх символов.",
      p_how_title: "Как рождается история 📖",
      p_how_sub: "Четыре минуты, чтобы начать. Сколько захотите, чтобы закончить. 🌿",
      p_s1t: "1 · Задайте сцену",
      p_s1p: "Выберите жанр или три, язык и то, насколько взрослым должен быть текст. Добавьте персонажей, если они есть, — или оставьте всё пустым и посмотрите, что придумает Capy.",
      p_s2t: "2 · Поделитесь кодом",
      p_s2p: "Все входят по четырём символам — с телефона или из браузера. Без аккаунтов, без регистрации, без почты.",
      p_s3t: "3 · По очереди",
      p_s3p: "Capy пишет отрывок и задаёт вопрос. Ведущий передаёт перо тому, кто отвечает, — и история поворачивает вслед за его выбором.",
      p_feat_title: "Сделано, чтобы читать вместе ✨",
      p_feat_sub: "Для семей, классов и долгих поездок в машине. 🚗",
      p_f1t: "Десять языков", p_f1p: "История и интерфейс разделены: читайте японскую историю с русским меню — или наоборот.",
      p_f2t: "Чтение вслух", p_f2p: "Любой отрывок, живым голосом — для ребёнка, который следит за историей, но пока не читает сам.",
      p_f3t: "Что это значит?", p_f3p: "Коснитесь любого слова и получите объяснение на <i>вашем</i> языке — в том значении, которое использует история, а не в первом словарном.",
      p_f4t: "По уровню читателя", p_f4p: "От «только начал этот язык» до университетского уровня. Рассказчик пишет в этих рамках и проверяет себя.",
      p_f5t: "Развилка в истории", p_f5p: "Не сошлись во мнениях? Разделите историю надвое. Обе половины продолжатся от одних и тех же отрывков.",
      p_f6t: "Сохраните написанное", p_f6p: "Сохраните историю в библиотеку, и она будет с вами на любом устройстве — перечитать, послушать или продолжить позже.",
      p_end_title: "Вам прислали код?",
      p_end_sub: "Присоединиться можно прямо из этого браузера — без приложения и без аккаунта. А вот тому, кто начинает историю, приложение нужно.",
      p_end_more: "Другие приложения Capy",
      p_ft_privacy: "Конфиденциальность", p_ft_terms: "Условия", p_ft_support: "Поддержка",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Сделано с 🍊 и дневным сном"
    },
    "nl": {
      p_nav_how: "Hoe het werkt", p_nav_feat: "Functies", p_nav_join: "Doe mee aan een verhaal", p_nav_all: "Apps",
      p_ribbon: "✨ Binnenkort in de App Store",
      p_h1: "Laten we samen<br>verhalen maken",
      p_lead: "Eén verhaal, iedereen op zijn eigen telefoon. <b>Capy</b> vertelt en vraagt wat er nu gebeurt — en wie de pen heeft, beslist. Niemand leest vooruit, niemand wacht alleen.",
      p_cta_join: "Doe mee aan een verhaal →", p_cta_how: "Hoe het werkt",
      p_hero_small: "Al bezig? Iemand leest je een code van vier tekens voor.",
      p_how_title: "Zo ontstaat een verhaal 📖",
      p_how_sub: "Vier minuten om te beginnen. Zo lang je wilt om te eindigen. 🌿",
      p_s1t: "1 · Zet het toneel",
      p_s1p: "Kies een genre of drie, een taal, en hoe volwassen het schrijven moet zijn. Voeg personages toe als je die hebt — of laat alles leeg en kijk wat Capy verzint.",
      p_s2t: "2 · Deel de code",
      p_s2p: "Iedereen doet mee met vier tekens, op een telefoon of in een browser. Geen accounts, geen aanmeldingen, geen e-mail.",
      p_s3t: "3 · Om de beurt",
      p_s3p: "Capy schrijft een passage en stelt een vraag. De gastheer geeft de pen aan wie antwoordt — en het verhaal draait op wat die kiest.",
      p_feat_title: "Gemaakt om samen te lezen ✨",
      p_feat_sub: "Voor gezinnen, klaslokalen en lange autoritten. 🚗",
      p_f1t: "Tien talen", p_f1p: "Verhaal en menu's staan los van elkaar: lees een Japans verhaal met Nederlandse menu's, of andersom.",
      p_f2t: "Voorlezen", p_f2p: "Elke passage, met een natuurlijke stem — voor een kind dat het verhaal kan volgen maar nog niet alleen kan lezen.",
      p_f3t: "Wat betekent dit?", p_f3p: "Tik op een woord voor uitleg in <i>jouw</i> taal, in de betekenis die het verhaal gebruikt — niet de eerste uit het woordenboek.",
      p_f4t: "Op maat van de lezer", p_f4p: "Van “net begonnen met deze taal” tot universitair niveau. De verteller schrijft binnen die band en controleert zichzelf.",
      p_f5t: "Splits het verhaal", p_f5p: "Word je het niet eens over het vervolg? Splits het in tweeën. Beide helften gaan verder, vanaf dezelfde passages.",
      p_f6t: "Bewaar wat je maakt", p_f6p: "Bewaar een verhaal in je bibliotheek en het volgt je naar elk apparaat — om te herlezen, voor te lezen of later verder te schrijven.",
      p_end_title: "Heeft iemand je een code gestuurd?",
      p_end_sub: "Je kunt meedoen vanuit deze browser — geen app, geen account. Wie het verhaal begint, heeft de app wel nodig.",
      p_end_more: "Meer van Capy",
      p_ft_privacy: "Privacy", p_ft_terms: "Voorwaarden", p_ft_support: "Ondersteuning",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Gemaakt met 🍊 en dutjes"
    },
    "pl": {
      p_nav_how: "Jak to działa", p_nav_feat: "Funkcje", p_nav_join: "Dołącz do opowieści", p_nav_all: "Aplikacje",
      p_ribbon: "✨ Wkrótce w App Store",
      p_h1: "Twórzmy opowieści<br>razem",
      p_lead: "Jedna opowieść, każdy na swoim telefonie. <b>Capy</b> opowiada i pyta, co dalej — a decyduje ten, kto trzyma pióro. Nikt nie zagląda naprzód, nikt nie czeka sam.",
      p_cta_join: "Dołącz do opowieści →", p_cta_how: "Jak to działa",
      p_hero_small: "Już gracie? Ktoś przeczyta ci czteroznakowy kod.",
      p_how_title: "Jak rodzi się opowieść 📖",
      p_how_sub: "Cztery minuty, żeby zacząć. Tyle, ile chcecie, żeby skończyć. 🌿",
      p_s1t: "1 · Ustawcie scenę",
      p_s1p: "Wybierzcie gatunek albo trzy, język i to, jak dorosłe ma być pisanie. Dodajcie postaci, jeśli je macie — albo zostawcie wszystko puste i zobaczcie, co wymyśli Capy.",
      p_s2t: "2 · Podajcie kod",
      p_s2p: "Wszyscy dołączają czterema znakami, na telefonie albo w przeglądarce. Bez kont, bez rejestracji, bez e-maila.",
      p_s3t: "3 · Po kolei",
      p_s3p: "Capy pisze fragment i zadaje pytanie. Gospodarz przekazuje pióro temu, kto odpowiada — i opowieść skręca za jego wyborem.",
      p_feat_title: "Zrobione do wspólnego czytania ✨",
      p_feat_sub: "Dla rodzin, klas i długich podróży samochodem. 🚗",
      p_f1t: "Dziesięć języków", p_f1p: "Opowieść i menu są osobno: czytaj japońską opowieść z polskim menu albo odwrotnie.",
      p_f2t: "Czytanie na głos", p_f2p: "Dowolny fragment, naturalnym głosem — dla dziecka, które nadąża za opowieścią, ale samo jeszcze nie czyta.",
      p_f3t: "Co to znaczy?", p_f3p: "Dotknij dowolnego słowa, a dostaniesz wyjaśnienie w <i>swoim</i> języku — w tym znaczeniu, którego używa opowieść, a nie pierwszym ze słownika.",
      p_f4t: "Pod czytelnika", p_f4p: "Od „dopiero zaczynam ten język” po poziom studiów. Narrator pisze w tym paśmie i sam się sprawdza.",
      p_f5t: "Rozgałęź opowieść", p_f5p: "Nie możecie się dogadać, co dalej? Podzielcie ją na dwie. Obie połowy idą dalej, od tych samych fragmentów.",
      p_f6t: "Zachowaj to, co tworzycie", p_f6p: "Zapisz opowieść w bibliotece, a pójdzie z tobą na każde urządzenie — do ponownego czytania, słuchania albo dopisania później.",
      p_end_title: "Ktoś przysłał ci kod?",
      p_end_sub: "Możesz dołączyć z tej przeglądarki — bez aplikacji, bez konta. Ale osoba, która zaczyna opowieść, potrzebuje aplikacji.",
      p_end_more: "Więcej od Capy'ego",
      p_ft_privacy: "Prywatność", p_ft_terms: "Regulamin", p_ft_support: "Pomoc",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · Zrobione z 🍊 i drzemek"
    },
    "tr": {
      p_nav_how: "Nasıl çalışır", p_nav_feat: "Özellikler", p_nav_join: "Bir hikâyeye katıl", p_nav_all: "Uygulamalar",
      p_ribbon: "✨ Yakında App Store'da",
      p_h1: "Birlikte hikâyeler<br>yazalım",
      p_lead: "Tek bir hikâye, herkes kendi telefonunda. <b>Capy</b> anlatır ve sırada ne olacağını sorar — kalemi tutan karar verir. Kimse ileriyi okumaz, kimse yalnız beklemez.",
      p_cta_join: "Bir hikâyeye katıl →", p_cta_how: "Nasıl çalışır",
      p_hero_small: "Zaten oynuyor musunuz? Biri size dört karakterlik bir kod okuyacak.",
      p_how_title: "Bir hikâye böyle doğar 📖",
      p_how_sub: "Başlamak dört dakika. Bitirmek istediğiniz kadar. 🌿",
      p_s1t: "1 · Sahneyi kurun",
      p_s1p: "Bir ya da üç tür, bir dil ve yazının ne kadar yetişkin olacağını seçin. Karakterleriniz varsa ekleyin — ya da hepsini boş bırakın ve Capy'nin ne uyduracağını görün.",
      p_s2t: "2 · Kodu paylaşın",
      p_s2p: "Herkes dört karakterle katılır; telefondan ya da tarayıcıdan. Hesap yok, kayıt yok, e-posta yok.",
      p_s3t: "3 · Sırayla yazın",
      p_s3p: "Capy bir bölüm yazar ve bir soru sorar. Ev sahibi kalemi cevaplayana uzatır — ve hikâye onun seçtiğiyle döner.",
      p_feat_title: "Birlikte okumak için yapıldı ✨",
      p_feat_sub: "Aileler, sınıflar ve uzun araba yolculukları için. 🚗",
      p_f1t: "On dil", p_f1p: "Hikâye ile menüler ayrıdır: Japonca bir hikâyeyi Türkçe menülerle okuyun ya da tam tersi.",
      p_f2t: "Sesli okuma", p_f2p: "Herhangi bir bölüm, doğal bir sesle — hikâyeyi takip edebilen ama henüz tek başına okuyamayan çocuk için.",
      p_f3t: "Bu ne demek?", p_f3p: "Herhangi bir kelimeye dokunun, <i>kendi</i> dilinizde açıklansın — hem de hikâyenin kullandığı anlamıyla, sözlüğün ilk maddesiyle değil.",
      p_f4t: "Okuyucuya göre", p_f4p: "“Bu dile yeni başladım”dan üniversite seviyesine kadar. Anlatıcı o aralıkta yazar ve kendini denetler.",
      p_f5t: "Hikâyeyi dallandırın", p_f5p: "Sırada ne olacağında anlaşamadınız mı? İkiye ayırın. Her iki yarı da aynı bölümlerden devam eder.",
      p_f6t: "Yazdığınızı saklayın", p_f6p: "Bir hikâyeyi kitaplığınıza kaydedin, her cihaza sizinle gelsin — yeniden okumak, dinlemek ya da sonra devam etmek için.",
      p_end_title: "Size bir kod mu gönderdiler?",
      p_end_sub: "Bu tarayıcıdan katılabilirsiniz — uygulama yok, hesap yok. Ama hikâyeyi başlatan kişinin uygulamaya ihtiyacı var.",
      p_end_more: "Capy'den dahası",
      p_ft_privacy: "Gizlilik", p_ft_terms: "Koşullar", p_ft_support: "Destek",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · 🍊 ve şekerlemelerle yapıldı"
    },
    "ar": {
      p_nav_how: "كيف تعمل", p_nav_feat: "المزايا", p_nav_join: "انضم إلى قصة", p_nav_all: "التطبيقات",
      p_ribbon: "✨ قريبًا على App Store",
      p_h1: "لنؤلّف القصص<br>معًا",
      p_lead: "قصة واحدة، وكل شخص على هاتفه. يروي <b>Capy</b> ويسأل: ماذا يحدث بعد ذلك؟ — ومن يمسك القلم هو من يقرّر. لا أحد يقرأ ما هو آتٍ، ولا أحد ينتظر وحده.",
      p_cta_join: "انضم إلى قصة →", p_cta_how: "كيف تعمل",
      p_hero_small: "هل بدأتم اللعب؟ سيقرأ لك أحدهم رمزًا من أربعة أحرف.",
      p_how_title: "هكذا تولد القصة 📖",
      p_how_sub: "أربع دقائق للبدء. وما تشاؤون من الوقت للنهاية. 🌿",
      p_s1t: "١ · هيّئوا المشهد",
      p_s1p: "اختاروا نوعًا أو ثلاثة، ولغةً، ومدى نضج الأسلوب. أضيفوا شخصياتكم إن كانت لديكم — أو اتركوا كل شيء فارغًا وانظروا ماذا يخترع Capy.",
      p_s2t: "٢ · شاركوا الرمز",
      p_s2p: "ينضم الجميع بأربعة أحرف، من الهاتف أو من المتصفح. بلا حسابات ولا تسجيل ولا بريد إلكتروني.",
      p_s3t: "٣ · بالتناوب",
      p_s3p: "يكتب Capy مقطعًا ثم يطرح سؤالًا. يسلّم المضيف القلم لمن يجيب — وتنعطف القصة مع ما يختاره.",
      p_feat_title: "صُنعت للقراءة معًا ✨",
      p_feat_sub: "للعائلات والفصول الدراسية ورحلات السيارة الطويلة. 🚗",
      p_f1t: "عشر لغات", p_f1p: "القصة والقوائم منفصلتان: اقرأ قصة يابانية بقوائم عربية، أو العكس.",
      p_f2t: "القراءة بصوت عالٍ", p_f2p: "أي مقطع، بصوت طبيعي — للطفل الذي يتابع القصة ولا يقرؤها وحده بعد.",
      p_f3t: "ما معنى هذه الكلمة؟", p_f3p: "المس أي كلمة لتحصل على شرح بلغتك <i>أنت</i>، وبالمعنى الذي تستخدمه القصة — لا أول معنى في القاموس.",
      p_f4t: "على قدر القارئ", p_f4p: "من «بدأت للتو بهذه اللغة» إلى المستوى الجامعي. يكتب الراوي ضمن هذا المدى ويراجع نفسه.",
      p_f5t: "شعّبوا القصة", p_f5p: "اختلفتم على ما سيحدث بعد ذلك؟ اقسموها إلى اثنتين. يمضي النصفان معًا، انطلاقًا من المقاطع نفسها.",
      p_f6t: "احتفظوا بما تكتبونه", p_f6p: "احفظ القصة في مكتبتك فتتبعك إلى كل جهاز — لتقرأها ثانية، أو تستمع إليها، أو تكملها لاحقًا.",
      p_end_title: "هل أرسل لك أحدهم رمزًا؟",
      p_end_sub: "يمكنك الانضمام من هذا المتصفح — بلا تطبيق وبلا حساب. أما من بدأ القصة فيحتاج إلى التطبيق.",
      p_end_more: "المزيد من Capy",
      p_ft_privacy: "الخصوصية", p_ft_terms: "الشروط", p_ft_support: "الدعم",
      p_ft_made: "© 2026 PXT Tech Studio, LLC · صُنع بـ 🍊 وقيلولة"
    }
  };

  // ---- machinery (mirrors /assets/i18n.js) ----

  var DEFAULTS = {}, ISHTML = {};
  function captureDefaults() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (DEFAULTS[k] != null) return;
      var hasTag = el.innerHTML.indexOf("<") >= 0;
      ISHTML[k] = hasTag;
      DEFAULTS[k] = hasTag ? el.innerHTML : el.textContent;
    });
  }

  function render(lang) {
    var t = I18N[lang] || {};
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = t[k] != null ? t[k] : DEFAULTS[k];
      if (v == null) return;
      if (ISHTML[k]) el.innerHTML = v; else el.textContent = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL[lang] ? "rtl" : "ltr";
    var sel = document.getElementById("langsel");
    if (sel) sel.value = lang;
    try { localStorage.setItem("wr_lang", lang); } catch (e) {}
  }

  function resolveLang(code) {
    if (!code) return "en";
    if (I18N[code] || code === "en") return code;
    var base = code.split("-")[0].toLowerCase();
    if (base === "zh") return /hant|tw|hk|mo/i.test(code) ? "zh-Hant" : "zh-Hans";
    if (base === "pt") return "pt-BR";
    for (var i = 0; i < LANGS.length; i++) if (LANGS[i][0].split("-")[0] === base) return LANGS[i][0];
    return "en";
  }

  function build() {
    captureDefaults();
    var bar = document.getElementById("langpick");
    if (!bar) return;
    var sel = document.createElement("select");
    sel.id = "langsel";
    sel.setAttribute("aria-label", "Choose language");
    LANGS.forEach(function (pair) {
      var o = document.createElement("option");
      o.value = pair[0];
      o.textContent = pair[1];
      sel.appendChild(o);
    });
    sel.addEventListener("change", function () { render(sel.value); });
    bar.appendChild(sel);

    var initial = "en", param = null;
    try { param = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
    if (param) {
      initial = resolveLang(param);
    } else {
      try {
        var saved = localStorage.getItem("wr_lang") || localStorage.getItem("wr_site_lang");
        if (saved && (I18N[saved] || saved === "en")) initial = saved;
        else initial = resolveLang(navigator.language || navigator.userLanguage);
      } catch (e) { initial = resolveLang(navigator.language); }
    }
    render(initial);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
