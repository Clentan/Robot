// Define the background colors using an enum
enum Trafficlight {
    Red = "#f44336",
    Yellow = "#ffeb3b",
    Green = "#4caf50",
    Off = "#808080"
  }
  

  function changeRobotColor(robot: HTMLElement, color: keyof typeof Trafficlight): void {
    robot.style.backgroundColor = Trafficlight[color];
    robot.style.transition = "background-color 2s ease";
  }
  

  const redRobot = document.querySelector(".Red.robot") as HTMLElement;
  const yellowRobot = document.querySelector(".yellow.robot") as HTMLElement;
  const greenRobot = document.querySelector(".Green.robot") as HTMLElement;
  

  function changeColors(): void {
    const colorOrder: (keyof typeof Trafficlight)[] = ["Red", "Yellow", "Green"];
    let currentIndex = 0;
  
    setInterval(() => {
      const currentColor = colorOrder[currentIndex];
  
      if (currentColor === "Red") {
        changeRobotColor(yellowRobot, "Off");
        changeRobotColor(greenRobot, "Off");
      } else if (currentColor === "Yellow") {
        changeRobotColor(redRobot, "Off");
        changeRobotColor(greenRobot, "Off");
      } else if (currentColor === "Green") {
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