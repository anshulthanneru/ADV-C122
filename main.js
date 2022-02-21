function setup() {
    canvas = createCanvas(900, 600);
}

x = 0;
y = 0;
drawCircle = "";
drawRectangle = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "system is listening";
    recognition.start();
}

recognition.onresult() = function (action) {
    console.log(action);
    var content = action.results[0][0].transcript;
    console.log(content);
    if (content == 'Circle') {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML="circle is being drawn";
        drawCircle = 'set';
    }
    if (content == 'Rectangle') {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById('status').innerHTML="rectangle is being drawn";
        drawRectangle = 'set';
    }
}

function draw() {
    if (drawCircle == 'set') {
        Circle(x,y,75);
        document.getElementById('status').innerHTML="circle is drawn";
        drawCircle = "";
    }
    if (drawRectangle == 'set') {
        Rect(x,y,75,25);
        document.getElementById('status').innerHTML="rectangle is drawn";
        drawRectangle = "";
    }
}