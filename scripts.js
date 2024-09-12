let selectedCategory = '';

function selectCategory(category) {
    selectedCategory = category;
    document.getElementById('selected-category').innerText = `Selected category: ${category}`;
}

function startQuiz() {
    const nameInput = document.getElementById('text').value.trim();
    if (nameInput === '') {
        alert('Please enter your name.');
        return;
    }
    if (!selectedCategory) {
        alert('Please select a quiz category.');
        return;
    }

    // Hide the initial container
    document.querySelector('.container').style.display = 'none';

    // Show the quiz section
    document.getElementById('quiz-section').style.display = 'block';

    showQuiz(selectedCategory);
}

function showQuiz(category) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `<p>Loading ${category} quiz...</p>`;
}
// quizzes
const quizzes = {
    html: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyperlinking Text Marking Language"
            ],
            answer: "Hyper Text Markup Language"
        },
        {
            question: "Which HTML tag is used to define an internal style sheet?",
            options: [
                "script",
                "style",
                "css",
                "stylesheet"
            ],
            answer: "style"
        },
        {
            question: "Which is the correct HTML element for inserting a line break?",
            options: [
                "br",
                "ib",
                "break",
                "hr"
            ],
            answer: "br"
        },
        {
            question: "How can you create an ordered list in HTML?",
            options: [
                "ul",
                "list",
                "ol",
                "li"
            ],
            answer: "ol"
        },
        {
            question: "How do you add a background color to an HTML element?",
            options: [
                "background<yellow>",
                "body bg='yellow'",
                "body style='background-color: yellow;'",
                "background-color<yellow>"
            ],
            answer: "body style='background-color: yellow;'"
        },
        {
            question: "Which tag is used to create a checkbox in HTML?",
            options: [
                "input type='check'",
                "checkbox",
                "input type='checkbox'",
                "check"
            ],
            answer: "input type='checkbox'"
        },
        {
            question: "How can you make a numbered list in HTML?",
            options: [
                "ul",
                "dl",
                "list",
                "ol"
            ],
            answer: "ol"
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                "style",
                "class",
                "font",
                "styles"
            ],
            answer: "style"
        },
        {
            question: "Which tag is used to define a table in HTML?",
            options: [
                "table",
                "tbl",
                "tr",
                "td"
            ],
            answer: "table"
        },
        {
            question: "What does the `<a>` tag do in HTML?",
            options: [
                "Defines a hyperlink",
                "Defines a table row",
                "Defines a paragraph",
                "Defines an image"
            ],
            answer: "Defines a hyperlink"
        },
    ],

    css: [
        {
            question: "What does CSS stand for?",
            options: [
                "Cascading Style Sheets",
                "Colorful Style Sheets",
                "Computer Style Sheets",
                "None of the above"
            ],
            answer: "Cascading Style Sheets"
        },
        {
            question: "Which CSS property is used to change the background color of an element?",
            options: [
                "color",
                "background-color",
                "border-color",
                "background"
            ],
            answer: "background-color"
        },
        {
            question: "How can you apply a CSS style to all <p> elements in a document?",
            options: [
                "p { color: blue; }",
                ".p { color: blue; }",
                "#p { color: blue; }",
                "p { text-color: blue; }"
            ],
            answer: "p { color: blue; }"
        },
        {
            question: "What does the z-index property do in CSS?",
            options: [
                "Sets the text size",
                "Defines the stacking order of positioned elements",
                "Adjusts the opacity of an element",
                "Alters the color of text"
            ],
            answer: "Defines the stacking order of positioned elements"
        },
        {
            question: "Which of the following is a valid CSS selector for selecting elements with a class of 'example'?",
            options: [
                "#example",
                ".example",
                "*example",
                "example"
            ],
            answer: ".example"
        },
        {
            question: "How do you select an element with the id 'header' in CSS?",
            options: [
                ".header",
                "#header",
                "header",
                "*header"
            ],
            answer: "#header"
        },
        {
            question: "What is the default value of the position property in CSS?",
            options: [
                "absolute",
                "fixed",
                "relative",
                "static"
            ],
            answer: "static"
        },
        {
            question: "How do you add a comment in CSS?",
            options: [
                "This is a comment",
                "/* This is a comment */",
                "// This is a comment",
                "-- This is a comment --"
            ],
            answer: "/* This is a comment */"
        },
        {
            question: "Which CSS property is used to change the font of an element?",
            options: [
                "font-style",
                "font-family",
                "font-weight",
                "text-style"
            ],
            answer: "font-family"
        },
        {
            question: "What is the purpose of the flex property in CSS Flexbox?",
            options: [
                "Adjusts the size of an element",
                "Aligns elements within a container",
                "Defines how a flex item will grow or shrink to fit the container",
                "Sets the space between elements"
            ],
            answer: "Defines how a flex item will grow or shrink to fit the container"
        }
    ],

    js: [
        {
            question: "What does the `typeof` operator do in JavaScript?",
            options: [
                "Determines the data type of a variable",
                "Converts a variable to a string",
                "Changes the value of a variable",
                "Deletes a variable"
            ],
            answer: "Determines the data type of a variable"
        },
        {
            question: "Which method is used to add an element to the end of an array in JavaScript?",
            options: [
                "add()",
                "push()",
                "append()",
                "insert()"
            ],
            answer: "push()"
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function myFunction() {}",
                "createFunction myFunction() {}",
                "function:myFunction() {}",
                "def myFunction() {}"
            ],
            answer: "function myFunction() {}"
        },
        {
            question: "What is the purpose of the `this` keyword in JavaScript?",
            options: [
                "Refers to the global object",
                "Refers to the object from which the function was called",
                "Refers to a new instance of the function",
                "Refers to the function itself"
            ],
            answer: "Refers to the object from which the function was called"
        },
        {
            question: "What does the `parseInt()` function do?",
            options: [
                "Parses a string and returns a floating-point number",
                "Parses a string and returns an integer",
                "Parses an integer and returns a string",
                "Parses a number and returns a boolean"
            ],
            answer: "Parses a string and returns an integer"
        },
        {
            question: "How can you add a comment in JavaScript?",
            options: [
                "<!-- This is a comment -->",
                "// This is a comment",
                "/* This is a comment */",
                "-- This is a comment --"
            ],
            answer: "// This is a comment"
        },
        {
            question: "What will the following code output: `console.log(0.1 + 0.2 == 0.3)`?",
            options: [
                "true",
                "false",
                "undefined",
                "NaN"
            ],
            answer: "false"
        },
        {
            question: "What is a closure in JavaScript?",
            options: [
                "A function that returns another function",
                "A function that keeps track of variables from its parent scope",
                "A function that executes immediately",
                "A method used to define object properties"
            ],
            answer: "A function that keeps track of variables from its parent scope"
        },
        {
            question: "What will `typeof NaN` return in JavaScript?",
            options: [
                "number",
                "NaN",
                "undefined",
                "object"
            ],
            answer: "number"
        },
        {
            question: "How can you prevent a form from submitting in JavaScript?",
            options: [
                "Using the `preventDefault()` method",
                "Setting the `action` attribute to `null`",
                "Returning `false` in the form's `onsubmit` event handler",
                "Using the `stopPropagation()` method"
            ],
            answer: "Using the `preventDefault()` method"
        }
    ],
    bootstrap: [

        { question: "What is Bootstrap?", options: ["A CSS framework", "A JavaScript library", "A HTML framework", "None of the above"], answer: 0 },
        { question: "Which class in Bootstrap is used to create a responsive grid layout?", options: [".container", ".grid", ".row", ".column"], answer: 2 },
        { question: "How do you center a block element in Bootstrap?", options: ["Using the class .center-block", "Using the class .mx-auto", "Using the class .align-center", "Using the class .text-center"], answer: 1 },
        { question: "What is the purpose of the `.btn` class in Bootstrap?", options: ["To style links", "To style buttons", "To style images", "To style text"], answer: 1 },
        { question: "Which class is used to create a responsive image in Bootstrap?", options: [".img-responsive", ".img-fluid", ".img-center", ".img-rounded"], answer: 1 },
        { question: "How can you create a vertical navigation bar in Bootstrap?", options: ["Using the class .navbar-vertical", "Using the class .nav-vertical", "Using the class .flex-column", "Using the class .vertical-nav"], answer: 2 },
        { question: "What is the use of the `.alert` class in Bootstrap?", options: ["To create a pop-up dialog", "To display an alert message", "To create a navigation menu", "To style text inputs"], answer: 1 },
        { question: "How do you create a modal in Bootstrap?", options: ["Using the class .modal-dialog", "Using the class .modal-content", "Using the class .modal-header", "Using the class .modal"], answer: 3 },
        { question: "What class is used to create a responsive table in Bootstrap?", options: [".table-responsive", ".table-fluid", ".table-bordered", ".table-striped"], answer: 0 },
        { question: "Which Bootstrap class is used to hide elements on small screens?", options: [".d-none", ".hidden-sm", ".d-sm-none", ".hide-sm"], answer: 2 }
    ]
    
};
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn2').addEventListener('click', function() {
        var nameInput = document.getElementById('text').value.trim();

        if (nameInput === '') {
            alert('Please enter your name to continue.');
        } else {
            // Proceed with the quiz or any other logic you have
            document.querySelector('.container').style.display = 'none'; 
            document.querySelector('.quiz-selection').style.display = 'block'; 
        }
    });
});

// Variables to manage quiz 
let currentQuizType = '';
let currentQuestionIndex = 0;
let timerInterval;
let timeRemaining = 20;
let score = 0;

// Function to show the quiz based on selection
function showQuiz(type) {
    currentQuizType = type;
    currentQuestionIndex = 0;
    score = 0;
    timeRemaining = 20;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    // Hide container2 and container1
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.container1').style.display = 'none';
    
    // Show the quiz
    document.querySelector('.quiz-selection').style.display = 'none'; 
    document.getElementById('result').classList.remove('active'); 
    document.getElementById('quiz-container').classList.add('active');
    document.querySelector('.quiz-info').style.display = 'flex'; 
    document.getElementById('quiz-container').innerHTML = ''; 
    startTimer(); 
    showQuestion();
}

function showQuestion() {
    const quiz = quizzes[currentQuizType];
    if (currentQuestionIndex >= quiz.length) {
        // If no more questions, show result
        submitQuiz();
        return;
    }

    const question = quiz[currentQuestionIndex];
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <div class="question">
            <p>${currentQuestionIndex + 1}. ${question.question}</p>
            <ul class="options">
                ${question.options.map((option, i) => `
                    <li>
                        <input type="radio" name="question${currentQuestionIndex}" value="${i}" id="q${currentQuestionIndex}o${i}">
                        <label for="q${currentQuestionIndex}o${i}">${option}</label>
                    </li>
                `).join('')}
            </ul>
        </div>
        ${currentQuestionIndex < 9 ? '<button onclick="nextQuestion()">Next</button>' : '<button onclick="submitQuiz()">Submit</button>'}
    `;

    // Ensure the "Next" button is shown only when appropriate
    if (currentQuestionIndex < 9) {
        const quizButton = document.querySelector('#quiz-container button');
        quizButton.style.display = 'inline-block';
        quizButton.style.width = '230px';
        quizButton.style.height = '30px';
        } else {
            const buttonStyle = document.querySelector('#quiz-container button').style;
            buttonStyle.cssText = 'display: inline-block; width: 230px; height: 30px;';
                }

    // Restart the timer for the current question
    resetTimer();
}


function nextQuestion() {
    const quiz = quizzes[currentQuizType];
    const question = quiz[currentQuestionIndex];
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
    if (selectedOption && selectedOption.nextElementSibling.textContent.trim() === question.answer) {
        score++;
        document.getElementById('score').textContent = `Score: ${score}`;
    }
    currentQuestionIndex++;
    showQuestion();
}
// Function to submit the quiz and show results
function submitQuiz() {
    clearInterval(timerInterval); // Stop the timer

    // Get the user's name from the input
    const nameInput = document.getElementById('text').value.trim();

    // Calculate the time taken for the quiz
    const timeTaken = 20 - timeRemaining;

    // Display the result with the user's name, score, and time taken
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Quiz Results</h2>
        <p>Name: ${nameInput}</p>
        <p>Your score: ${score}/${quizzes[currentQuizType].length}</p>
        <p>Time taken: ${timeTaken} seconds</p>
    `;
    
    // Show the result section
    resultDiv.classList.add('active');

    // Hide the quiz container and quiz info (timer and score)
    document.getElementById('quiz-container').style.display = 'none'; 
    document.querySelector('.quiz-info').style.display = 'none'; 

    // Optionally, show the quiz selection buttons again (if needed)
    document.querySelector('.quiz-selection').style.display = 'flex'; 
}

// Function to start the timer
function resetTimer() {
    clearInterval(timerInterval);
    timeRemaining = 20;
    startTimer();
}

// Function to reset the timer when a new question is displayed
function startTimer() {
    const timer = document.getElementById('timer');
    timer.textContent = `Time: ${timeRemaining}s`;
    timerInterval = setInterval(() => {
        timeRemaining--;
        timer.textContent = `Time: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            nextQuestion();
            timeRemaining = 20; // Reset time remaining for the next question
        }
    }, 1000);
}