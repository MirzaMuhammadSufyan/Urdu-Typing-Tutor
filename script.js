const typingText = "انٹرنیٹ کے توسط سے مختلف کھیل، کارٹون، ڈرامے، جانوروں اور جادوئی فلموں کا خزانہ اس میں موجود ہوتا ہے۔بچے ایسی ہی چیزوں کی طرف تیزی سے لپکتے ہیں۔یہی کچھ ثاقب کے ساتھ ہوا۔آہستہ آہستہ ثاقب کی موبائل فون سے قربت گہری ہونے لگی۔وہ اب اس کا استعمال زیادہ کرنے لگا تھا۔میں اسے تنبیہ کر کے موبائل لے لیتا، لیکن وہ میری شفقت کا فائدہ اُٹھا کر کچھ دیر اور استعمال کرتا۔";
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



function customAlert(message) {
    const alertMessage = document.getElementById("alert-message");
    alertMessage.textContent = message;
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
    const elapsedTime = (Date.now() - typingStartTime) / 1000 / 60;
    const wpm = Math.floor((totalWords / elapsedTime));
    const accuracy = ((correctWords / totalWords) * 100).toFixed(2) + "%";
    const grossSpeed = wpm + " WPM";
    document.getElementById("wpm").textContent = wpm;
    document.getElementById("accuracy").textContent = accuracy;
    document.getElementById("gross-speed").textContent = grossSpeed;
}

function startCountdown() {
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
    }
});

initializeParagraph();
highlightNextWord();