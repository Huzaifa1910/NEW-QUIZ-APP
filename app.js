var questionsArray = []

firebase.database().ref("Quiz").on("child_added",function(data){
    var questionsArrays = data.val()
    questionsArray = questionsArrays
    // console.log(questionsArray)
    console.log(questionsArray)
    window.abc = function question(e){
        var question = document.getElementById("question");
        question.innerHTML = questionsArray[e].question;
        couns.innerHTML = questionsArray.length
        var options = document.getElementsByClassName("btns");
        for(i = 0; i < options.length; i++){
            options[i].innerHTML=questionsArray[e].options[i];
        }
        quesIncrease()
    }
    window.parent.abc(quesCount)

}
)
// var questionsArray = {
//     Quiz1 : [
//     //Que 1
//     {
//         question: "Khuru Agreed to take an _____",
//         answer: "oath",
//         options: [
//             "decision",
//             "oath",
//             "Chicken",
//             "none of the above",
//         ]
//     },
//     //Que 2
//     {
//         question: "Khameer went back to the field to ______ his son",
//         answer: "Extract",
//         options: [
//             "Extract",
//             "Axtract",
//             "Distract",
//             "Contact",
//         ]
//     },
//     //Que 3
//     {
//         question: "Khameer had a large family of _____ sons",
//         answer: "Seven",
//         options: [
//             "Eight",
//             "six",
//             "Seven",
//             "none of the above",
//         ]
//     },
//     //Que 4
//     {
//         question: "Khuru returned home very _____",
//         answer: "sad",
//         options: [
//             "sad",
//             "Happy",
//             "excited",
//             "none of the above",
//         ]
//     },
//     //Que 5
//     {
//         question: "Khameer return home ____ and ____ after digging land",
//         answer: "Dejected and hopeless",
//         options: [
//             "Dejected and hopeless",
//             "Happy and excited",
//             "Cold and tired",
//             "none of the above",
//         ]
//     },
//     //Que 6
//     {
//         question: "Khameer was ____",
//         answer: "Selfish",
//         options: [
//             "Selfish",
//             "selfless",
//             "none of the above",
//         ]
//     },
//     //Que 7
//     {
//         question: "Khuru was ____",
//         answer: "selfless",
//         options: [
//             "Selfish",
//             "selfless",
//             "none of the above",
//         ]
//     },
//     //Que 8
//     {
//         question: "Khameer has the ____ share of land",
//         answer: "Largest",
//         options: [
//             "Largest",
//             "Smallest",
//             "Equally divided",
//             "none of the above",
//         ]
//     },
//     //Que 9
//     {
//         question: "Khameer _____ his son in land to answer his question",
//         answer: "Burried",
//         options: [
//             "Burried",
//             "Hide",
//             "None of the above",
//         ]
//     },
//     //Que10
//     {
//         question: "Khammer land was left _____",
//         answer: "Heirless",
//         options: [
//             "Heirless",
//             "Useless",
//             "None of the above",
//         ]
//     },
//     //Que11
//     {
//         question: "Khuru ______ to make use of the land ",
//         answer: "never cared",
//         options: [
//             "cared",
//             "never cared",
//             "takeover land",
//             "None of the above",
//         ]
//     },
//     //Que12
//     {
//         question: "Two brothers are ______ over the family land",
//         answer: "quarrelling",
//         options: [
//             "quarrelling",
//             "Happily make division",
//             "None of the above",
//         ]
//     },
//     //Que13
//     {
//         question: "Two brothers Folk tale comes from ____",
//         answer: "Hunza",
//         options: [
//             "Sawat",
//             "Southern Area",
//             "Hunza",
//             "None of the above",
//         ]
//     },
//     //Que14
//     {
//         question: "Elder brother ____ his grains to younger brother",
//         answer: "never gives",
//         options: [
//             "None of the Below ",
//             "always gives",
//             "never gives",
//         ]
//     },
//     //Que15
//     {
//         question: "He is still my _____, after all",
//         answer: "brother",
//         options: [
//             "enemy",
//             "brother",
//             "friend",
//             "sister",
//         ]
//     },
//     //Que16
//     {
//         question: "Rich brother never invites his ______",
//         answer: "younger brother",
//         options: [
//             "younger brother",
//             "elder brother",
//             "friends",
//             "enemies",
//         ]
//     },
//     //Que17
//     {
//         question: "______ fell ill",
//         answer: "elder brother",
//         options: [
//             "middle brother",
//             "younger brother",
//             "elder brother",
//             "his friend",
//         ]
//     },
//     //Que18
//     {
//         question: "Medicine man advised me to eat _____",
//         answer: "big roaster",
//         options: [
//             "chicken",
//             "cow",
//             "big roaster",
//             "meat",
//         ]
//     },
//     //Que19
//     {
//         question: "It wakes me up every morning with its _____ crowing",
//         answer: "Ugly",
//         options: [
//             "beautiful",
//             "Ugly",
//             "peaceful",
//             "None of the above",
//         ]
//     },
//     //Que20
//     {
//         question: "that roaster is the ____ thing we have",
//         answer: "only",
//         options: [
//             "common",
//             "only",
//             "big",
//             "rarest",
//         ]
//     },
//     //Que21
//     {
//         question: "Red Roaster is from ____",
//         answer: "Ethopia",
//         options: [
//             "Ethopia",
//             "Naran",
//             "Southern Area",
//             "Sri Lanka",
//         ]
//     },
//     //Que22
//     {
//         question: "Their father was _____",
//         answer: "Rich",
//         options: [
//             "Rich",
//             "Poor",
//             "Middle Class",
//             "None of the above",
//         ]
//     },
//     //Que23
//     {
//         question: "His and all his guests jumped up in ____",
//         answer: "Horror",
//         options: [
//             "Quest",
//             "Horror",
//             "Treasure",
//             "None of the above",
//         ]
//     },
//     //Que24
//     {
//         question: "Rich brother was ____ and ____",
//         answer: "Selfish and Greedy",
//         options: [
//             "Selfless and Merciful",
//             "Selfish and Greedy",
//             "none of the above",
//         ]
//     },
//     //Que25
//     {
//         question: "Crosing river took place in _____",
//         answer: "Russia",
//         options: [
//             "Japan",
//             "China",
//             "Russia",
//             "America",
//         ]
//     },
//     //Que26
//     {
//         question: "It Happened nearly ____ years ago",
//         answer: "two hundred",
//         options: [
//             "two hundred",
//             "two thousand",
//             "one hundred",
//             "one thousand",
//         ]
//     },
//     //Que27
//     {
//         question: "Serge was just ____ years old",
//         answer: "nine",
//         options: [
//             "nine",
//             "ten",
//             "eight",
//             "none of the above"
//         ]
//     },
//     //Que28
//     {
//         question: "the womens on the boat have _____",
//         answer: "Baskets",
//         options: [
//             "Horses",
//             "Baskets",
//             "Oars",
//             "Nothing",
//         ]
//     },
//     //Que29
//     {
//         question: "the women raised a ______",
//         answer: "piercing shriek",
//         options: [
//             "Berries",
//             "piercing shriek",
//             "Oars",
//             "none of the above",
//         ]
//     },
//     //Que30
//     {
//         question: "Serge was ____ by waves",
//         answer: "Choked",
//         options: [
//             "Surronded",f
//             "Choked",
//             "Drowned",
//             "None of the above",
//         ]
//     },
//     {
//         question: "",
//         answer: "",
//         options: [
//             "",
//             "",
//             "",
//             "",
//         ]
//     },
//     // {
//     //     question: "",
//     //     answer: "",
//     //     options: [
//     //         "",
//     //         "",
//     //         "",
//     //         "",
//     //     ]
//     // },


// ]
// };
function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    var admin = "admin"
    if(input.value == admin){
        return(location.href = "make.html")
    }
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}
var couns = document.getElementById("couns")

var quesCount = 0
var score = 0
var quesss = 0
// console.log(questionsArray)

function nxtQ(){
    scr()
    quesCount++;
    result()
    removehighLight()
    window.parent.abc(quesCount)
    sessionStorage.setItem("length",questionsArray.length);
}

function highLight(e){
    removehighLight()
    e.classList.add("HL")    
}

function removehighLight(){
    var HLl = document.getElementsByClassName("HL");
    for(i = 0; i < HLl.length; i++){
        HLl[i].classList.remove("HL")
    }
}

function scr(){
    var ans = document.getElementsByClassName("HL")
    if(ans[0].innerHTML == questionsArray[quesCount].answer){
        score += 1;
        console.log(score)
    }
}

function result(){
    if(quesCount == questionsArray.length)
    {
        location.href = "result.html"
        // alert(score)
    }
    sessionStorage.setItem("userscore", score);
}

function startQuiz(){
    window.location.href = "Quiz.html";
    
}


function renderResult(){
    var cs = sessionStorage.getItem("userscore");
    var result = document.getElementById("result");
    result.innerHTML = "You scored "+ cs +" out of "+sessionStorage.getItem("length");
    getName()
}

function takeAgain(){
    window.location.href = "index.html";
}


function quesIncrease(){
    var quess = document.getElementById("mainn");
    quess.innerHTML = quesss++;
}
quesIncrease()
function getName(){
    
    var nme1 = sessionStorage.getItem("name");
    var NME = document.getElementById("nme");
    NME.innerHTML = nme1
}