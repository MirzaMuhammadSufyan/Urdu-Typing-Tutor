    // Define comprehensive training system with different levels and modes
    const trainingContent = {
        beginner: {
            letters: [
                "ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن و ہ ء ی ے",
                "الف با پے تے ٹے ثے جیم چے حے خے دال ڈال ذال رے ڑے زے ژے سین شین صاد ضاد طے ظے عین غین فے قاف کاف گاف لام میم نون واو ہے ہمزہ یے یے بڑی",
                "اب پاک تاک ٹاک جاک چاک راک زاک ساک فاک کاک گاک لاک ماک ناک واک یاک",
                "بے پے تے ٹے جے چے رے زے سے فے کے گے لے مے نے ہے یے"
            ],
            words: [
                "کتاب قلم میز کرسی گھر درخت پانی آگ ہوا پھول پرندہ بلی کتا گائے بکری",
                "اچھا برا بڑا چھوٹا نیا پرانا سفید کالا لال نیلا ہرا پیلا",
                "آپ میں ہم وہ یہ کیا کون کب کہاں کیوں کیسے",
                "کھانا پینا سونا جاگنا پڑھنا لکھنا دیکھنا سننا بولنا چلنا دوڑنا"
            ],
            sentences: [
                "میں اچھا ہوں۔ آپ کیسے ہیں؟ یہ میری کتاب ہے۔",
                "وہ اپنے گھر جا رہا ہے۔ بچے کھیل رہے ہیں۔",
                "ماں کھانا بنا رہی ہے۔ باپ کام کر رہا ہے۔",
                "پرندے درخت پر بیٹھے ہیں۔ بلی دودھ پی رہی ہے۔"
            ]
        },
        basic: {
            words: [
                "تعلیم صحت خوشی محبت دوستی عزت احترام امن سلامتی خوبصورتی",
                "اسکول کالج یونیورسٹی ہسپتال مسجد گرجا مندر گردوارہ",
                "کراچی لاہور اسلام آباد پشاور کوئٹہ حیدرآباد فیصل آباد راولپنڈی",
                "پاکستان بھارت چین امریکا انگلینڈ فرانس جرمنی جاپان"
            ],
            sentences: [
                "پاکستان ایک خوبصورت ملک ہے۔ یہاں مختلف زبانیں بولی جاتی ہیں۔",
                "تعلیم ہر انسان کا بنیادی حق ہے۔ ہمیں محنت سے پڑھنا چاہیے۔",
                "والدین کا احترام کرنا ضروری ہے۔ وہ ہماری خیر خواہی کرتے ہیں۔",
                "دوست وہ ہے جو مشکل وقت میں ساتھ دے۔ سچے دوست ملنا مشکل ہے۔"
            ]
        },
        intermediate: {
            sentences: [
                "قدرت نے انسان کو عقل کی نعمت سے نوازا ہے۔ اس نعمت کا صحیح استعمال کرنا ہماری ذمہ داری ہے۔",
                "محنت کا پھل میٹھا ہوتا ہے۔ جو لوگ محنت کرتے ہیں وہ کامیاب ہوتے ہیں۔",
                "علم حاصل کرنا ہر مسلمان مرد اور عورت پر فرض ہے۔ علم انسان کو روشنی کی طرف لے جاتا ہے۔",
                "صبر کا پھل میٹھا ہوتا ہے۔ مشکل وقت میں صبر کرنے والے کامیاب ہوتے ہیں۔"
            ],
            paragraphs: [
                "ایک دفعہ کا ذکر ہے کہ ایک گاوں میں علی نام کا لڑکا رہتا تھا۔ علی بہت ذہین اور محنتی تھا۔ اس کے والدین کسان تھے اور وہ زمین پر کام کرتے تھے۔ علی نے بچپن سے ہی پڑھائی میں دلچسپی لی تھی اور ہمیشہ اعلیٰ نمبرات حاصل کرتا تھا۔"
            ]
        },
        advanced: {
            paragraphs: [
                "انٹرنیٹ کے توسط سے مختلف کھیل، کارٹون، ڈرامے، جانوروں اور جادوئی فلموں کا خزانہ اس میں موجود ہوتا ہے۔بچے ایسی ہی چیزوں کی طرف تیزی سے لپکتے ہیں۔یہی کچھ ثاقب کے ساتھ ہوا۔آہستہ آہستہ ثاقب کی موبائل فون سے قربت گہری ہونے لگی۔وہ اب اس کا استعمال زیادہ کرنے لگا تھا۔میں اسے تنبیہ کر کے موبائل لے لیتا، لیکن وہ میری شفقت کا فائدہ اُٹھا کر کچھ دیر اور استعمال کرتا۔",
                "قدرت کے عجائبات ہمیں ہر روز نظر آتے ہیں۔ پہاڑوں کی بلندیوں سے لے کر دریا کی روانی تک، ہر چیز میں قدرت کی خوبصورتی جھلکتی ہے۔ درختوں کی شاخیں ہوا کے ساتھ جھومتی ہیں اور پرندے ان پر بیٹھ کر اپنے گیت سناتے ہیں۔ ہر موسم کی اپنی ایک الگ خاصیت ہوتی ہے۔"
            ]
        },
        expert: {
            paragraphs: [
                "ادبی تنقید کا مطالعہ کرتے وقت ہمیں مختلف نظریات اور فلسفوں سے واقفیت حاصل کرنی پڑتی ہے۔ کلاسیکی ادب سے لے کر جدید ادب تک، ہر دور کے اپنے خاص اسالیب اور موضوعات ہیں۔ شاعری میں بحر، قافیہ، ردیف کی اہمیت کو سمجھنا ضروری ہے۔ نثر میں طنز و مزاح، داستان، ناول، افسانہ جیسی اصناف کا مطالعہ کرنا ہوتا ہے۔",
                "سائنسی انقلاب نے انسانی تہذیب کو جس طرح متاثر کیا ہے، اس کی مثال تاریخ میں نہیں ملتی۔ فزکس، کیمسٹری، بائیولوجی، ریاضی جیسے علوم نے نہ صرف ہماری سوچ بدلی ہے بلکہ زندگی کے ہر شعبے میں انقلاب برپا کر دیا ہے۔ کمپیوٹر، انٹرنیٹ، مصنوعی ذہانت جیسی ایجادات نے دنیا کو گلوبل ولیج بنا دیا ہے۔"
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
    function showAlert() {
        document.getElementById("custom-alert").style.display = "block";
    }

    function closeAlert() {
        document.getElementById("custom-alert").style.display = "none";
    }
    function resetPage() {
        location.reload(); // This reloads the entire page
    }

    function customAlert(message) {
        const alertMessage = document.getElementById("alert-message");
        const accuracy = parseFloat(document.getElementById("accuracy").textContent);
        const wpm = parseInt(document.getElementById("wpm").textContent);
        
        let suggestion = "";
        if (accuracy >= 95 && wpm >= 30) {
            suggestion = "<br><strong>بہترین! اگلے لیول کی تجویز:</strong> " + getNextLevelSuggestion();
        } else if (accuracy >= 85) {
            suggestion = "<br><strong>اچھا! مزید مشق کریں۔</strong>";
        } else {
            suggestion = "<br><strong>مزید مشق کی ضرورت ہے۔ صحیح ٹائپنگ پر توجہ دیں۔</strong>";
        }
        
        alertMessage.innerHTML = message + "<br>Gross Speed: "
            + document.getElementById("gross-speed").textContent + "<br>Net Speed: "
            + document.getElementById("wpm").textContent + "<br>Accuracy: " + document.getElementById("accuracy").textContent
            + suggestion;
        document.getElementById("custom-alert").style.display = "block";
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
        document.getElementById("time-dropdown").disabled = true;
        const countdownElement = document.getElementById("countdown");
        timeRemaining = parseInt(document.getElementById("time-dropdown").value);
        countdownElement.textContent = timeRemaining;
        const countdownInterval = setInterval(() => {
            timeRemaining--;
            countdownElement.textContent = timeRemaining;
            if (timeRemaining <= 0) {
                clearInterval(countdownInterval);
                customAlert("Time's up!");
                updateStatistics();
                reset();
            }
        }, 1000);
    }

    // Time dropdown listener moved to attachEventListeners function

    // Event listeners (will be attached after DOM loads)

    function updatePracticeText() {
        typingText = getCurrentPracticeText();
        reset();
        initializeParagraph();
        highlightNextWord(); // This will also call highlightNextKey()
        updateLevelInfo();
    }

    function reset() {
        console.log('🔄 RESET CALLED! WordIndex being reset to 0');
        console.trace('Reset called from:'); // Shows call stack
        
        initializeParagraph();
        wordIndex = 0;
        correctWords = 0;
        totalWords = 0;
        typingStartTime = 0;
        const inputBox = document.getElementById("input-box");
        const countdownElement = document.getElementById("countdown");
        const wpmElement = document.getElementById("wpm");
        const accuracyElement = document.getElementById("accuracy");
        
        if (inputBox) inputBox.value = "";
        if (countdownElement) countdownElement.textContent = "0";
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

        // Time dropdown listener
        document.getElementById("time-dropdown").addEventListener("change", () => {
            const selectedTime = document.getElementById("time-dropdown").value;
            document.getElementById("countdown").textContent = selectedTime;
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
                    // Instead of finishTyping(), show completion message
                    alert('ٹائپنگ مکمل! آپ نے تمام الفاظ ٹائپ کر دیے۔');
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
        console.log("Paragraph element:", paragraph);
    });