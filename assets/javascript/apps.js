

window.onload = function() {

    $("#start").on("click", timer.start);
    $("#start").on("click", display);

    
  };

var interval;
var clockRunning = false;
var correct = 0;
var incorrect = 0;

// audio files
var horn = new Audio("assets/sounds/horn.mp3");
var buzzer = new Audio("assets/sounds/buzzer.mp3");


//questions
var questions = [
     {
        q: "What team was Tracy McGrady drafted by?",
        a1: "Orlando Magic",
        a2: "Toronto Raptors",
        a3: "Houston Rockets",
        a4: "Atlanta Hawks",
    },
     {
        q: "After 11 years with the Philadephia 76ers, Allen Iverson was traded to which team?",
        a1: "Detroit Pistons",
        a2: "Memphis Grizzlies",
        a3: "Portland Trailblazers",
        a4: "Denver Nuggets",
    },
     {
        q: "During the Lakers three-peat in the early 2000's, which of these Eastern Conference teams did they not defeat in the Finals?",
        a1: "Philadelphia 76ers",
        a2: "Indiana Pacers",
        a3: "Detroit Pistons",
        a4: "New Jersey Nets",
    },
     {
        q: "Which year did Kobe Bryant win his first and only MVP?",
        a1: "2005",
        a2: "2006",
        a3: "2007",
        a4: "2008",
    },
     {
        q: "Who was the 2006 Finals MVP?",
        a1: "Paul Pierce",
        a2: "Tim Duncan",
        a3: "Dwyane Wade",
        a4: "Tony Parker",
    },
     {
        q: "Which of these players won 4 Defensive Player of the Year awards during the 2000's?",
        a1: "Ron Artest",
        a2: "Ben Wallace",
        a3: "Dikembe Mutombo",
        a4: "Dwight Howard",
    },
     {
        q: "Which of these players was NOT a first overall pick in the draft?",
        a1: "Kevin Durant",
        a2: "Andrea Bargnani",
        a3: "Andrew Bogut",
        a4: "Yao Ming",
    },
     {
        q: "Steve Francis was traded to which team in 2004?",
        a1: "New York Knicks",
        a2: "Dallas Mavericks",
        a3: "Memphis Grizzlies",
        a4: "Orlando Magic"

    },
    {
        q: "Who was the 2004 MVP?",
        a1: "Tim Duncan",
        a2: "Dirk Nowitzki",
        a3: "Steve Nash",
        a4: "Kevin Garnett",
    },
    {
        q: "Which of these teams were NOT in the 2006 playoffs?",
        a1: "Golden State Warriors",
        a2: "Denver Nuggets",
        a3: "Los Angeles Clippers",
        a4: "Miluakee Bucks",
    },
    {
        q: "Who was the 2007 NBA Rookie of the Year?",
        a1: "Kevin Durant",
        a2: "Brandon Roy",
        a3: "Chris Paul",
        a4: "Derrick Rose",
    }
]



//main timer
var timer = {

 time: 15,
 num: 0,

 

 count: function () {
    timer.time--;
    $("#remaining").html(timer.time);
    if (timer.time == 0) {
        timer.time = 15;
        timer.num++;
        score();
        $("#pic").attr("src", "assets/images/" + timer.num + ".jpg")
        $("#question").html(questions[timer.num].q);
        $("#a1").html(questions[timer.num].a1);
        $("#a2").html(questions[timer.num].a2);
        $("#a3").html(questions[timer.num].a3);
        $("#a4").html(questions[timer.num].a4);        
    }
},

 start: function() {

    //  TODO: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      interval = setInterval(timer.count, 1000);
      clockRunning = true;
        } 
    },
    
};






// display the first question
var display = function () {
    $("#pic").attr("src", "assets/images/tmac.jpg")
    $("#question").html(questions[0].q);
    $("#a1").html(questions[0].a1);
    $("#a2").html(questions[0].a2);
    $("#a3").html(questions[0].a3);
    $("#a4").html(questions[0].a4);
    horn.play();


};


// functions to determine whether the answer clicked is correct or incorrect
$("#a1").on("click", function() {
    if ((timer.num == 1) || (timer.num == 6) || (timer.num == 9)) {
        correct++;
        timer.time = 1;
    } else {
        incorrect++;
        timer.time = 1;
    }
})
$("#a2").on("click", function() {
    if ((timer.num == 0) || (timer.num == 5) || (timer.num == 10)) {
        correct++;
        timer.time = 1;
    } else {
        incorrect++;
        timer.time = 1;
    }
})
$("#a3").on("click", function() {
    if ((timer.num == 2) || (timer.num == 4)) {
        correct++;
        timer.time = 1;
    } else {
        incorrect++;
        timer.time = 1;
    }
})
$("#a4").on("click", function() {
    if ((timer.num == 3) || (timer.num == 7) || (timer.num ==8)){
        correct++;
        timer.time = 1;
    } else {
        incorrect++;
        timer.time = 1;
    }
});

//loads the score on the screen
var score = function() {
    if (timer.num == 11) {
        clearInterval(interval, 0);
        var unAnswered = 11 - correct - incorrect;
        $("#score").html("<h2> Correct: " + correct + "</h2> <h2> Incorrect: " + incorrect + "</h2> <h2> Unanswered: " + unAnswered + "</h2>")
        buzzer.load();
        buzzer.play();
    }
}









