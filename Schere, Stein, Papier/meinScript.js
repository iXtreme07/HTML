let round = 1;
let maxRounds = 0;
let humanChosen;
let computerChosen;
let pointsComputer = 0;
let pointsHuamn = 0;
let winnerStatus;
let rundenZahlVisible = '<div class="row"><p class="margin">Rundenanzahl?</p><input type="number" name="rounds" id="rounds"><button class="margin" onclick="rundenAuswerten()">OK</button></div>'
let rundenZahlUnVisible = '<button onclick="reset()" class="margin">Reset</button>'
let imgComputerSchere = "media/computerSchere.svg";
let imgComputerStein = "media/computerStein.svg";
let imgComputerPapier = "media/computerPapier.svg";

/*
00 = Schere
01 = Stein
02 = Papier
*/

//der benutzer wählt aus
function schere() {
    humanChosen = 0;
    computer();
}
function stein() {
    humanChosen = 1;
    computer();
}
function papier() {
    humanChosen = 2;
    computer();
}
//der computer wählt aus
function computer() {
    computerChosen = Math.floor(Math.random() * 3);
    switch (computerChosen) {
        case 0: document.getElementById("computerImage").src = imgComputerSchere;
            break;
        case 1: document.getElementById("computerImage").src = imgComputerStein;
            break;
        case 2: document.getElementById("computerImage").src = imgComputerPapier;
            break;
    }
    auswertung()
}

function rundenAuswerten() {
    maxRounds = parseInt(document.getElementById("rounds").value)
    if (maxRounds < 0 || isNaN(maxRounds)) {
        maxRounds = 0;
    }
    console.log(maxRounds)
    aktualisierung();
}

function aktualisierung() {
    if (maxRounds == 0) {
        document.getElementById("aktuellRunden").innerText = ""

    } else if (maxRounds >= round) {
        document.getElementById("aktuellRunden").innerText = "Runde " + round + " von " + maxRounds
    }
    else if (maxRounds + 1 == round) {
        document.getElementById("aktuellRunden").innerText = "Finish"
    }
    if (round > 1) {
        document.getElementById("points").innerText = "Punktestand: " + pointsHuamn + " : " + pointsComputer
    } else { document.getElementById("points").innerText = "" }

    if (maxRounds == 0 && round == 1) {
        document.getElementById("roundVisible").innerHTML = rundenZahlVisible
        
    } else {
        document.getElementById("roundVisible").innerHTML = rundenZahlUnVisible
    }
}
function reset() {
    round = 1;
    maxRounds = 0;
    humanChosen;
    computerChosen;
    pointsComputer = 0;
    pointsHuamn = 0;
    document.getElementById("aktuellRunden").innerText = ""
    document.getElementById("points").innerText = ""
    document.getElementById("computerImage").src = "media/computer.svg";
    document.getElementById("imgSchere").classList = "shake ";
    document.getElementById("imgStein").classList = "shake ";
    document.getElementById("imgPapier").classList = "shake ";
    document.getElementById("imgGleichstand").classList = "shake unvisible";
    document.getElementById("imgVerlierer").classList = "shake unvisible";
    document.getElementById("imgGewinner").classList = "shake unvisible";
    document.getElementById("aktuellRunden").innerText = ""
    document.getElementById("ueberschrift").innerText = "Schere - Stein - Papier"
    aktualisierung();
}

function ende() {
    if (pointsComputer == pointsHuamn) {//Gleichstand
        document.getElementById("imgSchere").classList = "shake unvisible";
        document.getElementById("imgStein").classList = "shake unvisible";
        document.getElementById("imgPapier").classList = "shake unvisible";
        document.getElementById("imgGleichstand").classList = "shake";
        document.getElementById("imgVerlierer").classList = "shake unvisible";
        document.getElementById("imgGewinner").classList = "shake unvisible";
        document.getElementById("ueberschrift").innerText = "GLEICHSTAND"
    } else if (pointsComputer < pointsHuamn) {//Gewonnen
        document.getElementById("imgSchere").classList = "shake unvisible";
        document.getElementById("imgStein").classList = "shake unvisible";
        document.getElementById("imgPapier").classList = "shake unvisible";
        document.getElementById("imgGleichstand").classList = "shake unvisible";
        document.getElementById("imgVerlierer").classList = "shake unvisible";
        document.getElementById("imgGewinner").classList = "shake";
        document.getElementById("ueberschrift").innerText = "Absoluter GEWINNER"
    } else { //verloren
        document.getElementById("imgSchere").classList = "shake unvisible";
        document.getElementById("imgStein").classList = "shake unvisible";
        document.getElementById("imgPapier").classList = "shake unvisible";
        document.getElementById("imgGleichstand").classList = "shake unvisible";
        document.getElementById("imgVerlierer").classList = "shake ";
        document.getElementById("imgGewinner").classList = "shake unvisible";
        document.getElementById("ueberschrift").innerText = "L wie LOOSER"
    }
}
function auswertung() {
    if (humanChosen == 0) {
        if (computerChosen == 0) {
            winnerStatus = 1;
        } else if (computerChosen == 1) {
            winnerStatus = 0;
        } else {
            winnerStatus = 2;
        }
    }
    else if (humanChosen == 1) {
        if (computerChosen == 0) {
            winnerStatus = 2;
        } else if (computerChosen == 1) {
            winnerStatus = 1;
        } else {
            winnerStatus = 0;
        }
    } else {
        if (computerChosen == 0) {
            winnerStatus = 0;
        } else if (computerChosen == 1) {
            winnerStatus = 2;
        } else {
            winnerStatus = 1;
        }
    }
    console.log(humanChosen + " " + computerChosen)
    console.log(winnerStatus)

    if (winnerStatus == 0) {
        //verloren
        pointsComputer++;
        document.getElementById("ueberschrift").innerText = "Runde leider VERLOREN"
    } else if (winnerStatus == 1) {
        //gleichstand
        document.getElementById("ueberschrift").innerText = "Gleichstand"
    } else {
        //gewonnen
        document.getElementById("ueberschrift").innerText = "Runde GEWONNEN"
        pointsHuamn++;
    }
    if (maxRounds != 0) {
        if (maxRounds == round) {
            ende();
        }
    }
    round++;
    aktualisierung()
}




