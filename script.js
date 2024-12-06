    // Define multiple typing texts
    const typingTexts = [
        // مشق ایک
        "انٹرنیٹ کے توسط سے مختلف کھیل، کارٹون، ڈرامے، جانوروں اور جادوئی فلموں کا خزانہ اس میں موجود ہوتا ہے۔بچے ایسی ہی چیزوں کی طرف تیزی سے لپکتے ہیں۔یہی کچھ ثاقب کے ساتھ ہوا۔آہستہ آہستہ ثاقب کی موبائل فون سے قربت گہری ہونے لگی۔وہ اب اس کا استعمال زیادہ کرنے لگا تھا۔میں اسے تنبیہ کر کے موبائل لے لیتا، لیکن وہ میری شفقت کا فائدہ اُٹھا کر کچھ دیر اور استعمال کرتا۔ایک دفعہ کا ذکر ہے کہ ایک گاوں میں علی نام کا لڑکا رہتا تھا۔ علی بہت ذہین اور محنتی تھا۔ اس کے والدین کسان تھے اور وہ زمین پر کام کرتے تھے۔ علی نے بچپن سے ہی پڑھائی میں دلچسپی لی تھی اور ہمیشہ اعلیٰ نمبرات حاصل کرتا تھا۔ گاوں کے اسکول میں اس کا نام سب کے منہ پر تھا۔ ایک دن اسکول میں نئے استاد آئے جو کہ بہت مہربان اور علم والے تھے۔ انہوں نے علی کی قابلیت کو دیکھا اور اسے شہر کے ایک بڑے ادارے میں تعلیم حاصل کرنے کا مشورہ دیا۔ علی نے اپنے والدین سے اجازت لی اور شہر کا سفر کیا۔ شہر میں علی نے مزید تعلیم حاصل کی اور آخرکار ایک معروف انجینئر بن گیا۔ علی نے اپنے گاوں کی ترقی کے لیے کئی منصوبے بنائے اور انہیں عملی جامہ پہنایا۔ اس کی محنت اور لگن کی بدولت گاوں میں پانی کی فراہمی بہتر ہوئی، سڑکیں بہتر ہوئیں اور بچوں کے لیے نئے اسکول بنائے گئے۔ علی کی کامیابی نے نہ صرف اسے عزت بخشی بلکہ اس کے گاوں کو بھی ترقی کی راہ پر گامزن کیا۔ اس کہانی سے ہمیں یہ سبق ملتا ہے کہ محنت اور لگن سے کسی بھی مقام کو حاصل کیا جا سکتا ہے۔",
        
        // مشق تین
        "قدرت کے عجائبات ہمیں ہر روز نظر آتے ہیں۔ پہاڑوں کی بلندیوں سے لے کر دریا کی روانی تک، ہر چیز میں قدرت کی خوبصورتی جھلکتی ہے۔ درختوں کی شاخیں ہوا کے ساتھ جھومتی ہیں اور پرندے ان پر بیٹھ کر اپنے گیت سناتے ہیں۔ ہر موسم کی اپنی ایک الگ خاصیت ہوتی ہے۔ بہار میں پھولوں کی بہار ہوتی ہے، گرمی میں سورج کی تپش محسوس ہوتی ہے، خزاں میں پتوں کا زرد ہونا دیکھنے میں آتا ہے اور سرما میں برفباری ہوتی ہے۔ قدرت ہمیں زندگی کی اہمیت سکھاتی ہے اور ہمیں اس کی حفاظت کرنے کی ترغیب دیتی ہے۔ ہمیں چاہیے کہ ہم قدرتی وسائل کا صحیح استعمال کریں اور ماحولیاتی آلودگی سے بچیں تاکہ آنے والی نسلیں بھی اس کی خوبصورتی سے مستفید ہو سکیں۔ قدرتی آفات جیسے سیلاب، زلزلے اور طوفان ہمیں یاد دلاتے ہیں کہ ہمیں اپنے ماحول کی حفاظت کرنی چاہیے۔ جنگلات کی کٹائی روکنا، پانی کے ذخائر کی حفاظت کرنا اور قدرتی حیات کو تحفظ فراہم کرنا ہمارے ذمہ داریوں میں شامل ہیں۔ اگر ہم یہ سب کریں گے تو نہ صرف ہم اپنی بلکہ پوری زمین کی حفاظت کر سکیں گے۔ قدرتی توازن کو برقرار رکھنا ہمارے اور دیگر جانداروں کے لیے ضروری ہے۔ اس طرح ہم ایک خوشحال اور صحت مند ماحول میں رہ سکتے ہیں۔",
        
        // مزید مشقیں شامل کریں یہاں
    ];

    // Select a random typing text from the array
    const typingText = typingTexts[Math.floor(Math.random() * typingTexts.length)];

    const paragraph = document.getElementById("typing-paragraph");
    let wordIndex = 0;
    let timeRemaining = 0;
    let correctWords = 0;
    let totalWords = 0;
    let typingStartTime = 0;

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
        alertMessage.innerHTML = message + "<br>Gross Speed: "
            + document.getElementById("gross-speed").textContent + "<br>Net Speed: "
            + document.getElementById("wpm").textContent + "<br>Accuracy: " + document.getElementById("accuracy").textContent;
        document.getElementById("custom-alert").style.display = "block";
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
        wordIndex++;
    }

    function updateStatistics() {
        totalWords++;
        const elapsedTime = (Date.now() - typingStartTime) / 1000 / 60; // in minutes
        const wpm = Math.floor((totalWords / elapsedTime));
        const accuracy = ((correctWords / totalWords) * 100).toFixed(2) + "%";
        const grossSpeed = wpm + " WPM";
        document.getElementById("wpm").textContent = wpm;
        document.getElementById("accuracy").textContent = accuracy;
        document.getElementById("gross-speed").textContent = grossSpeed;
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

    document.getElementById("time-dropdown").addEventListener("change", () => {
        const selectedTime = document.getElementById("time-dropdown").value;
        document.getElementById("countdown").textContent = selectedTime;
    });

    function reset() {
        initializeParagraph();
        wordIndex = 0;
        correctWords = 0;
        totalWords = 0;
        typingStartTime = 0;
        document.getElementById("input-box").value = "";
        document.getElementById("countdown").textContent = "0";
        document.getElementById("wpm").textContent = "0";
        document.getElementById("accuracy").textContent = "100%";
        document.getElementById("gross-speed").textContent = "0 WPM";
    }

    document.getElementById("start-button").addEventListener("click", () => {
        startCountdown();
        hideNextGroupOfWords(40);
        typingStartTime = Date.now();
        document.getElementById("input-box").focus();
    });

    document.getElementById("input-box").addEventListener("input", () => {
        if (typingStartTime === 0) {
            startCountdown();
            typingStartTime = Date.now();
        }
    });

    function highlightNextWord() {
        const currentWord = document.getElementById(wordIndex + 1);
        if (currentWord) {
            currentWord.classList.add("current-word");
        }
        const previousWord = document.getElementById(wordIndex);
        if (previousWord && !previousWord.classList.contains("correct")) {
            previousWord.classList.remove("correct");
        }
    }

    document.getElementById("input-box").addEventListener("keydown", (event) => {
        if (event.key === " ") {
            event.preventDefault();
            const input = document.getElementById("input-box").value.trim();
            const currentWord = typingText.split(" ")[wordIndex];
            const isCorrect = input === currentWord;
            highlightWord(isCorrect);
            updateStatistics();
            document.getElementById("input-box").value = "";
            highlightNextWord();
            if (wordIndex % 20 === 0 && wordIndex > 21) {
                showNextGroupOfWords(wordIndex);
            }
        }
    });

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

    // Initialize the paragraph with a random typing text
    initializeParagraph();
    hideNextGroupOfWords(40); 
    highlightNextWord();