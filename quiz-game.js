let currentQuestion = 0;
let correctAnswerResult = 0;
let wrongAnswerResult = 0;
let totalAttend = 0;
let questionNumber = 0;


// The questions and its options are stored in the session 
const questions = [
  {
    question: "What is the name of the fund to be launched by the Government of India for catalysing deep tech start-ups?" ,
    answers: [" Digital India Innovation Fund", "Start Up Integration Fund", "Deeptech Innovation Fund", "Bharat Innovation Fund"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Digital India Innovation Fund" ,
    answerNote: "Notes :",
    answerDetails: "The Minister of State for Electronics & Information Technology and Skill Development & Entrepreneurship, Rajeev Chandrasekhar announced Government of India is going to launch a Digital India Innovation Fund.The Fund aims to catalyse Deep-tech Startups. He announced this during his address in the event of ‘New India for Young India: Techade of Opportunities’ program at the Catholic Bishop House Campus in Kerala." ,
    correctAnswer: 0
  } ,
  {
    question: "Which Indian chess player won silver in the World Blitz Chess Championship in Kazakhstan?" ,
    answers: [" Gukesh", "Praggnananda", "Koneru Humpy", "Viswanathan Anand"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Koneru Humpy" ,
    answerNote: "Notes :" ,
    answerDetails: "35-year-old Indian Chess player and former World rapid champion Koneru Humpy won Silver medal at World Blitz Chess Championship in Almaty, Kazakhstan.Savitha Shri, a 15-year-old girl from Tamil Nadu won bronze at the World rapid and blitz chess championship." ,
    correctAnswer: 2
  } ,
  {
    question: "Which state announced special schemes for Green Tech, Rural Impact and Women-led startups?" ,
    answers: ["Telangana", "Tamil Nadu", "Punjab", "New Delhi"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Tamil Nadu",
    answerNote: "Notes :" ,
    answerDetails: "The Tamil Nadu Startup and Innovation Mission (StartupTN) has rolled out special packages of assistance for Green Tech, Rural Impact and Women-led startups.Chief Minister M.K. Stalin launched the initiative, which included funds earmarked under StartupTN’s flagship grant scheme, Tamil Nadu Startup Seed Grant Fund (TANSEED). It also announced a 50 per cent increase in grants for startups falling under special categories.  He also launched a MentorTN portal, under which budding startups can approach successful entrepreneurs, professionals and trusted subject matter experts." ,
    correctAnswer: 1
  } ,
  {
    question: "Which sports authority recently introduced ‘Yo-Yo and Dexa Tests’ in team selection criteria?",
    answers: [" Hockey", "Cricket", "Weight Lifting", "Archery"],
    answerHead: "Correct Answer :",
    correctOne: "Cricket",
    answerNote: "Notes :" ,
    answerDetails: "Ahead of the ICC Men’s World Cup that takes place in India in October, the Board of Control for Cricket in India has instructed that Yo-Yo and Dexa Tests will be a part of the team selection criteria.Dexa test or DXA test is Dual Energy X-ray Absorptiometry, which measures bone density using low dose X-rays. The Yo-Yo test is an aerobic endurance fitness test, involving running between markers at increasing speeds." ,
    correctAnswer: 1
  } ,
  {
    question: "Simone Biles, who was seen in the news, is a popular gymnast of which country?" ,
    answers: [" Russia", " China", " Ukraine", " USA"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "USA" ,
    answerNote: "Notes :" ,
    answerDetails: "Simone Biles wins a record eighth all-around title at the U.S. Gymnastics Championships, a full decade after her first national title.She won her first world title at the 2013 championships and she has won 25 medals at world championships, including 18 golds — higher than any men’s or women’s gymnasts in history." ,
    correctAnswer: 3
  } , 
  {
    question: "Which city hosted the recent meeting of Western Zonal Council?",
    answers: [" Mumbai", " Gandhinagar", " Jodhpur", " Amritsar"],
    answerHead: "Correct Answer :" ,
    correctOne: "Gandhinagar",
    answerNote: "Notes :" ,
    answerDetails: "Union Home Minister Amit Shah recently chaired 26th meeting of Western Zonal Council at Gandhinagar, Gujarat.He also inaugurated an e-Resource web portal of Inter State Council Secretariat, Ministry of Home Affairs. This portal will facilitate functioning of Zonal Councils. The meeting was attended by Chief Ministers of Gujarat, Maharashtra, Goa and Administrator of Dadra & Nagar Haveli and Daman & Diu." ,
    correctAnswer: 1
  } ,
  {
    question: "Who was the founder of Institute of Mathematical Sciences (IMSc)?" ,
    answers: [" P C Mahalanobis", " Alladi Ramakrishnan", " Ramanujan", " C V Raman"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Alladi Ramakrishnan" ,
    answerNote: "Notes :" ,
    answerDetails: "The birth centenary of the eminent physicist Alladi Ramakrishnan is being celebrated in December 2023.He founded MATSCIENCE, The Institute of Mathematical Sciences (IMSc), in Chennai, and served as its Director until his retirement in 1983 at the age of sixty. The Institute will pay homage to its Founder-Director, by conducting The Alladi Ramakrishnan Centenary Conference at its campus in Taramani, Chennai." ,
    correctAnswer: 1
  } ,
  {
    question: "Which Union Ministry launched the ‘Mera Bill-Mera Adhikar Scheme’?" ,
    answers: [" Ministry of Finance", " Ministry of Corporate Affairs", " Ministry of MSME", " Ministry of Home Affairs"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Ministry of Finance" ,
    answerNote: "Notes :" ,
    answerDetails: "Union Finance Minister Nirmala Sitharaman launched the Mera Bill-Mera Adhikar Scheme from Gurugram on September 1.The scheme will be launched in the states of Assam, Gujarat, and Haryana; and the UTs of Puducherry, Daman & Diu, and Dadra & Nagar Haveli. Two bumper prizes of ₹1 crore each will be given away every quarter to the winners of Mera Bill Mera Adhikaar’." ,
    correctAnswer: 0
  } , 
  {
    question: "Which Railway Station was recently awarded the ‘Green Railway Station’ certification with the highest rating of Platinum by the Indian Green Building Council?" ,
    answers: ["Chengalpattu Railway Station, Tamil Nadu", " Hubbali Railway Station, Karnataka", " Kalyan Railway Station, Maharashtra", " Vijaywada Railway Station, Andhra Pradesh"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Vijaywada Railway Station, Andhra Pradesh" ,
    answerNote: "Notes :" ,
    answerDetails: "Vijayawada Railway Station achieved the prestigious ‘Green Railway Station’ certification, receiving the highest Platinum rating from the Indian Green Building Council (IGBC), a division of the Confederation of Indian Industry (CII) founded in 2001. IGBC serves as India’s foremost certification body, offering services such as green building rating programs, certification, and training. They host the annual Green Building Congress and actively participate in global discussions on environmental issues. The station’s rating considers six key environmental categories: sustainable facilities, health and sanitation, energy and water efficiency, smart and green initiatives, and innovation. IGBC’s headquarters are located in Hyderabad." ,
    correctAnswer: 3
  } ,
  {
    question: "Who are the main beneficiaries of ‘Project Naman’ launched by the Indian Army?" ,
    answers: [" Active-duty soldiers", " Foreign nationals", " Veterans and families of deceased personnel", " High-ranking military officials"] ,
    answerHead: "Correct Answer :" ,
    correctOne: "Veterans and families of deceased personnel" ,
    answerNote: "Notes :" ,
    answerDetails: "The Indian Army has launched ‘Project Naman’ to establish facilitation and grievance redressal centers for veterans and the families of personnel who have sacrificed their lives for the nation. The first center will be located in Delhi Cantonment. ‘Naman’ will house a Common Service Centre providing government-to-customer services, including pension account updates on the SPARSH portal. The SPARSH portal, initiated by the Ministry of Defence, is designed to manage pension sanction and disbursement for the Armed Forces, including the Army, Navy, Air Force, and Defence Civilians. This system offers complete transparency to defense pensioners, recording their pension history from its inception to the end of the pension due to the last eligible beneficiary. The Defense Accounts Department, under the Principal Controller of Defence Accounts (Pensions), will oversee this comprehensive system, handling all aspects of the pension cycle, including initiation, sanction, and disbursement, revision, and grievance resolution. ‘Project Naman’ and the SPARSH portal aim to enhance support and services for Indian Army veterans and their families." ,
    correctAnswer: 2
  }
];



// start button function
function startQuiz() {
  document.querySelector('.quiz-panel').style.display = 'block';
  document.querySelector('.finish-button').style.display = 'none';
  document.querySelector('.quiz-info').style.display = 'none';
  document.querySelector('.instruction-panel').style.display = 'none';
  document.querySelector('.about-quiz-game').style.display = 'none';
  showQuestion();
}

// The question and optional panel display function
function showQuestion() {
  const questionObj = questions[currentQuestion];
  questionNumber++;
  document.getElementById('question').textContent = questionObj.question;
  for (let i = 0; i < questionObj.answers.length; i++) {
    const answerButton = document.getElementById(`answer-${i+1}`);
    document.querySelector('.question-number').textContent = `${questionNumber}`;
    answerButton.textContent = questionObj.answers[i];
    answerButton.onclick = function() {
      totalAttend++;
      answerButton.style.border = 'none';
      document.querySelector('.answer-details-div').style.display = 'block';
      document.getElementById('showAnswerButton').style.display = 'block';
      const showAnswer = document.getElementById('showAnswerButton');

      // Show answer details button function
      showAnswer.onclick = function() {
        var element = document.querySelector('.answer-details-div'); 
        element.style.boxShadow = '1px 1px 10px rgba(30, 28, 28, 0.5)';
        document.querySelector('#answerHead').textContent = questionObj.answerHead;
        document.querySelector('#correctOne').textContent = questionObj.correctOne;
        document.querySelector('#answerNotes').textContent = questionObj.answerNote;
        document.querySelector('#answerDetails').textContent = questionObj.answerDetails;
        document.querySelector('.show-answer-button').innerHTML = "Hide Answer";

        // Hide answer details function 
        document.querySelector('.show-answer-button').onclick = function() {
          var element = document.querySelector('.answer-details-div'); 
          element.style.boxShadow = '';
          document.querySelector('#answerHead').style.display = 'none';
          document.querySelector('#correctOne').style.display = 'none';
          document.querySelector('#answerNotes').style.display = 'none';
          document.querySelector('#answerDetails').style.display = 'none';
          document.querySelector('.show-answer-button').innerHTML = "Show Answer";
          document.querySelector('.answer-details-div').style.backgroundColor = 'white';
        }

        

        // Return to answer details old format
        document.querySelector('#answerHead').style.display = '';
        document.querySelector('#correctOne').style.display = '';
        document.querySelector('#answerNotes').style.display = '';
        document.querySelector('#answerDetails').style.display = '';
      }

      var element = document.querySelector('.answer-details-div'); 
      element.style.boxShadow = '';

      // if we click on the one options another will be disabled
      for (let j = 0; j < questionObj.answers.length; j++) {
        if (j !== i && j !== questionObj.correctAnswer) {
          document.getElementById(`answer-${j+1}`).disabled = true;
        } else if(j === questionObj.correctAnswer) {
          document.getElementById(`answer-${j+1}`).disabled = true;
          document.getElementById(`answer-${j+1}`).style.backgroundColor = 'green';
        } else {
          document.getElementById(`answer-${j+1}`).disabled = true;
        }
      }
      
      // if we click on the answer button then the answer is selected and the answer backgrond color is changed accordingly
      if (i === questionObj.correctAnswer) {
        this.style.backgroundColor = 'green';
        correctAnswerResult++;
      } else {
        this.style.backgroundColor = 'red';
        wrongAnswerResult++;
      }
    };

    // every property should be normalized
    answerButton.style.backgroundColor = '';
    answerButton.disabled = false;
    answerButton.style.border = '';
    document.querySelector('#answerHead').textContent = '';
    document.querySelector('#correctOne').textContent = '';
    document.querySelector('#answerNotes').textContent = '';
    document.querySelector('#answerDetails').textContent = '';
    document.querySelector('.show-answer-button').innerHTML = "Show Answer";
  }
}

// Next button click event
function nextQuestion() {
  document.querySelector('.answer-details-div').style.display = 'none';
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    document.querySelector('.finish-button').style.display = 'block';
  }
}

// Finish button click event
function finishQuestion() {
  document.querySelector('.quiz-panel').style.display = 'none';
  document.querySelector('.result').style.display = 'block';
  document.getElementById('correctAnswerResult').textContent = `${correctAnswerResult}`;
  document.getElementById('incorrectAnswerResult').textContent = `${wrongAnswerResult}`;
  document.getElementById('totalAttend').textContent = `${totalAttend}`;
  document.getElementById('totalScore').textContent = `${correctAnswerResult} / ${currentQuestion}`;
}

// Returns to Home click event
function returnToHome() {
  document.querySelector('.quiz-info').style.display = 'block';
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.instruction-panel').style.display = 'block';
  document.querySelector('.about-quiz-game').style.display = 'block';
  document.querySelector('.start-quiz').disabled = 'true';
}


