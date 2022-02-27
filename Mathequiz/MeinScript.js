//check difficulty

let difficulty = parseInt(difficultyCheck());
let answer;
//this is just for Test's
//difficulty = 10;
display();







//------------------------------------------------------
//Functions


function newGame() {
    localStorage.setItem("MathQuizDifficulty", 1);
    difficulty = 1;
    $("#change").show();
    display()
    for (let i = 1; i != 10; i++) {
        $("#field0" + i).css("background-image", "url(Media/Kreuz.svg)");
        $("#field0" + i).animate({
            height: '50px',
            width: '50px',
            fontSize: '20px'
        }, 3000);
        $("#field0" + i).css("background-color", "blue");
        $("#field01").css("background-image", "none");
        $("#change").html('<button id="field11" onclick="next()" class="button row4">Frage Anzeigen</button>');
        $("input").hide("slow");
    }
    $("#field0" + difficulty).css("background-color", "black");

    $(".question").hide("slow");
}

function control() {


    if (answer == parseInt($("input").val())) {

        difficulty++;
        localStorage.setItem("MathQuizDifficulty", difficulty)
    }

    $(".question").hide("slow");
    $("input").hide("slow");
    $(".question").text(" ");
    $("input").val(" ");
    $("#change").html('<button id="field11" onclick="next()" class="button row4">Frage Anzeigen</button>');
    display();

}
function generateArithmetic() {
    //Range min1,max1,min2,max2,
    let rangeOrFinish = new Array(0, 0, 0, 0)
    switch (difficulty) {
        case 1: case 8: case 4:
            rangeOrFinish[0] = 1;
            rangeOrFinish[1] = 50;
            rangeOrFinish[2] = 1;
            rangeOrFinish[3] = 50;
            break;
        case 2:
            rangeOrFinish[0] = 1;
            rangeOrFinish[1] = 50;
            rangeOrFinish[2] = 51;
            rangeOrFinish[3] = 100;
            break;
        case 3: case 5: case 6: case 7:
            rangeOrFinish[0] = 1;
            rangeOrFinish[1] = 100;
            rangeOrFinish[2] = 1;
            rangeOrFinish[3] = 100;
            break;
        case 9:
            rangeOrFinish[0] = 2;
            rangeOrFinish[1] = 8;
            rangeOrFinish[2] = 2;
            rangeOrFinish[3] = 8;
    }
    return rangeOrFinish = random(rangeOrFinish);
}



function random(rangeArray) {
    let number1 = Math.floor(Math.random() * (rangeArray[1] - rangeArray[0])) + rangeArray[0];;
    let number2 = Math.floor(Math.random() * (rangeArray[3] - rangeArray[2])) + rangeArray[2];;
    return rangeOrFinish = new Array(number1, number2, 0, 0);
}
function next() {
    if (difficulty >= 10) {
        $(".question").show("slow");
        $(".question").text("Du bist Fertig! Bitte neues Spiel starten");
        $("input").hide("slow");
        $("#change").hide();

    }else{
    $("input").show("slow");
    $("#change").html('<button id="field11" onclick="control()" class="button row4">OK!</button>');
    let numbers = generateArithmetic();
    answer = createQuestion(numbers);
}
}
function createQuestion(number) {
    let text
    switch (difficulty) {
        case 1:
            text = number[0] + " + " + number[1] + " = ?";
            answer = number[0] + number[1];
            break;
        case 2:
            text = number[1] + " - " + number[0] + " = ?";
            answer = number[1] - number[0];
            break;
        case 3: case 5: case 6: case 7:
            text = number[0] + " x " + number[1] + " = ?";
            answer = number[0] * number[1];
            break;
        case 4:
            text = number[0] * number[1] + " / " + number[0] + " = ?";
            answer = number[1];
            break;
        case 8:
            text = "Was ist die Wurzel aus " + number[0] * number[0];
            answer = number[0];
            break;
        case 9:
            text = "Was ist die Potenz aus " + number[0] + " um " + Math.pow(number[0], number[1]) + " zu erhalten?";
            answer = number[1];
    }

    $(".question").show("slow");
    /*  let textArray = text.split("");
     $(".question").text("");
     for(let i = 0; 0<= textArray.length;i++){
         setTimeout(char4char(textArray[i]), 250)
     } */

    $(".question").text(text);
    console.log(answer);
    return answer;
}
/* function char4char(char){
    let text = $(".question").prop("innerText");
    $(".question").text(text+char);
} */

// Check the Difficulty vom LocalStorage or create it
function difficultyCheck() {
    if (localStorage.getItem("MathQuizDifficulty") == null) {
        localStorage.setItem("MathQuizDifficulty", 1);
    }
    return localStorage.getItem("MathQuizDifficulty")
}


//Show the Display

function display() {
    $("#field0" + difficulty).css("background-image", "none");
    $("#field0" + difficulty).css("background-color", "black");
    for (let i = 1; i != parseInt(difficulty); i++) {
        $("#field0" + i).css("background-image", "url(Media/Haken.svg)");
        $("#field0" + i).animate({
            height: '100px',
            width: '100px',
            fontSize: '50px'
        }, 3000);
        $("#field0" + i).css("background-color", "green")
    }
}