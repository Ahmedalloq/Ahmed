const chapterList = document.getElementById('chapter-list');
const mainTitle = document.getElementById('main-title');
const welcomeScreen = document.getElementById('welcome-screen');
const testScreen = document.getElementById('test-screen');
const resultsScreen = document.getElementById('results-screen');
const errorScreen = document.getElementById('error-screen');
const loadingScreen = document.getElementById('loading-screen');
const startFatihaBtn = document.getElementById('start-fatiha-btn');
const backToHomeBtn = document.getElementById('back-to-home-btn');
const testChapterTitle = document.getElementById('test-chapter-title');
const questionCounter = document.getElementById('question-counter');
const testProgress = document.getElementById('test-progress');
const questionTextStart = document.getElementById('question-start');
const questionTextEnd = document.getElementById('question-end');
const optionsContainer = document.getElementById('options-container');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const feedbackMessage = document.getElementById('feedback-message');
const resultsText = document.getElementById('results-text');
const restartTestBtn = document.getElementById('restart-test-btn');
const goHomeBtn = document.getElementById('go-home-btn');
const errorGoHomeBtn = document.getElementById('error-go-home-btn');
const errorMessage = document.getElementById('error-message');
const toastContainer = document.getElementById('toast-container');

// --- App State ---
let currentChapterId = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let showingResult = false;

// --- Functions ---

/**
 * Shows a specific content screen and hides others.
 * @param {string} screenId - The ID of the screen to show ('welcome', 'test', 'results', 'error', 'loading').
 */
function showScreen(screenId) {
    [welcomeScreen, testScreen, resultsScreen, errorScreen, loadingScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    const screenToShow = document.getElementById(`${screenId}-screen`);
    if (screenToShow) {
        screenToShow.classList.add('active');
    }
}

/**
 * Populates the sidebar with Quran chapters.
 */
function populateChapterList() {
    if (!chapterList || !quranChapters) return;
    chapterList.innerHTML = ''; // Clear existing list
    quranChapters.forEach(chapter => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#'; // Prevent page reload
        link.textContent = `${chapter.id}. ${chapter.name}`;
        link.dataset.chapterId = chapter.id;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            startTest(chapter.id);
            // Optional: Add 'active' class to the clicked link
            document.querySelectorAll('#chapter-list a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
        });
        listItem.appendChild(link);
        chapterList.appendChild(listItem);
    });
}

/**
 * Starts the test for a given chapter ID.
 * @param {number} chapterId - The ID of the chapter to test.
 */
function startTest(chapterId) {
    showScreen('loading');
    currentChapterId = chapterId;
    const chapter = getChapterById(chapterId);

    if (!chapter) {
        showErrorScreen(`لم يتم العثور على السورة بالمعرف: ${chapterId}`);
        return;
    }

    // Use setTimeout to simulate async loading and allow UI update
    setTimeout(() => {
        try {
            currentQuestions = getTestQuestionsForChapter(chapterId);

            if (!currentQuestions || currentQuestions.length === 0) {
                 showErrorScreen(`لم يتم العثور على أسئلة لسورة ${chapter.name}.`);
                return;
            }

            // Reset state for new test
            currentQuestionIndex = 0;
            score = 0;
            selectedAnswer = null;
            showingResult = false;

            mainTitle.textContent = `اختبار سورة ${chapter.name}`;
            testChapterTitle.textContent = `اختبار سورة ${chapter.name}`;

            loadQuestion();
            showScreen('test');
        } catch (error) {
             console.error("Error loading questions:", error);
             showErrorScreen("حدث خطأ أثناء تحميل أسئلة الاختبار.");
        }
    }, 50); // Small delay to ensure loading screen shows
}

/**
 * Loads the current question onto the test screen.
 */
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showResultsScreen();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;
    showingResult = false;

    questionCounter.textContent = `السؤال ${currentQuestionIndex + 1} من ${currentQuestions.length}`;
    testProgress.value = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    questionTextStart.textContent = question.textStart;
    questionTextEnd.textContent = question.textEnd;
    optionsContainer.innerHTML = ''; // Clear previous options
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback-message'; // Reset feedback style
    submitAnswerBtn.style.display = 'inline-flex';
    nextQuestionBtn.style.display = 'none';
    submitAnswerBtn.disabled = false; // Re-enable submit button

    // Shuffle options before displaying (optional, quran-data might already shuffle)
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);

    shuffledOptions.forEach((option, index) => {
        const label = document.createElement('label');
        label.classList.add('option-label');
        label.htmlFor = `option-${index}`;

        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'answer';
        radio.value = option;
        radio.id = `option-${index}`;
        radio.addEventListener('change', () => {
            selectedAnswer = option;
            // Remove 'selected' from others, add to this one
             document.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
             label.classList.add('selected');
        });

        const span = document.createElement('span');
        span.textContent = option;

        label.appendChild(span); // Text first for RTL
        label.appendChild(radio);
        optionsContainer.appendChild(label);
    });
}

/**
 * Handles the submission of an answer.
 */
function handleAnswerSubmit() {
    if (!selectedAnswer) {
        showToast("الرجاء اختيار إجابة.", "error");
        return;
    }

    showingResult = true;
    submitAnswerBtn.disabled = true; // Prevent multiple submissions
    const question = currentQuestions[currentQuestionIndex];
    const correct = selectedAnswer === question.correctAnswer;

    // Disable radio buttons
    optionsContainer.querySelectorAll('input[type="radio"]').forEach(radio => radio.disabled = true);
    optionsContainer.querySelectorAll('.option-label').forEach(label => label.classList.add('disabled'));

    // Highlight correct and incorrect answers
    optionsContainer.querySelectorAll('.option-label').forEach(label => {
        const radio = label.querySelector('input[type="radio"]');
        if (radio.value === question.correctAnswer) {
            label.classList.add('correct');
             // Optionally add a checkmark icon
             label.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle feedback-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`);
        } else if (radio.value === selectedAnswer && !correct) {
            label.classList.add('incorrect');
             // Optionally add an X icon
              label.insertAdjacentHTML('afterbegin', `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-circle feedback-icon"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`);
        }
    });


    if (correct) {
        score++;
        feedbackMessage.textContent = "إجابة صحيحة!";
        feedbackMessage.className = 'feedback-message success';
        showToast("صحيح! إجابة موفقة.", "success");
    } else {
        feedbackMessage.textContent = `إجابة خاطئة. الصحيحة هي: ${question.correctAnswer}`;
        feedbackMessage.className = 'feedback-message error';
        showToast(`خطأ. الإجابة الصحيحة: ${question.correctAnswer}`, "error");
    }

    submitAnswerBtn.style.display = 'none';
    nextQuestionBtn.style.display = 'inline-flex';
    nextQuestionBtn.textContent = (currentQuestionIndex < currentQuestions.length - 1) ? 'السؤال التالي' : 'إنهاء الاختبار';
}

/**
 * Moves to the next question or shows results.
 */
function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResultsScreen();
    }
}

/**
 * Displays the final results screen.
 */
function showResultsScreen() {
     const chapter = getChapterById(currentChapterId);
     const percentage = Math.round((score / currentQuestions.length) * 100);
     resultsText.innerHTML = `نتيجتك في سورة ${chapter?.name || 'المحددة'}: <span class="score ${score / currentQuestions.length >= 0.5 ? 'good' : 'bad'}">${score} / ${currentQuestions.length}</span> (${percentage}%)`;
     showScreen('results');
}

/**
 * Restarts the test for the current chapter.
 */
function handleRestartTest() {
    if (currentChapterId !== null) {
        startTest(currentChapterId);
         showToast(`تم إعادة الاختبار. بالتوفيق!`, "success");
    } else {
        goHome(); // Go home if no chapter context
    }
}

/**
 * Navigates back to the welcome screen.
 */
function goHome() {
    currentChapterId = null;
    mainTitle.textContent = 'الصفحة الرئيسية';
     // Optional: Remove 'active' class from sidebar
     document.querySelectorAll('#chapter-list a').forEach(a => a.classList.remove('active'));
    showScreen('welcome');
}

/**
 * Displays the error screen with a message.
 * @param {string} message - The error message to display.
 */
function showErrorScreen(message) {
    errorMessage.textContent = message;
    showScreen('error');
}

/**
 * Shows a toast notification.
 * @param {string} message - The message to display in the toast.
 * @param {'success' | 'error' | 'info'} type - The type of toast (for styling).
 * @param {number} duration - How long the toast should be visible (in ms).
 */
function showToast(message, type = 'info', duration = 3000) {
     if (!toastContainer) return;

     const toast = document.createElement('div');
     toast.classList.add('toast', type); // Add type class for styling

     const title = document.createElement('div');
     title.classList.add('toast-title');
     if(type === 'success') title.textContent = "نجاح";
     else if(type === 'error') title.textContent = "خطأ";
     else title.textContent = "تنبيه";

     const messageDiv = document.createElement('div');
     messageDiv.classList.add('toast-message');
     messageDiv.textContent = message;

     toast.appendChild(title);
     toast.appendChild(messageDiv);

     toastContainer.appendChild(toast);

     // Trigger the animation
     setTimeout(() => {
         toast.classList.add('show');
     }, 10); // Small delay to allow element to be added to DOM

     // Remove the toast after duration
     setTimeout(() => {
         toast.classList.remove('show');
         // Remove the element from DOM after animation completes
         setTimeout(() => {
              if (toast.parentNode === toastContainer) { // Check if still attached
                 toastContainer.removeChild(toast);
              }
         }, 300); // Match the transition duration
     }, duration);
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    populateChapterList();
    showScreen('welcome'); // Start on the welcome screen
});

startFatihaBtn?.addEventListener('click', () => startTest(1));
backToHomeBtn?.addEventListener('click', goHome);
submitAnswerBtn?.addEventListener('click', handleAnswerSubmit);
nextQuestionBtn?.addEventListener('click', handleNextQuestion);
restartTestBtn?.addEventListener('click', handleRestartTest);
goHomeBtn?.addEventListener('click', goHome);
errorGoHomeBtn?.addEventListener('click', goHome);

// --- Initial Load ---
// (Handled by DOMContentLoaded)
