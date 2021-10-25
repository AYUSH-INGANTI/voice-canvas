x = 0;
y = 0;

screen_width = window.innerWidth;
screen_height = window.innerHeight;

apple = "";

draw_apple = "";

var speak_data = "";
var toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
    apple = loadImage("apple.png");
}

function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;

    to_number = Number(content);

    if (number.isInteger(to_number)) {
        draw_apple = "set";
    } else {
        document.getElementById("status").innerHTML = "The speech has not recognized a number";
    }

}

function setup() {
    canvas = createCanvas(screen_width - 150, screen_height - 150);
    canvas.position(0, 150);
}

function draw() {
    var i = 1;
    if (draw_apple == "set") {
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";
        for(var i = 1; i <= to_number; i++) {
            x = Math.floor(math.random() * 700);
            y = Math.floor(math.random() * 400);

            image(apple, x, y, 20, 20);
            document.getElementById("status").innerHTML = "Apple drawn";
        }
    }
}

function speak() {
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}