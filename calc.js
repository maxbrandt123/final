//Function to be called upon button click
function calculate() {
    //gets number of points from the user input for player 1
    var pointsInput = document.getElementById('points').value;

    //gets number of assists from the user input for player 1
    var assistsInput = document.getElementById('assists').value;

    //gets number of steals from the user input for player 1
    var stealsInput = document.getElementById('steals').value;

    ////gets number of turnovers from the user input for player 1
    var turnoversInput = document.getElementById('turnovers').value;

    //calculates the grade for player one, weighting each stat differently
    var grade = ((parseFloat(pointsInput) * 3) + (parseFloat(assistsInput) * 3) + (parseFloat(stealsInput) * 7) - (parseFloat(turnoversInput) * 6));


    //gets number of points from the user input for player 2
    var pointsInput2 = document.getElementById('points2').value;

    //gets number of assists from the user input for player 2
    var assistsInput2 = document.getElementById('assists2').value;

    //gets number of steals from the user input for player 2
    var stealsInput2 = document.getElementById('steals2').value;

    //gets number of turnovers from the user input for player 2
    var turnoversInput2 = document.getElementById('turnovers2').value;

    //calculates the grade for player one, weighting each stat differently
    var grade2 = ((parseFloat(pointsInput2) * 3) + (parseFloat(assistsInput2) * 3) + (parseFloat(stealsInput2) * 7) - (parseFloat(turnoversInput2) * 6));

    //puts the scores for both players in te scores cell of the table
    document.getElementById("p1").innerHTML = grade;
    document.getElementById("p2").innerHTML = grade2;

    }
