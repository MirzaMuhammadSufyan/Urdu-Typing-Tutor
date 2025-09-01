    // Define comprehensive training system with different levels and modes
    const trainingContent = {
        beginner: {
            letters: [
                "ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ہ ء ی ے الف با پے تے ٹے ثے جیم چے حے خے دال ڈال ذال رے ڑے زے ژے سین شین صاد ضاد طے ظے عین غین فے قاف کاف گاف لام میم نون واو ہے ہمزہ یے یے بڑی",
                "اب پاک تاک ٹاک جاک چاک راک زاک ساک فاک کاک گاک لاک ماک ناک واک یاک بے پے تے ٹے جے چے رے زے سے فے کے گے لے مے نے ہے یے آ بآ پآ تآ ٹآ جآ چآ رآ زآ سآ فآ کآ گآ لآ مآ نآ ہآ یآ",
                "اے بے پے تے ٹے جے چے رے زے سے فے کے گے لے مے نے ہے یے او بو پو تو ٹو جو چو رو زو سو فو کو گو لو مو نو ہو یو ای بی پی تی ٹی جی چی ری زی سی فی کی گی لی می نی ہی یی",
                "کا کے کی کو کر کل کم کب کہ کن کس کت کد کر کز کش کص کض کط کظ کع کغ کف کق کگ کل کم کن کہ کء کی کے کا کے کی کو کر کل کم کب کہ کن کس",
                "با بے بی بو بر بل بم بن بہ بس بت بد بر بز بش بص بض بط بظ بع بغ بف بق بگ بل بم بن بہ بء بی بے با بے بی بو بر بل بم بن بہ بس بت",
                "پا پے پی پو پر پل پم پن پہ پس پت پد پر پز پش پص پض پط پظ پع پغ پف پق پگ پل پم پن پہ پء پی پے پا پے پی پو پر پل پم پن پہ پس پت",
                "تا تے تی تو تر تل تم تن تہ تس تت تد تر تز تش تص تض تط تظ تع تغ تف تق تگ تل تم تن تہ تء تی تے تا تے تی تو تر تل تم تن تہ تس تت",
                "جا جے جی جو جر جل جم جن جہ جس جت جد جر جز جش جص جض جط جظ جع جغ جف جق جگ جل جم جن جہ جء جی جے جا جے جی جو جر جل جم جن جہ جس جت"
            ],
            words: [
                "کتاب قلم میز کرسی گھر درخت پانی آگ ہوا پھول پرندہ بلی کتا گائے بکری اچھا برا بڑا چھوٹا نیا پرانا سفید کالا لال نیلا ہرا پیلا آپ میں ہم وہ یہ کیا کون کب کہاں کیوں کیسے کھانا پینا سونا جاگنا پڑھنا لکھنا دیکھنا سننا بولنا چلنا دوڑنا",
                "صبح شام دن رات آج کل پہلے بعد میں اوپر نیچے اندر باہر ماں باپ بھائی بہن بیٹا بیٹی دادا دادی نانا نانی چچا چچی اسکول کالج کام کاروبار پیسہ روپیہ خریدنا بیچنا لانا لے جانا خوشی غم محبت نفرت امید مایوسی خوف بہادری صبر شکر",
                "دوست احباب رشتہ دار پڑوسی مہمان مسافر راہگیر کاروباری تاجر کسان مزدور ڈاکٹر انجینئر استاد طالب علم شاگرد پولیس فوجی سپاہی گھر مکان دکان بازار سڑک گلی محلہ شہر قصبہ گاؤں دیہات",
                "کھیل کود فٹبال کرکٹ ہاکی ٹینس بیڈمنٹن والی بال باسکٹ بال تیراکی دوڑ کود چھلانگ کشتی باکسنگ جمناسٹک یوگا ورزش صحت تندرستی طاقت توانائی جوانی بڑھاپا بچپن لڑکپن",
                "کھانے پینے کی اشیاء چاول گندم مکئی جو باجرہ چنا مسور مونگ ماش اروہر دال سبزی گوشت مچھی انڈے دودھ دہی مکھن گھی تیل نمک چینی مرچ مصالحے ہلدی دھنیا زیرہ کالی مرچ لال مرچ",
                "پھل سبزیاں آم کیلا انگور سیب ناشپاتی خربوزہ تربوز انار امرود نارنگی لیموں آلو پیاز ٹماٹر بینگن بھنڈی کریلا توری کدو گاجر مولی پالک میتھی سرسوں بند گوبھی پھول گوبھی",
                "جانور پرندے شیر چیتا ہاتھی گھوڑا اونٹ بھینس گائے بکرا بکری بھیڑ خرگوش بلی کتا بندر ریچھ ہرن مرغ طوطا کبوتر کوا چیل باز عقاب مور مرغابی ہنس بطخ",
                "رنگ برنگ سفید کالا لال نیلا ہرا پیلا نارنگی جامنی گلابی بھورا خاکی سنہری چاندی سرخ زرد نیلگوں سبز ارغوانی بنفشی سرمئی روشن تاریک چمکدار مدھم"
            ],
            sentences: [
                "میں اچھا ہوں۔ آپ کیسے ہیں؟ یہ میری کتاب ہے۔ وہ اپنے گھر جا رہا ہے۔ بچے کھیل رہے ہیں۔ ماں کھانا بنا رہی ہے۔ باپ کام کر رہا ہے۔ پرندے درخت پر بیٹھے ہیں۔ بلی دودھ پی رہی ہے۔ آج موسم بہت اچھا ہے۔",
                "بارش ہو رہی ہے۔ بچے پارک میں کھیل رہے ہیں۔ وہ بہت خوش ہیں۔ میرا نام احمد ہے۔ میں کراچی میں رہتا ہوں۔ استاد نے کہا کہ محنت کرو۔ تب کامیابی ملے گی۔ ہمیں اپنے والدین کا احترام کرنا چاہیے۔ وہ ہماری خیر خواہی کرتے ہیں۔",
                "صبح سویرے اٹھنا صحت کے لیے اچھا ہے۔ ہمیں روزانہ ورزش کرنی چاہیے۔ کھیل کود میں حصہ لینا ضروری ہے۔ پڑھائی کے ساتھ ساتھ کھیل بھی اہم ہے۔ دوستوں کے ساتھ وقت گزارنا خوشی کی بات ہے۔ ہمیں ہمیشہ سچ بولنا چاہیے۔",
                "جھوٹ بولنا برا کام ہے۔ ہمیں غریبوں کی مدد کرنی چاہیے۔ مہمانوں کا اکرام کرنا اچھی بات ہے۔ بزرگوں کا احترام کرنا ہماری ذمہ داری ہے۔ چھوٹوں سے پیار کرنا چاہیے۔ ہمیں اپنے ملک سے محبت کرنی چاہیے۔ قوم کی خدمت کرنا فرض ہے۔",
                "علم حاصل کرنا ہر انسان کا حق ہے۔ کتابوں سے دوستی کرنی چاہیے۔ استاد کی عزت کرنی چاہیے۔ وقت کی قدر کرنی چاہیے۔ محنت کا پھل میٹھا ہوتا ہے۔ صبر کرنے والے کامیاب ہوتے ہیں۔ امید کبھی نہیں چھوڑنی چاہیے۔ ہمیشہ مثبت سوچنا چاہیے۔",
                "ماحول کو صاف رکھنا ہماری ذمہ داری ہے۔ درخت لگانا بہت اچھا کام ہے۔ پانی کی بچت کرنی چاہیے۔ بجلی کا غلط استعمال نہیں کرنا چاہیے۔ فضلہ کو مناسب جگہ پھینکنا چاہیے۔ آلودگی سے بچنا ضروری ہے۔ صحت مند ماحول میں زندگی بہتر ہوتی ہے۔",
                "تکنیکی ترقی نے زندگی آسان بنا دی ہے۔ کمپیوٹر اور انٹرنیٹ بہت مفید ہیں۔ موبائل فون سے رابطہ آسان ہو گیا ہے۔ لیکن ہمیں ان کا صحیح استعمال کرنا چاہیے۔ زیادہ استعمال نقصان دہ ہو سکتا ہے۔ بچوں کو محدود وقت دینا چاہیے۔ حقیقی زندگی زیادہ اہم ہے۔",
                "کھیل کود صحت کے لیے ضروری ہے۔ فٹبال اور کرکٹ مقبول کھیل ہیں۔ تیراکی پوری جسم کی ورزش ہے۔ دوڑنا سب سے آسان ورزش ہے۔ یوگا ذہنی سکون دیتا ہے۔ باغبانی بھی اچھی ورزش ہے۔ کھیل کے ذریعے نئے دوست بنتے ہیں۔ ٹیم ورک کی اہمیت سیکھتے ہیں۔"
            ]
        },
        basic: {
            words: [
                "تعلیم صحت خوشی محبت دوستی عزت احترام امن سلامتی خوبصورتی",
                "اسکول کالج یونیورسٹی ہسپتال مسجد گرجا مندر گردوارہ",
                "کراچی لاہور اسلام آباد پشاور کوئٹہ حیدرآباد فیصل آباد راولپنڈی",
                "پاکستان بھارت چین امریکا انگلینڈ فرانس جرمنی جاپان",
                "کمپیوٹر انٹرنیٹ موبائل ٹیلی ویژن ریڈیو اخبار کتاب رسالہ",
                "ڈاکٹر انجینئر استاد وکیل پولیس فوج کسان مزدور تاجر",
                "گندم چاول مکئی جو باجرہ چنا مسور مونگ ماش اروہر",
                "آم کیلا انگور سیب ناشپاتی خربوزہ تربوز انار امرود نارنگی"
            ],
            sentences: [
                "پاکستان ایک خوبصورت ملک ہے۔ یہاں مختلف زبانیں بولی جاتی ہیں۔",
                "تعلیم ہر انسان کا بنیادی حق ہے۔ ہمیں محنت سے پڑھنا چاہیے۔",
                "والدین کا احترام کرنا ضروری ہے۔ وہ ہماری خیر خواہی کرتے ہیں۔",
                "دوست وہ ہے جو مشکل وقت میں ساتھ دے۔ سچے دوست ملنا مشکل ہے۔",
                "علم حاصل کرنا ہر مسلمان کا فرض ہے۔ جاہل لوگ ترقی نہیں کر سکتے۔",
                "وقت بہت قیمتی ہے۔ اسے ضائع نہیں کرنا چاہیے۔",
                "صحت سب سے بڑی دولت ہے۔ اس کا خیال رکھنا ضروری ہے۔",
                "محنت کا پھل ہمیشہ میٹھا ہوتا ہے۔ آلسی لوگ کامیاب نہیں ہوتے۔"
            ]
        },
        intermediate: {
            sentences: [
                "قدرت نے انسان کو عقل کی نعمت سے نوازا ہے۔ اس نعمت کا صحیح استعمال کرنا ہماری ذمہ داری ہے۔",
                "محنت کا پھل میٹھا ہوتا ہے۔ جو لوگ محنت کرتے ہیں وہ کامیاب ہوتے ہیں۔",
                "علم حاصل کرنا ہر مسلمان مرد اور عورت پر فرض ہے۔ علم انسان کو روشنی کی طرف لے جاتا ہے۔",
                "صبر کا پھل میٹھا ہوتا ہے۔ مشکل وقت میں صبر کرنے والے کامیاب ہوتے ہیں۔",
                "اللہ تعالیٰ نے انسان کو اشرف المخلوقات بنایا ہے۔ انسان کو اپنی ذمہ داریاں سمجھنی چاہیئں۔",
                "دنیا میں امن و سلامتی کے لیے ہمیں مل جل کر کام کرنا چاہیے۔ نفرت سے کچھ حاصل نہیں ہوتا۔",
                "ماحولیات کا تحفظ ہماری ذمہ داری ہے۔ ہمیں درختوں کو کاٹنے سے بچنا چاہیے۔",
                "تکنیکی ترقی نے انسانی زندگی کو آسان بنا دیا ہے۔ لیکن اس کے نقصانات بھی ہیں۔"
            ],
            paragraphs: [
                "ایک دفعہ کا ذکر ہے کہ ایک گاوں میں علی نام کا لڑکا رہتا تھا۔ علی بہت ذہین اور محنتی تھا۔ اس کے والدین کسان تھے اور وہ زمین پر کام کرتے تھے۔ علی نے بچپن سے ہی پڑھائی میں دلچسپی لی تھی اور ہمیشہ اعلیٰ نمبرات حاصل کرتا تھا۔",
                "پاکستان کی تاریخ بہت دلچسپ اور تنوع سے بھری ہوئی ہے۔ یہ خطہ قدیم زمانے سے مختلف تہذیبوں کا گہوارہ رہا ہے۔ موہن جو دڑو اور ہڑپہ کی تہذیب یہاں پھلی پھولی۔ مختلف ادوار میں مختلف حکمرانوں نے یہاں حکومت کی۔",
                "تعلیم کی اہمیت کسی بھی معاشرے میں انکار نہیں کی جا سکتی۔ تعلیم انسان کی شخصیت کو نکھارتی ہے اور اسے بہتر انسان بناتی ہے۔ جو قومیں تعلیم کو اہمیت دیتی ہیں وہ ترقی کرتی ہیں۔ ہمیں اپنے بچوں کی تعلیم پر خاص توجہ دینی چاہیے۔"
            ]
        },
        advanced: {
            paragraphs: [
                "انٹرنیٹ کے توسط سے مختلف کھیل، کارٹون، ڈرامے، جانوروں اور جادوئی فلموں کا خزانہ اس میں موجود ہوتا ہے۔بچے ایسی ہی چیزوں کی طرف تیزی سے لپکتے ہیں۔یہی کچھ ثاقب کے ساتھ ہوا۔آہستہ آہستہ ثاقب کی موبائل فون سے قربت گہری ہونے لگی۔وہ اب اس کا استعمال زیادہ کرنے لگا تھا۔میں اسے تنبیہ کر کے موبائل لے لیتا، لیکن وہ میری شفقت کا فائدہ اُٹھا کر کچھ دیر اور استعمال کرتا۔",
                "قدرت کے عجائبات ہمیں ہر روز نظر آتے ہیں۔ پہاڑوں کی بلندیوں سے لے کر دریا کی روانی تک، ہر چیز میں قدرت کی خوبصورتی جھلکتی ہے۔ درختوں کی شاخیں ہوا کے ساتھ جھومتی ہیں اور پرندے ان پر بیٹھ کر اپنے گیت سناتے ہیں۔ ہر موسم کی اپنی ایک الگ خاصیت ہوتی ہے۔",
                "جدید دور میں سائنس اور ٹیکنالوجی نے انسانی زندگی میں انقلاب برپا کر دیا ہے۔ کمپیوٹر، انٹرنیٹ، موبائل فون اور دیگر آلات نے دنیا کو ایک گلوبل ولیج بنا دیا ہے۔ لیکن اس ترقی کے ساتھ ساتھ کئی مسائل بھی پیدا ہوئے ہیں۔ ہمیں ان کا حل تلاش کرنا ہوگا۔",
                "اردو ادب کی تاریخ بہت طویل اور دلچسپ ہے۔ مختلف ادوار میں عظیم شاعروں اور ادیبوں نے اردو زبان کو مالا مال کیا ہے۔ میر تقی میر، غالب، اقبال، فیض احمد فیض جیسے شاعروں نے اردو شاعری کو عالمی سطح پر پہچان دلائی۔ آج بھی نئے شاعر اور ادیب اردو ادب میں اضافہ کر رہے ہیں۔"
            ]
        },
        expert: {
            paragraphs: [
                "ادبی تنقید کا مطالعہ کرتے وقت ہمیں مختلف نظریات اور فلسفوں سے واقفیت حاصل کرنی پڑتی ہے۔ کلاسیکی ادب سے لے کر جدید ادب تک، ہر دور کے اپنے خاص اسالیب اور موضوعات ہیں۔ شاعری میں بحر، قافیہ، ردیف کی اہمیت کو سمجھنا ضروری ہے۔ نثر میں طنز و مزاح، داستان، ناول، افسانہ جیسی اصناف کا مطالعہ کرنا ہوتا ہے۔",
                "سائنسی انقلاب نے انسانی تہذیب کو جس طرح متاثر کیا ہے، اس کی مثال تاریخ میں نہیں ملتی۔ فزکس، کیمسٹری، بائیولوجی، ریاضی جیسے علوم نے نہ صرف ہماری سوچ بدلی ہے بلکہ زندگی کے ہر شعبے میں انقلاب برپا کر دیا ہے۔ کمپیوٹر، انٹرنیٹ، مصنوعی ذہانت جیسی ایجادات نے دنیا کو گلوبل ولیج بنا دیا ہے۔",
                "فلسفہ انسانی فکر کی بنیادی بنیاد ہے۔ یہ وجود، علم، اخلاقیات، منطق اور جمالیات جیسے بنیادی سوالات کا جواب تلاش کرتا ہے۔ مختلف فلسفیوں نے اپنے اپنے نظریات پیش کیے ہیں۔ افلاطون، ارسطو، ابن سینا، الغزالی، کانٹ، ہیگل جیسے عظیم فلسفیوں نے انسانی فکر کو نئی جہات دی ہیں۔",
                "عالمی سیاست میں توازن کی اہمیت کو نظرانداز نہیں کیا جا سکتا۔ مختلف ممالک کے درمیان تعلقات، اقتصادی مفادات، ثقافتی تبادلے اور سفارتی رشتے عالمی امن کے لیے ضروری ہیں۔ جب تک دنیا کے ممالک آپس میں تعاون نہیں کریں گے، عالمی مسائل کا حل ممکن نہیں۔ آج کل کی دنیا میں کوئی بھی ملک تنہا کامیاب نہیں ہو سکتا۔"
            ]
        }
    };

    // Function to get current practice text based on level and mode
    function getCurrentPracticeText() {
        const level = document.getElementById("level-dropdown").value;
        const mode = document.getElementById("mode-dropdown").value;
        
        const content = trainingContent[level];
        if (!content || !content[mode]) {
            // Fallback to beginner letters if selection is invalid
            return trainingContent.beginner.letters[0];
        }
        
        const textArray = content[mode];
        return textArray[Math.floor(Math.random() * textArray.length)];
    }

    // Function to calculate automatic time based on text length
    function calculateAutoTime(text) {
        const words = text.split(" ").length;
        let timeInSeconds;
        
        // Time calculation based on text length and difficulty
        if (words <= 10) {
            timeInSeconds = 60; // 1 minute for short texts
        } else if (words <= 25) {
            timeInSeconds = 120; // 2 minutes for medium texts
        } else if (words <= 50) {
            timeInSeconds = 180; // 3 minutes for longer texts
        } else if (words <= 100) {
            timeInSeconds = 300; // 5 minutes for very long texts
        } else {
            timeInSeconds = 600; // 10 minutes for paragraphs
        }
        
        return timeInSeconds;
    }

    // Initialize typing text (will be set after DOM loads)
    let typingText = "";

    // Global variables
    let paragraph;
    let wordIndex = 0;
    let timeRemaining = 0;
    let correctWords = 0;
    let totalWords = 0;
    let typingStartTime = 0;
    let typingFlag = false;
    let countdownInterval = null; // Timer interval variable
    
    // Variables to preserve data for SweetAlert
    let preservedStats = {
        totalWords: 0,
        correctWords: 0,
        wrongWords: 0,
        grossSpeed: 0,
        netSpeed: 0,
        accuracy: 0
    };
    function showAlert() {
        document.getElementById("custom-alert").style.display = "block";
    }

    function closeAlert() {
        document.getElementById("custom-alert").style.display = "none";
    }
    function resetPage() {
        location.reload(); // This reloads the entire page
    }

    function preserveCurrentStats() {
        const accuracy = parseFloat(document.getElementById("accuracy").textContent);
        const wpm = parseInt(document.getElementById("wpm").textContent);
        const elapsedTime = (Date.now() - typingStartTime) / 1000 / 60; 
        const grossSpeed = elapsedTime > 0 ? Math.floor((totalWords / elapsedTime)) : 0;
        
        preservedStats = {
            totalWords: totalWords,
            correctWords: correctWords,
            wrongWords: totalWords - correctWords,
            grossSpeed: grossSpeed,
            netSpeed: wpm,
            accuracy: accuracy
        };
    }

    function customAlert(message) {
        let suggestion = "";
        let suggestionIcon = "info";
        
        if (preservedStats.accuracy >= 95 && preservedStats.netSpeed >= 30) {
            suggestion = "بہترین! اگلے لیول کی کوشش کریں۔";
            suggestionIcon = "success";
        } else if (preservedStats.accuracy >= 85) {
            suggestion = "اچھا! مزید مشق کریں۔";
            suggestionIcon = "success";
        } else if (preservedStats.accuracy >= 70) {
            suggestion = "مزید مشق کی ضرورت ہے۔";
            suggestionIcon = "warning";
        } else {
            suggestion = "بنیادی مشق کریں۔";
            suggestionIcon = "error";
        }
        
        // Tabular format statistics
        const statsHtml = `
            <div style="font-family: 'Noto Nastaliq Urdu', serif; direction: rtl;">
                <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                    <tr style="background-color: #f8f9fa;">
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">کل الفاظ</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">صحیح الفاظ</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">غلط الفاظ</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${preservedStats.totalWords}</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #28a745;">${preservedStats.correctWords}</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #dc3545;">${preservedStats.wrongWords}</td>
                    </tr>
                </table>
                
                <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
                    <tr style="background-color: #f8f9fa;">
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">Gross Speed</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">Net Speed</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; font-weight: bold;">Accuracy</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${preservedStats.grossSpeed} WPM</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${preservedStats.netSpeed} WPM</td>
                        <td style="padding: 8px; border: 1px solid #ddd; text-align: center; color: #007bff;">${preservedStats.accuracy}%</td>
                    </tr>
                </table>
                
                <div style="margin-top: 15px; padding: 10px; background: #e9ecef; border-radius: 5px; text-align: center; font-weight: bold;">
                    ${suggestion}
                </div>
            </div>
        `;

        Swal.fire({
            title: message,
            html: statsHtml,
            icon: suggestionIcon,
            confirmButtonText: 'اوکے',
            confirmButtonColor: '#6366f1',
            width: '500px',
            customClass: {
                popup: 'urdu-alert',
                title: 'urdu-title',
                confirmButton: 'urdu-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Reset after user clicks OK
                reset();
            }
        });
    }

    function getNextLevelSuggestion() {
        const currentLevel = document.getElementById("level-dropdown").value;
        const currentMode = document.getElementById("mode-dropdown").value;
        
        const levelOrder = ["beginner", "basic", "intermediate", "advanced", "expert"];
        const modeOrder = ["letters", "words", "sentences", "paragraphs"];
        
        const currentLevelIndex = levelOrder.indexOf(currentLevel);
        const currentModeIndex = modeOrder.indexOf(currentMode);
        
        // First try to advance mode within same level
        if (currentModeIndex < modeOrder.length - 1) {
            const nextMode = modeOrder[currentModeIndex + 1];
            const modeNames = {
                words: "الفاظ کی مشق",
                sentences: "جملوں کی مشق", 
                paragraphs: "پیراگرافز کی مشق"
            };
            return modeNames[nextMode];
        }
        
        // If at highest mode, try to advance level
        if (currentLevelIndex < levelOrder.length - 1) {
            const nextLevel = levelOrder[currentLevelIndex + 1];
            const levelNames = {
                basic: "بنیادی لیول",
                intermediate: "درمیانہ لیول",
                advanced: "اعلیٰ لیول", 
                expert: "ماہر لیول"
            };
            return levelNames[nextLevel] + " - حروف کی مشق";
        }
        
        return "آپ ماہر ہیں! بہترین کارکردگی!";
    }

    function initializeParagraph() {
        const words = typingText.split(" ");
        paragraph.innerHTML = "";
        words.forEach((word, index) => {
            const span = document.createElement("span");
            span.textContent = word;
            span.id = index + 1;
            paragraph.appendChild(span);
            paragraph.appendChild(document.createTextNode(" "));
        });
    }

    function highlightWord(correct) {
        const currentWord = document.getElementById(wordIndex + 1);
        if (currentWord) {
            if (correct) {
                currentWord.className = "correct";
                correctWords++;
            } else {
                currentWord.className = "wrong";
            }
        }
        // Don't increment wordIndex here - it will be done in space handler
    }

    function updateStatistics() {
        totalWords++;
        const elapsedTime = (Date.now() - typingStartTime) / 1000 / 60; 
        const wpm = Math.floor((totalWords / elapsedTime));
        const accuracy = ((correctWords / totalWords) * 100).toFixed(2) + "%";
        
        // Update existing elements only
        const wpmElement = document.getElementById("wpm");
        const accuracyElement = document.getElementById("accuracy");
        
        if (wpmElement) {
            wpmElement.textContent = wpm;
        }
        if (accuracyElement) {
            accuracyElement.textContent = accuracy;
        }
        
        console.log('📊 Stats updated - WPM:', wpm, 'Accuracy:', accuracy);
        
        // Update progress
        updateProgress();
    }

    function updateProgress() {
        const totalWordsInText = typingText.split(" ").length;
        const progressPercentage = Math.floor((wordIndex / totalWordsInText) * 100);
        
        const progressPercentageElement = document.getElementById("progress-percentage");
        const progressFillElement = document.getElementById("progress-fill");
        
        if (progressPercentageElement) {
            progressPercentageElement.textContent = progressPercentage + "%";
        }
        if (progressFillElement) {
            progressFillElement.style.width = progressPercentage + "%";
        }
        
        console.log('📈 Progress updated:', progressPercentage + '%');
    }

    function updateLevelInfo() {
        const level = document.getElementById("level-dropdown").value;
        const mode = document.getElementById("mode-dropdown").value;
        
        const levelNames = {
            beginner: "مبتدی",
            basic: "بنیادی", 
            intermediate: "درمیانہ",
            advanced: "اعلیٰ",
            expert: "ماہر"
        };
        
        const modeNames = {
            letters: "حروف کی مشق",
            words: "الفاظ کی مشق", 
            sentences: "جملوں کی مشق",
            paragraphs: "پیراگرافز کی مشق"
        };
        
        document.getElementById("current-level-info").textContent = 
            `${levelNames[level]} - ${modeNames[mode]}`;
    }

    function startCountdown() {
        // Clear any existing timer first
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        
        const countdownElement = document.getElementById("countdown");
        timeRemaining = calculateAutoTime(typingText);
        countdownElement.textContent = timeRemaining;
        
        countdownInterval = setInterval(() => {
            timeRemaining--;
            countdownElement.textContent = timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                countdownInterval = null;
                // Preserve current stats before showing alert
                preserveCurrentStats();
                customAlert("⏰ وقت ختم!");
            }
        }, 1000);
    }
    
    function stopCountdown() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
            countdownInterval = null;
        }
    }

    // Time dropdown listener moved to attachEventListeners function

    // Event listeners (will be attached after DOM loads)

    function updatePracticeText() {
        typingText = getCurrentPracticeText();
        
        // Set initial time based on text length
        const initialTime = calculateAutoTime(typingText);
        document.getElementById("countdown").textContent = initialTime;
        
        reset();
        initializeParagraph();
        highlightNextWord(); // This will also call highlightNextKey()
        updateLevelInfo();
    }

    function reset() {
        console.log('🔄 RESET CALLED! WordIndex being reset to 0');
        console.trace('Reset called from:'); // Shows call stack
        
        // Stop any running timer first
        stopCountdown();
        
        initializeParagraph();
        wordIndex = 0;
        correctWords = 0;
        totalWords = 0;
        typingStartTime = 0;
        typingFlag = false;
        
        const inputBox = document.getElementById("input-box");
        const countdownElement = document.getElementById("countdown");
        const wpmElement = document.getElementById("wpm");
        const accuracyElement = document.getElementById("accuracy");
        
        if (inputBox) inputBox.value = "";
        if (countdownElement) {
            const autoTime = calculateAutoTime(typingText);
            countdownElement.textContent = autoTime;
        }
        if (wpmElement) wpmElement.textContent = "0";
        if (accuracyElement) accuracyElement.textContent = "100%";
        
        // Reset highlighting
        setTimeout(() => {
            highlightNextWord();
        }, 100);
    }

    // Event listeners moved to attachEventListeners function

    function highlightNextWord() {
        console.log('highlightNextWord called - wordIndex:', wordIndex);
        
        // Remove previous word highlighting from all spans
        const allSpans = document.querySelectorAll('#typing-paragraph span');
        allSpans.forEach(span => {
            span.classList.remove('current-word');
        });
        
        // Highlight current word (wordIndex + 1 because IDs start from 1)
        const targetId = wordIndex + 1;
        const currentWordElement = document.getElementById(targetId.toString());
        
        console.log('Looking for element with ID:', targetId);
        console.log('Found element:', currentWordElement);
        
        if (currentWordElement) {
            currentWordElement.classList.add("current-word");
            console.log('✓ Highlighted word:', currentWordElement.textContent, 'at word index:', wordIndex);
            
            // Scroll to current word if needed
            currentWordElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center',
                inline: 'nearest'
            });
        } else {
            console.warn('✗ Could not find word element with ID:', targetId);
            // Debug: Show all available IDs
            const allElements = document.querySelectorAll('#typing-paragraph span[id]');
            console.log('Available word IDs:', Array.from(allElements).map(el => el.id));
        }
        
        // Highlight next key to press
        highlightNextKey();
    }

    function hideNextGroupOfWords(groupSize) {
        const spans = document.getElementById("typing-paragraph").querySelectorAll("span");
        for (let i = groupSize; i < spans.length; i++) {
            spans[i].classList.add("hidden");
        }
    }

    function showNextGroupOfWords(groupSize) {
        const spans = document.getElementById("typing-paragraph").querySelectorAll("span");
        for (let i = groupSize; i < groupSize + 20 && i < spans.length; i++) {
            spans[i].classList.remove("hidden");
        }
        for (let i = groupSize - 20; i > groupSize - 41 && i >= 0; i--) {
            spans[i].classList.add("hidden");
            spans[i].classList.remove("wrong");
            spans[i].classList.remove("correct");
        }
    }

    // Correct Urdu Keyboard Mapping (Based on provided correct mapping)
    const englishToUrdu = {
        // Numbers Normal
        '1': '۱', '2': '۲', '3': '۳', '4': '۴', '5': '۵', 
        '6': '۶', '7': '۷', '8': '۸', '9': '۹', '0': '۰',
        '-': '-', '=': '=',
        
        // Numbers Shift
        '!': '!', '@': '@', '#': '#', '$': '$', '%': '%',
        '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
        '_': '_', '+': '+',
        
        // QWERTY Row Normal
        'q': 'ق', 'w': 'و', 'e': 'ع', 'r': 'ر', 't': 'ت',
        'y': 'ے', 'u': 'ئ', 'i': 'ی', 'o': 'ہ', 'p': 'پ',
        '[': 'ٌ', ']': 'ْ', '\\': '\\',
        
        // QWERTY Row Shift
        'Q': 'ﷺ', 'W': 'ؤ', 'E': 'ؑ', 'R': 'ڑ', 'T': 'ٹ',
        'Y': 'ۓ', 'U': 'ء', 'I': 'ٰ', 'O': 'ۃ', 'P': 'ُ',
        '{': 'ٗ', '}': 'ّ', '|': '|',
        
        // ASDF Row Normal
        'a': 'ا', 's': 'س', 'd': 'د', 'f': 'ف', 'g': 'گ',
        'h': 'ھ', 'j': 'ج', 'k': 'ک', 'l': 'ل',
        ';': '؛', "'": "'",
        
        // ASDF Row Shift
        'A': 'آ', 'S': 'ص', 'D': 'ڈ', 'F': 'ٖ', 'G': 'غ',
        'H': 'ح', 'J': 'ض', 'K': 'خ', 'L': 'ؒ',
        ':': ':', '"': '"',
        
        // ZXCV Row Normal
        'z': 'ز', 'x': 'ش', 'c': 'چ', 'v': 'ط', 'b': 'ب',
        'n': 'ن', 'm': 'م', ',': '،', '.': '۔', '/': '/',
        
        // ZXCV Row Shift
        'Z': 'ذ', 'X': 'ژ', 'C': 'ث', 'V': 'ظ', 'B': '﷽',
        'N': 'ں', 'M': 'ؐ', '<': 'ِ', '>': 'َ', '?': '؟',
        
        // Space
        ' ': ' '
    };

    // Track shift state
    let isShiftPressed = false;

    // Correct Urdu Keyboard Layout (Based on provided correct mapping)
    const keyboardLayout = [
        [
            // Top number row
            {en: '1', ur: '۱', shift: '!'}, {en: '2', ur: '۲', shift: '@'}, {en: '3', ur: '۳', shift: '#'}, 
            {en: '4', ur: '۴', shift: '$'}, {en: '5', ur: '۵', shift: '%'}, {en: '6', ur: '۶', shift: '^'}, 
            {en: '7', ur: '۷', shift: '&'}, {en: '8', ur: '۸', shift: '*'}, {en: '9', ur: '۹', shift: '('}, 
            {en: '0', ur: '۰', shift: ')'}, {en: '-', ur: '-', shift: '_'}, {en: '=', ur: '=', shift: '+'}, 'backspace'
        ],
        [
            'tab',
            {en: 'q', ur: 'ق', shift: 'ﷺ'}, {en: 'w', ur: 'و', shift: 'ؤ'}, {en: 'e', ur: 'ع', shift: 'ؑ'}, 
            {en: 'r', ur: 'ر', shift: 'ڑ'}, {en: 't', ur: 'ت', shift: 'ٹ'}, {en: 'y', ur: 'ے', shift: 'ۓ'}, 
            {en: 'u', ur: 'ئ', shift: 'ء'}, {en: 'i', ur: 'ی', shift: 'ٰ'}, {en: 'o', ur: 'ہ', shift: 'ۃ'}, 
            {en: 'p', ur: 'پ', shift: 'ُ'}, {en: '[', ur: 'ٌ', shift: 'ٗ'}, {en: ']', ur: 'ْ', shift: 'ّ'}, {en: '\\', ur: '\\', shift: '|'}
        ],
        [
            'caps',
            {en: 'a', ur: 'ا', shift: 'آ'}, {en: 's', ur: 'س', shift: 'ص'}, {en: 'd', ur: 'د', shift: 'ڈ'}, 
            {en: 'f', ur: 'ف', shift: 'ٖ'}, {en: 'g', ur: 'گ', shift: 'غ'}, {en: 'h', ur: 'ھ', shift: 'ح'}, 
            {en: 'j', ur: 'ج', shift: 'ض'}, {en: 'k', ur: 'ک', shift: 'خ'}, {en: 'l', ur: 'ل', shift: 'ؒ'}, 
            {en: ';', ur: '؛', shift: ':'}, {en: "'", ur: "'", shift: '"'}, 'enter'
        ],
        [
            'shift-left',
            {en: 'z', ur: 'ز', shift: 'ذ'}, {en: 'x', ur: 'ش', shift: 'ژ'}, {en: 'c', ur: 'چ', shift: 'ث'}, 
            {en: 'v', ur: 'ط', shift: 'ظ'}, {en: 'b', ur: 'ب', shift: '﷽'}, {en: 'n', ur: 'ن', shift: 'ں'}, 
            {en: 'm', ur: 'م', shift: 'ؐ'}, {en: ',', ur: '،', shift: 'ِ'}, {en: '.', ur: '۔', shift: 'َ'}, 
            {en: '/', ur: '/', shift: '؟'}, 'shift-right'
        ],
        ['space']
    ];

    // Key mapping for character detection
    const keyMap = {
        ' ': 'space',
        'Backspace': 'backspace',
        'Enter': 'enter'
    };

    function createVirtualKeyboard() {
        const keyboard = document.getElementById('virtual-keyboard');
        keyboard.innerHTML = '';

        keyboardLayout.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';

            row.forEach(key => {
                const keyDiv = document.createElement('div');
                keyDiv.className = 'key';
                
                if (key === 'space') {
                    keyDiv.className += ' space';
                    keyDiv.innerHTML = 'Space<br><span style="font-size:0.8em;">اسپیس</span>';
                    keyDiv.dataset.key = ' ';
                    keyDiv.dataset.urduKey = ' ';
                } else if (key === 'backspace') {
                    keyDiv.className += ' backspace';
                    keyDiv.innerHTML = '⌫<br><span style="font-size:0.8em;">بیک اسپیس</span>';
                    keyDiv.dataset.key = 'Backspace';
                    keyDiv.dataset.urduKey = 'Backspace';
                } else if (key === 'shift-left' || key === 'shift-right') {
                    keyDiv.className += ' shift';
                    keyDiv.innerHTML = '⇧<br><span style="font-size:0.8em;">شفٹ</span>';
                    keyDiv.dataset.key = 'Shift';
                    keyDiv.dataset.urduKey = 'Shift';
                } else if (key === 'caps') {
                    keyDiv.className += ' caps';
                    keyDiv.innerHTML = '⇪<br><span style="font-size:0.8em;">کیپس</span>';
                    keyDiv.dataset.key = 'CapsLock';
                    keyDiv.dataset.urduKey = 'CapsLock';
                } else if (key === 'tab') {
                    keyDiv.className += ' tab';
                    keyDiv.innerHTML = '⇥<br><span style="font-size:0.8em;">ٹیب</span>';
                    keyDiv.dataset.key = 'Tab';
                    keyDiv.dataset.urduKey = 'Tab';
                } else if (key === 'enter') {
                    keyDiv.className += ' enter';
                    keyDiv.innerHTML = '↵<br><span style="font-size:0.8em;">انٹر</span>';
                    keyDiv.dataset.key = 'Enter';
                    keyDiv.dataset.urduKey = 'Enter';
                } else if (typeof key === 'object') {
                    // English-Urdu mapping key with side-by-side layout
                    const normalChar = key.ur;
                    const shiftChar = key.shift || key.ur;
                    const displayChar = isShiftPressed ? shiftChar : normalChar;
                    
                    // Side-by-side layout: English left, Urdu right (no duplicates)
                    keyDiv.innerHTML = `
                        <div style="display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:0 6px;">
                            <div style="font-size:0.8em;color:#94a3b8;font-family:Arial,sans-serif;font-weight:600;">${key.en.toUpperCase()}</div>
                            <div style="font-size:1.1em;color:${isShiftPressed ? '#fbbf24' : 'white'};font-weight:bold;font-family:'Noto Nastaliq Urdu',serif;">${displayChar}</div>
                        </div>
                    `;
                    keyDiv.dataset.key = key.en;
                    keyDiv.dataset.urduKey = displayChar;
                    keyDiv.dataset.normalKey = normalChar;
                    keyDiv.dataset.shiftKey = shiftChar;
                } else {
                    keyDiv.textContent = key;
                    keyDiv.dataset.key = key;
                    keyDiv.dataset.urduKey = key;
                }

                // Add click event for virtual keyboard
                keyDiv.addEventListener('click', () => {
                    if (keyDiv.dataset.key === 'Shift') {
                        toggleShift();
                    } else {
                        handleVirtualKeyPress(keyDiv.dataset.urduKey);
                    }
                });

                rowDiv.appendChild(keyDiv);
            });

            keyboard.appendChild(rowDiv);
        });
    }

    function toggleShift() {
        isShiftPressed = !isShiftPressed;
        console.log('Shift toggled:', isShiftPressed);
        
        // Update visual state of shift keys
        document.querySelectorAll('.key.shift').forEach(shiftKey => {
            if (isShiftPressed) {
                shiftKey.classList.add('active');
            } else {
                shiftKey.classList.remove('active');
            }
        });
        
        // Update all keys to show correct characters
        updateKeyboardDisplay();
    }

    function updateKeyboardDisplay() {
        document.querySelectorAll('.key').forEach(keyDiv => {
            const keyData = keyboardLayout.flat().find(k => 
                typeof k === 'object' && k.en === keyDiv.dataset.key
            );
            
            if (keyData && keyData.shift) {
                const normalChar = keyData.ur;
                const shiftChar = keyData.shift;
                const displayChar = isShiftPressed ? shiftChar : normalChar;
                
                // Side-by-side layout - clean, no duplicates
                keyDiv.innerHTML = `
                    <div style="display:flex;align-items:center;justify-content:space-between;width:100%;height:100%;padding:0 6px;">
                        <div style="font-size:0.8em;color:#94a3b8;font-family:Arial,sans-serif;font-weight:600;">${keyData.en.toUpperCase()}</div>
                        <div style="font-size:1.1em;color:${isShiftPressed ? '#fbbf24' : 'white'};font-weight:bold;font-family:'Noto Nastaliq Urdu',serif;">${displayChar}</div>
                    </div>
                `;
                keyDiv.dataset.urduKey = displayChar;
            }
        });
    }

    function handleVirtualKeyPress(key) {
        const inputBox = document.getElementById('input-box');
        
        if (key === 'Backspace') {
            inputBox.value = inputBox.value.slice(0, -1);
            highlightNextKey();
        } else if (key === ' ') {
            // Trigger space key event
            const event = new KeyboardEvent('keydown', { key: ' ' });
            inputBox.dispatchEvent(event);
        } else if (key === 'Enter') {
            inputBox.focus();
        } else if (key === 'Shift') {
            toggleShift();
        } else {
            inputBox.value += key;
            inputBox.focus();
            
            // Trigger input event for proper highlighting
            const inputEvent = new Event('input', { bubbles: true });
            inputBox.dispatchEvent(inputEvent);
            
            // Auto-release shift after typing (like real keyboard)
            if (isShiftPressed) {
                setTimeout(() => {
                    isShiftPressed = false;
                    document.querySelectorAll('.key.shift').forEach(shiftKey => {
                        shiftKey.classList.remove('active');
                    });
                    updateKeyboardDisplay();
                    highlightNextKey();
                }, 100);
            }
        }
    }

    function highlightNextKey() {
        // Clear previous highlights (but keep shift state)
        document.querySelectorAll('.key.active').forEach(key => {
            if (!key.classList.contains('shift')) {
                key.classList.remove('active');
            }
        });

        // Get the next character to type
        const currentText = typingText.split(" ")[wordIndex];
        const inputValue = document.getElementById('input-box').value;
        
        if (currentText && inputValue.length < currentText.length) {
            const nextChar = currentText[inputValue.length];
            console.log('Next character to type:', nextChar);
            
            let needsShift = false;
            let targetKey = null;
            
            // Find which key produces this character
            const keys = document.querySelectorAll('.key');
            keys.forEach(key => {
                const normalKey = key.dataset.normalKey;
                const shiftKey = key.dataset.shiftKey;
                
                // Check if character matches normal key
                if (normalKey === nextChar) {
                    targetKey = key;
                    needsShift = false;
                }
                // Check if character matches shift key
                else if (shiftKey === nextChar) {
                    targetKey = key;
                    needsShift = true;
                }
            });
            
            // Highlight the target key
            if (targetKey) {
                targetKey.classList.add('active');
                console.log('Highlighted key:', targetKey.dataset.key, 'for character:', nextChar, 'needs shift:', needsShift);
            }
            
            // Highlight shift keys if needed
            if (needsShift) {
                document.querySelectorAll('.key.shift').forEach(shiftKey => {
                    shiftKey.classList.add('active');
                });
                console.log('Highlighted Shift keys for character:', nextChar);
            } else {
                // Remove shift highlighting if not needed
                document.querySelectorAll('.key.shift').forEach(shiftKey => {
                    if (!isShiftPressed) {
                        shiftKey.classList.remove('active');
                    }
                });
            }
            
        } else if (currentText && inputValue.length >= currentText.length) {
            // Only highlight space key if we're not at the end of all words
            const totalWords = typingText.split(" ").length;
            if (wordIndex < totalWords - 1) {
                const spaceKey = document.querySelector('.key.space');
                if (spaceKey) {
                    spaceKey.classList.add('active');
                }
            }
            
            // Remove shift highlighting when word is complete
            document.querySelectorAll('.key.shift').forEach(shiftKey => {
                if (!isShiftPressed) {
                    shiftKey.classList.remove('active');
                }
            });
        }
    }

    // Function to attach all event listeners
    function attachEventListeners() {
        // Level and mode change listeners
        document.getElementById("level-dropdown").addEventListener("change", () => {
            console.log('🔄 Level dropdown changed - calling updatePracticeText()');
            updatePracticeText();
        });

        document.getElementById("mode-dropdown").addEventListener("change", () => {
            console.log('🔄 Mode dropdown changed - calling updatePracticeText()');
            updatePracticeText();
        });



        // Input box event listeners
        const inputBox = document.getElementById('input-box');
        
        // Real-time key highlighting
        inputBox.addEventListener('input', () => {
            // Clear any lingering space highlights first
            document.querySelectorAll('.key.space.active').forEach(spaceKey => {
                spaceKey.classList.remove('active');
            });
            
            highlightNextKey();
            if (typingStartTime === 0) {
                startCountdown();
                typingFlag = true;
                typingStartTime = Date.now();
            }
        });

        // Convert English typing to Urdu with Shift support
        inputBox.addEventListener('keypress', (event) => {
            let englishChar = event.key;
            
            // Check if Shift is pressed and convert to uppercase
            if (isShiftPressed && englishChar.match(/[a-z]/)) {
                englishChar = englishChar.toUpperCase();
            }
            
            if (englishToUrdu[englishChar]) {
                event.preventDefault();
                const urduChar = englishToUrdu[englishChar];
                const currentValue = inputBox.value;
                inputBox.value = currentValue + urduChar;
                
                console.log('🔤 English char:', englishChar, '→ Urdu char:', urduChar);
                console.log('📝 Current input box value:', inputBox.value);
                
                // Auto-release shift after typing
                if (isShiftPressed) {
                    setTimeout(() => {
                        isShiftPressed = false;
                        document.querySelectorAll('.key.shift').forEach(shiftKey => {
                            shiftKey.classList.remove('active');
                        });
                        updateKeyboardDisplay();
                    }, 50);
                }
                
                // Trigger input event for highlighting
                const inputEvent = new Event('input', { bubbles: true });
                inputBox.dispatchEvent(inputEvent);
            }
        });

        // Handle physical Shift key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Shift' && !isShiftPressed) {
                toggleShift();
                event.preventDefault();
            }
        });

        document.addEventListener('keyup', (event) => {
            if (event.key === 'Shift' && isShiftPressed) {
                toggleShift();
                event.preventDefault();
            }
        });

        // Space key and word completion
        inputBox.addEventListener('keydown', (event) => {
            if (event.key === ' ') {
                console.log('🚀 Space key pressed!');
                
                if(typingFlag === false) {
                    // Start typing
                    startCountdown();
                    typingFlag = true;
                    typingStartTime = Date.now();
                }
                event.preventDefault();
                const input = inputBox.value.trim();
                const currentWord = typingText.split(" ")[wordIndex];
                const isCorrect = input === currentWord;
                
                console.log('📝 Input:', input);
                console.log('🎯 Expected:', currentWord);
                console.log('✅ Correct:', isCorrect);
                console.log('📍 Current wordIndex:', wordIndex);
                
                // Clear input box immediately
                inputBox.value = "";
                
                // Mark current word as correct/wrong
                highlightWord(isCorrect);
                updateStatistics();
                
                // Now increment word index
                const oldIndex = wordIndex;
                wordIndex++;
                console.log('📈 WordIndex incremented:', oldIndex, '→', wordIndex);
                
                // Check if we've finished all words
                const totalWords = typingText.split(" ").length;
                console.log('📊 Total words:', totalWords);
                
                if (wordIndex >= totalWords) {
                    console.log('🏁 Finished all words!');
                    // Stop the timer when text is complete
                    stopCountdown();
                    // Preserve current stats before reset
                    preserveCurrentStats();
                    // Show completion SweetAlert with preserved stats
                    customAlert('🎉 ٹائپنگ مکمل!');
                    return;
                }
                
                if (wordIndex % 20 === 0 && wordIndex > 21) {
                    showNextGroupOfWords(wordIndex);
                }

                // Clear all highlights immediately
                document.querySelectorAll('.key.active').forEach(key => {
                    key.classList.remove('active');
                });
                
                // Immediately highlight next word and key
                console.log('🎯 Highlighting next word...');
                highlightNextWord();
            }
        });

        // Start button listener
        const startButton = document.getElementById("start-button");
        if (startButton) {
            startButton.addEventListener("click", () => {
                startCountdown();
                hideNextGroupOfWords(40);
                typingStartTime = Date.now();
                inputBox.focus();
            });
        }
    }

        // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        // Initialize DOM references
        paragraph = document.getElementById("typing-paragraph");
        
        // Set initial typing text
        typingText = getCurrentPracticeText();
        
        // Set initial countdown time based on text
        const initialTime = calculateAutoTime(typingText);
        document.getElementById("countdown").textContent = initialTime;
        
        // Initialize all components
        createVirtualKeyboard();
        initializeParagraph();
        hideNextGroupOfWords(40); 
        highlightNextWord(); // This will also call highlightNextKey()
        updateLevelInfo();
        
        // Attach event listeners
        attachEventListeners();
        
        console.log("Typing tutor initialized successfully!");
        console.log("Typing text:", typingText);
        console.log("Auto time set to:", initialTime, "seconds");
        console.log("Paragraph element:", paragraph);
    });