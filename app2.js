var main = document.getElementById('mainList')

// console.log(firebase)

// console.log(nmes)
// firebase.database().ref("Quiz").on("child_added",function(data){
    // var showdata = data.val().quiz1
    // console.log(showdata)
    // if(JSON.parse(localStorage.getItem(nms)) != nmes){
    //     localStorage.setItem("nms",JSON.stringify(nmes))
    // }

    // console.log(nmenode)
    // var nmenode = document.createTextNode(data.val().nme + ":")
    // var usernme = document.createElement("p")
    // usernme.setAttribute("class","usrnme")
    // usernme.appendChild(nmenode)
    // console.log(data.val())
    // for(i=0;i<data.val().length;i++){
    // var finalText = document.createTextNode(data.val()[i].question)
    // var list = document.createElement('p')
    // list.setAttribute('class','list')
    // // list.appendChild(usernme)
    // list.appendChild(finalText)
    // main.appendChild(list)
    
    // var btnDiv = document.createElement('div')
    // var btn = document.createElement('button')
    // btn.setAttribute('class' , 'btn1')
    // btn.setAttribute('id' , data.val()[i].key)
    // btn.setAttribute('onclick', 'deleteQUIZ(this)')
    // var btntext = 'Delete'
    // var finalbtntext = document.createTextNode(btntext)
    // btn.appendChild(finalbtntext)
    
    
    // var editbtn = document.createElement('button')
    // editbtn.setAttribute('class' , 'btn1')
    // editbtn.setAttribute('id' , data.val()[i].key)
    // editbtn.setAttribute('onclick', 'edit(this)')
    // var editbtntext = 'Edit'
    // var finaleditbtntext = document.createTextNode(editbtntext)
    // editbtn.appendChild(finaleditbtntext)
    
    
    
    
    
    
    // btnDiv.appendChild(btn)
    // btnDiv.appendChild(editbtn)
    // list.appendChild(btnDiv)
    
// }
    // var opt1 = document.createElement("li")
    // opt1.setAttribute("class","opts")
    // opt1.setAttribute("class","opts1")

    // var editopt = document.createElement('button')
    // editopt.setAttribute('class' , 'btn1')
    // editopt.setAttribute('id' , data.val().key)
    // editopt.setAttribute('onclick', 'edit(this)')
    // var editopttext = 'Edit'
    // var finaleditopttext = document.createTextNode(editopttext)
    // editbtn.appendChild(finaleditopttext)


    // var opt2 = document.createElement("li")
    // var opt3 = document.createElement("li")
    // var opt4 = document.createElement("li")

// })
var QUIZ = []
var quesCount = document.getElementById("counted")
count = 0
// var quespkg = []
function addQues(){
    var objPkg = {
        key : "",
        question: "",
        answer: "",
        options: [],

    }
    var quesd = document.getElementById('inp')
    var ansd = document.getElementById('inpA')
    var opt1 = document.getElementById('inpA1')
    var opt2 = document.getElementById('inpA2')
    var opt3 = document.getElementById('inpA3')
    var opt4 = document.getElementById('inpA4')
    
    
    
    if(quesd.value == "" && ansd.value == "" && opt1.value == "" || opt2.value == "" || opt3.value == "" || opt4.value == ""){
        return(alert("Please Write Something!!"))     
    }
    var key = count
    objPkg.question = quesd.value
    objPkg.answer = ansd.value
    objPkg.key = key
    var answers = [opt1.value,opt2.value,opt3.value,opt4.value]
    objPkg.options = answers
    QUIZ.push(objPkg)

    var finalText = document.createTextNode("Question: "+QUIZ[count].question)
    var list = document.createElement('p')
    list.setAttribute('class','list')
    // list.appendChild(usernme)
    list.appendChild(finalText)
    main.appendChild(list)
    var breas = document.createElement("br")
    list.appendChild(breas)
    var anse = document.createElement("li")
    var anseNode = document.createTextNode("Answer: "+QUIZ[count].answer)
    anse.setAttribute("class","list")
    list.appendChild(anseNode)
    
    // var btnDiv = document.createElement('div')
    // var btn = document.createElement('button')
    // btn.setAttribute('class' , 'btn1')
    // btn.setAttribute('id' , key)
    // btn.setAttribute('onclick', 'deleteQUIZ(this)')
    // var btntext = 'Delete'
    // var finalbtntext = document.createTextNode(btntext)
    // btn.appendChild(finalbtntext)
    

    // var editbtn = document.createElement('button')
    // editbtn.setAttribute('class' , 'btn1')
    // editbtn.setAttribute('id' , key)
    // editbtn.setAttribute('onclick', 'edit(this)')
    // var editbtntext = 'Edit'
    // var finaleditbtntext = document.createTextNode(editbtntext)
    // editbtn.appendChild(finaleditbtntext)






    // btnDiv.appendChild(btn)
    // btnDiv.appendChild(editbtn)
    // list.appendChild(btnDiv)



    // console.log(QUIZ)
    count++
    counted.innerHTML = count
    quesd.value = ""
    ansd.value = ""
    opt1.value = ""
    opt2.value = ""
    opt3.value = ""
    opt4.value = ""
    
    // console.log(quesd,ansd,opt1,opt2,opt3,opt4)
}
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
//             "Surronded",
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
function add() {
    var database = firebase.database().ref("Quiz")
    // var key = database.push("Quiz 1")
     
    database.child("Quiz 1").set(QUIZ)
    alert("Quiz has been updated!")
    
    // console.log(list.value)
}
function deleteQUIZ(e){
    // console.log(
    // firebase.database().ref("Quiz").child("Quiz 1").child(e.id).remove())
    var li = e.parentNode.parentNode.parentNode
    li.remove()
    // console.log(e.id)
}
function edit(e){
    var editText = prompt('enter edit text')
    var li = e.parentNode
    var edittood = {
        question: editText,
        key: e.id
    }
    console.log(edittood)
    firebase.database().ref("Quiz").child("Quiz 1").child(e.id).set(edittood)
    li.firstChild.nodeValue = editText
}
function deleteAll(){
    firebase.database().ref("Quiz").remove()
    counted.innerHTML = ""
    main.innerHTML = ''
}

// console.log(firebase.database)