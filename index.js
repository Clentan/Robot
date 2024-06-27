// Define the background colors using an enum
var Trafficlight;
(function (Trafficlight) {
    Trafficlight["Red"] = "#f44336";
    Trafficlight["Yellow"] = "#ffeb3b";
    Trafficlight["Green"] = "#4caf50";
    Trafficlight["Off"] = "#808080";
})(Trafficlight || (Trafficlight = {}));
// Function to change the robot's background color
function changeRobotColor(robot, color) {
    robot.style.backgroundColor = Trafficlight[color];
    robot.style.transition = "background-color 2s ease";
}
// Get the robot elements
var redRobot = document.querySelector(".Red.robot");
var yellowRobot = document.querySelector(".yellow.robot");
var greenRobot = document.querySelector(".Green.robot");
// Function to change the robot colors
function changeColors() {
    var colorOrder = ["Red", "Yellow", "Green"];
    var currentIndex = 0;
    setInterval(function () {
        var currentColor = colorOrder[currentIndex];
        if (currentColor === "Red") {
            changeRobotColor(yellowRobot, "Off");
            changeRobotColor(greenRobot, "Off");
        }
        else if (currentColor === "Yellow") {
            changeRobotColor(redRobot, "Off");
            changeRobotColor(greenRobot, "Off");
        }
        else if (currentColor === "Green") {
            changeRobotColor(redRobot, "Off");
            changeRobotColor(yellowRobot, "Off");
        }
        changeRobotColor(redRobot, currentColor === "Red" ? currentColor : "Off");
        changeRobotColor(yellowRobot, currentColor === "Yellow" ? currentColor : "Off");
        changeRobotColor(greenRobot, currentColor === "Green" ? currentColor : "Off");
        currentIndex = (currentIndex + 1) % colorOrder.length;
    }, 10000);
}
changeColors();
