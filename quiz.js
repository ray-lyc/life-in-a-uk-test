// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const next = document.getElementById("next");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const choicesScore = [1, 2, 4, 8];

let questionList = [];
let selectAnswers = [];
let choices = [choiceA, choiceB, choiceC, choiceD];

// create our questions
let questions = [
    {
        question : "What are two responsibilities that you will have as a British citizen or permanent resident of the UK?",
        choiceA : "To look after the area in which you live and the environment",
        choiceB : "To look after yourself and your family",
        choiceC : "To stay in the UK forever",
        choiceD : "To promote work in your local community",
        correct : 3,
		note    : "If you wish to be a permanent resident or citizen of the UK, you should: look after yourself and your family, <b>look after the area in which you live and the environment</b>, respect and obey the law, respect the rights of others, including their right to their own opinions and treat others with fairness."
    },
    {
        question : "Where is Big Ben located?",
        choiceA : "Buckingham Palace",
        choiceB : "The Tower of London",
        choiceC : "Trafalgar Square",
        choiceD : "The Houses of the Parliament",
        correct : 8
    },
    {
        question : "When were men and women given the right to vote at the age of 21?",
        choiceA : "1918",
        choiceB : "1903",
        choiceC : "1928",
        choiceD : "1923",
        correct : 4
    },
    {
        question : "Where is the UK geographically located?",
        choiceA : "South west of Europe",
        choiceB : "North east of Europe",
        choiceC : "North west of Europe",
        choiceD : "South east of Europe",
        correct : 4,
		note    : "The UK is located in the <b>north west of Europe</b>."
    },
    {
        question : "Who is the patron Saint of Scotland?",
        choiceA : "St David",
        choiceB : "St Patrick",
        choiceC : "St George",
        choiceD : "St Andrew",
        correct : 8,
		note    : "The patron Saint of Scotland is <b>St Andrew</b>."
    },
    {
        question : "Which two houses fought in the Wars of the Roses?",
        choiceA : "The House of Chester",
        choiceB : "The House of York",
        choiceC : "The House of Lancaster",
        choiceD : "The House of Newcastle",
        correct : 6,
		note    : "The Wars of the Roses were fought between the supporters of two families: <b>the House of Lancaster and the House of York</b>."
    },
    {
        question : "The Bill of Rights of 1689 confirmed the right to vote for all adult men.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 2,
		note    : "<b>False</b>. The Bill of Rights, 1689, confirmed the rights of Parliament and the limits of the king’s power."
    },
    {
        question : "What is the Cenotaph?",
        choiceA : "A flower",
        choiceB : "A Christian church",
        choiceC : "A war memorial",
        choiceD : "A theatre",
        correct : 4,
		note    : "The Cenotaph is a <b>war memorial</b> and it is the site of the annual Remembrance Day service attended by the Queen, politicians and foreign ambassadors."
    },
    {
        question : "Who was the first female Prime Minister of the UK?",
        choiceA : "Mary Stuart",
        choiceB : "Theresa May",
        choiceC : "Margaret Thatcher",
        choiceD : "Florence Nightingale",
        correct : 4,
		note    : "<b>Margaret Thatcher</b> was the first woman Prime Minister of the UK."
    },
    {
        question : "Who chairs the debates at the House of Commons?",
        choiceA : "A bishop",
        choiceB : "The Prime Minister",
        choiceC : "The Speaker",
        choiceD : "The archbishop of Canterbury",
        correct : 4,
		note    : "Debates in the House of Commons are chaired by <b>the Speaker</b>."
    },
    {
        question : "Who was the captain of the English football team that won the World Cup in 1966?",
        choiceA : "Sir Roger Bannister",
        choiceB : "Sir Jackie Stewart",
        choiceC : "Sir Ian Botham",
        choiceD : "Bobby Moore",
        correct : 8,
		note    : "<b>Bobby Moore</b> captained the English football team that won the World Cup in 1966."
    },
    {
        question : "When did the English defeat the Spanish Armada?",
        choiceA : "1466",
        choiceB : "1066",
        choiceC : "1254",
        choiceD : "1588",
        correct : 8
    },
    {
        question : "Anyone can make a complaint about the police by writing to the Chief Constable of the police force involved.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 1
    },
    {
        question : "What is the minimum age required to serve on a jury?",
        choiceA : "16",
        choiceB : "18",
        choiceC : "21",
        choiceD : "25",
        correct : 2,
		note    : "Anyone who is on the electoral register and is aged <b>18</b> to 70 can be asked to serve on a jury."
    },
    {
        question : "How is a jury selected?",
        choiceA : "From the NHS registration system",
        choiceB : "Randomly from the electoral register",
        choiceC : "Alphabetically from the telephone directory",
        choiceD : "From a postcode selection",
        correct : 2,
		note    : "As well as getting the right to vote, people <b>on the electoral register are randomly selected</b> to serve on a jury. Anyone who is on the electoral register and is aged 18 to 70 can be asked to do this."
    },
    {
        question : "What is a bank holiday?",
        choiceA : "A public holiday when banks are open all day",
        choiceB : "A public holiday for people working in banks",
        choiceC : "An additional day off that every worker in the UK is entitled to",
        choiceD : "A public holiday when banks and many other businesses are closed for the day",
        correct : 8,
		note    : "There are public holidays each year called bank holidays, <b>when banks and many other businesses are closed for the day</b>."
    },
    {
        question : "What will you be given to vote before a general election takes place?",
        choiceA : "A poll tax relief",
        choiceB : "A number to queue at the polling station",
        choiceC : "A poll card",
        choiceD : "An specific time for you to vote",
        correct : 4,
		note    : "Before the election you will be sent a <b>poll card</b>."
    },
    {
        question : "Which of the following statements is correct?",
        choiceA : "Solicitors' charges are usually based on how much time they spend on a case",
        choiceB : "Solicitors' charges are usually based on the nature of a case and its importance",
        choiceC : null,
        choiceD : null,
        correct : 1,
		note    : "Solicitors’ charges are usually based on how much time they spend of a case."
    },
    {
        question : "By law, which TWO types of media have to give a balanced coverage of all political parties and equal time to rival viewpoints before an election?",
        choiceA : "Television",
        choiceB : "Internet",
        choiceC : "Newspapers",
        choiceD : "Radio",
        correct : 9,
		note    : "By law, <b>radio and television</b> coverage of the political parties must be balanced and so equal time has to be given to rival viewpoints."
    },
    {
        question : "Which of the following territories is a Crown dependency but is NOT part of the UK?",
        choiceA : "Northern Ireland",
        choiceB : "Wales",
        choiceC : "The Channel Islands",
        choiceD : "Scotland",
        correct : 4,
		note    : "<b>Channel Islands</b> is a British overseas territory linked to the UK, but it is not part of it."
    },
    {
        question : "What did Sir Frank Whittle invent in the 1930s?",
        choiceA : "Radar",
        choiceB : "Hovercraft",
        choiceC : "Jet engine",
        choiceD : "Ballpoint pen",
        correct : 4,
		note    : "The <b>jet engine</b> was developed in Britain in the 1930s by <b>Sir Frank Whittle</b>."
    },
    {
        question : "Who wrote ‘The Daffodils’?",
        choiceA : "William Blake",
        choiceB : "Robert Browning",
        choiceC : "Lord Byron",
        choiceD : "William Wordsworth",
        correct : 8,
		note    : "The British poet <b>William Wordsworth</b> wrote ‘The Daffodils’."
    },
    {
        question : "Who was given the title of Lord Protector?",
        choiceA : "Charles I",
        choiceB : "Charles II",
        choiceC : "Winston Churchill",
        choiceD : "Oliver Cromwell",
        correct : 8
    },
    {
        question : "What are the 40 days before Easter called?",
        choiceA : "Diwali",
        choiceB : "Lent",
        choiceC : "Hannukah",
        choiceD : "Vaisakhi",
        correct : 2,
		note    : "The 40 days before Easter are known as <b>Lent</b>."
    },
    {
        question : "What is the Home Secretary responsible for?",
        choiceA : "Health",
        choiceB : "Defence",
        choiceC : "Education",
        choiceD : "Policing",
        correct : 8,
		note    : "The Home Secretary is responsible for <b>crime, policing and immigration</b>."
    },
    {
        question : "St Helena is a British overseas territory and it is part of the United Kingdom.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 2,
		note    : "British overseas territories, such as St Helena and the Falkland Islands are linked to the UK but are <b>not part of it</b>."
    },
    {
        question : "Several Church of England bishops sit in the House of Lords.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 1
    },
    {
        question : "When walking your dog in a public place, you must ensure:",
        choiceA : "That your dog does not play with other dogs",
        choiceB : "That your dog wears a collar showing the name and address of the owner",
        choiceC : "That your dog wears a high visibility jacket",
        choiceD : "That your dog does not bark",
        correct : 2
    },
    {
        question : "Women over the age of 30 were given the right to vote as a result of their contribution towards the war effort. Which war was that?",
        choiceA : "The Second World War",
        choiceB : "The Crimean War",
        choiceC : "The First World War",
        choiceD : "The Civil War",
        correct : 4,
		note    : "In 1918, women over the age of 30 were given voting rights and the right to stand for Parliament, partly in recognition of the contribution women made to the war effort during the <b>First World War</b>."
    },
    {
        question : "When did Ireland become a republic?",
        choiceA : "1925",
        choiceB : "1939",
        choiceC : "1949",
        choiceD : "1927",
        correct : 4
    },
    {
        question : "Where did the first farmers come from?",
        choiceA : "South-west Europe",
        choiceB : "South-east Europe",
        choiceC : "North-east America",
        choiceD : "North-west Asia",
        correct : 2,
		note    : "The first farmers arrived in Britain 6,000 years ago. The ancestors of these first farmers probably came from <b>south-east Europe</b>."
    },
    {
        question : "The National Anthem ‘God save the queen’ can only be played in the presence of the Queen.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 2,
		note    : "The National Anthem is <b>played at important national occasions and at events attended by the Queen or the Royal Family</b>."
    },
    {
        question : "Who became Prime Minister and was an inspirational leader to the British people during WWII?",
        choiceA : "Winston Churchill",
        choiceB : "Clement Attlee",
        choiceC : "Margaret Thatcher",
        choiceD : "Sir Robert Walpole",
        correct : 1
    },
    {
        question : "What is the title of the Queen’s eldest son, Prince Charles?",
        choiceA : "Prince of Kent",
        choiceB : "Prince of Wales",
        choiceC : "Prince of Hanover",
        choiceD : "Prince of Brunswick",
        correct : 2,
		note    : "Prince Charles is also known as <b>the Prince of Wales</b>."
    },
    {
        question : "Under which king did the Anglo-Saxon kingdoms in England unite to defeat the Vikings?",
        choiceA : "William of Orange",
        choiceB : "King Alfred the Great",
        choiceC : "Henry VIII",
        choiceD : "Robert the Bruce",
        correct : 2,
		note    : "The Anglo-Saxon kingdoms in England united under <b>King Alfred the Great</b>, who defeated the Vikings."
    },
    {
        question : "When was the Magna Carta created?",
        choiceA : "1514",
        choiceB : "1215",
        choiceC : "1415",
        choiceD : "1314",
        correct : 2
    },
    {
        question : "Northern Ireland has its own banknotes, which are valid everywhere in the UK.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 1
    },
    {
        question : "Which of the following plays was written by William Shakespeare?",
        choiceA : "Pride and Prejudice",
        choiceB : "A Midsummer Night’s dream",
        choiceC : "Sense and Sensibility",
        choiceD : "Great Expectations",
        correct : 2
    },
    {
        question : "How many members does a jury have in England, Wales and Northern Ireland?",
        choiceA : "9",
        choiceB : "12",
        choiceC : "15",
        choiceD : "20",
        correct : 2
    },
    {
        question : "Which two of the following religious communities celebrate Diwali?",
        choiceA : "Buddhists",
        choiceB : "Hindus",
        choiceC : "Jews",
        choiceD : "Sikhs",
        correct : 10,
		note    : "Diwali is celebrated by <b>Hindus and Sikhs</b>."
    },
    {
        question : "What is Good Friday?",
        choiceA : "The day when Jesus Christ rose from the dead",
        choiceB : "The day when Jesus Christ was born",
        choiceC : "The day when Jesus Christ died",
        choiceD : "The day when Jesus Christ became 30 years old",
        correct : 4,
		note    : "Good Friday <b>marks the death of Jesus Christ</b> during the Easter."
    },
    {
        question : "St Patrick’s day is a public holiday in Northern Ireland.",
        choiceA : "True",
        choiceB : "False",
        choiceC : null,
        choiceD : null,
        correct : 4,
		note    : "<b>True</b>. Only Scotland and Northern Ireland have their patron saint’s day as an official holiday (although in Scotland not all businesses and offices will close)."
    },
    {
        question : "Which was the last successful foreign invasion of England that took place in 1066?",
        choiceA : "The Viking invasion",
        choiceB : "The Anglo-Saxon Conquest",
        choiceC : "The Roman invasion",
        choiceD : "The Norman Conquest",
        correct : 8,
		note    : "<b>The Norman Conquest</b> was the last successful foreign invasion of England in 1066."
    },
    {
        question : "Where are the Crown Jewels kept?",
        choiceA : "At the House of Commons",
        choiceB : "At the Tower of London",
        choiceC : "At Buckingham Palace",
        choiceD : "At Windsor Castle",
        correct : 2
    },
    {
        question : "Which sport can be traced back to the 15th century in Scotland?",
        choiceA : "Golf",
        choiceB : "Tennis",
        choiceC : "Football",
        choiceD : "Rugby",
        correct : 1,
		note    : "The modern game of <b>golf</b> can be traced back to 15th century Scotland."
    },
    {
        question : "Who was the first person in England to print books using a printing press?",
        choiceA : "William Shakespeare",
        choiceB : "John Barbour",
        choiceC : "Geoffrey Chaucer",
        choiceD : "William Caxton",
        correct : 8
    },
    {
        question : "Which court deals with minor criminal cases in England, Wales and Northern Ireland?",
        choiceA : "High Court",
        choiceB : "Justice of the Peace Court",
        choiceC : "Magistrates’ Court",
        choiceD : "Crown Cour",
        correct : 4,
		note    : "In England, Wales and Northern Ireland, most minor criminal cases are dealt with in a <b>Magistrates’ Court</b>. In Scotland, minor criminal offences go to a Justice of the Peace Court."
    },
    {
        question : "What did the Scottish John Logie Baird develop?",
        choiceA : "Television",
        choiceB : "Radar",
        choiceC : "Personal computer",
        choiceD : "Radio",
        correct : 1,
		note    : "The <b>television</b> was developed by Scotsman John Logie Baird in the 1920s."
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 300; // 5min
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

// render a question
function renderQuestion(){
    let q = questions[questionList[runningQuestion]];

    question.innerHTML = "<p>" + (runningQuestion + 1) + ".&nbsp" + q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;

	choiceC.innerHTML = q.choiceC;
	if (q.choiceC == null) {
		choiceC.style.display = "none";
	}
	else {
		choiceC.style.display = "inline-block";
	}
	
    choiceD.innerHTML = q.choiceD;
	if (q.choiceD == null) {
		choiceD.style.display = "none";
	}
	else {
		choiceD.style.display = "inline-block";
	}
	
	choiceA.style.backgroundColor = "#FFFFFF";
	choiceB.style.backgroundColor = "#FFFFFF";
	choiceC.style.backgroundColor = "#FFFFFF";
	choiceD.style.backgroundColor = "#FFFFFF";
}

// start quiz
function startQuiz(){
	questionList = shuffle(Object.keys(questions));

    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    //renderProgress();
    //renderCounter();
    //TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
	
	selectAnswers = new Array(questions.length);
	for (let i=0; i<questions.length; i++) {
		selectAnswers[i] = new Array(choicesScore.length);
		for (let j=0; j<4; j++) {
			selectAnswers[i][j] = 0;
		}
	}
}

function nextQuestion() {
	if (next.innerHTML == "Submit") {
	}
	else {
		if (runningQuestion != lastQuestion) {
			runningQuestion++;
			renderQuestion();
		}
		
		if (runningQuestion == lastQuestion) {
			next.innerHTML = "Submit";
		}
	}
}

// checkAnwer

function checkAnswer(answer){
	if (selectAnswers[runningQuestion][answer] == 0) {
		selectAnswers[runningQuestion][answer] = choicesScore[answer];
		choices[answer].style.backgroundColor = "#04AA6D";
	}
	else {
		selectAnswers[runningQuestion][answer] = 0;
		choices[answer].style.backgroundColor = "#FFFFFF";
	}
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";

    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}