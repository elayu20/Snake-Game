let body = ["box-97"];
let head = body[0];
let justAteApple = false;
let tail;
let lengthIndex = 0;
const container = document.getElementById("container");
let gameInterval; // To prevent stacking of interval times
const boxCount = 289;
let currentDirection;
let appleBox;
let gameOver = false;

// Create 100 box objects
// Each object will have an id #box-"number" from 0-99
for (let i = 0; i < boxCount; i++) {
    let boxObj = document.createElement("div"); // Creates the element for the box which is a div
    boxObj.className = "box";
    boxObj.id = "box-" + i;
    container.appendChild(boxObj);
}

function isOuterBorder(boxNum) {
    // Top row (0-16)
    if (boxNum <= 16) return true;
    // Bottom row (272-288)
    if (boxNum >= 272 && boxNum <= 288) return true;
    // Left side (multiples of 17)
    if (boxNum % 17 === 0) return true;
    // Right side (starts at 16, then adds 17 each time)
    if ((boxNum - 16) % 17 === 0 && boxNum >= 16) return true;
    
    return false;
}

// Color the outer border blue
for (let i = 0; i < boxCount; i++) {
    
    if (isOuterBorder(i)) {
        document.getElementById("box-" + i).style.backgroundColor = "blue";
    } else {
        document.getElementById("box-" + i).style.backgroundColor = "white";
    }
}

// Sets the snake to start near center
document.getElementById("box-97").style.backgroundColor = "rgb(0, 255, 0)";

// Random number from min to max
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Gets random position that's not on border
function getRandomInnerPosition() {
    let randomNum;
    do {
        randomNum = getRandomIntInclusive(0, 288);
    } while (isOuterBorder(randomNum));
    return randomNum;
}

// Places first apple
let randomNum = getRandomInnerPosition(0, 288);
appleBox = "box-" + randomNum;
document.getElementById(appleBox).style.backgroundColor = "rgb(255, 0, 0)";

function moveBody() {
    let headIDNum; 
    let previousHead;
    previousHead = document.getElementById(head); // Stores as variable to pass as argument to didSnakeEatApple

    // Set the last element of body[] to white background color
    document.getElementById(body[lengthIndex]).style.backgroundColor = "rgb(255, 255, 255)";

    // Moving up
    if (currentDirection === "ArrowUp") {
        // body[] starts as an id, head also an id (body[0])

        // Gets the number of head's id
        headIDNum = parseInt(head.split("-")[1]);

        // In order from right side of array to left side of array, set each element to its left-most elements's DOM
        for (let i = lengthIndex; i > 0; i--) {
            body[i] = document.getElementById(body[i - 1]); 
        }
        head = "box-" + (headIDNum - Math.sqrt(boxCount)); // head will take care of which direction to go to, head stays as an id
        body[0] = head; // The first element of array is head, so have to set that element as well to new value of head

        headIDNum = parseInt(head.split("-")[1]);
        if (isOuterBorder(headIDNum)) {
            console.log("Game over");
            gameOver = true;
            clearInterval(gameInterval);
            window.location.href = "gameOver.html";
            return;
        }
        else {
            // Order doesn't matter, but for readability, order from right side of array to left side (including head) to change background color of box
            for (let i = lengthIndex; i > 0; i--) {
                body[i].style.backgroundColor = "rgb(0, 255, 0)";
            }
            document.getElementById(head).style.backgroundColor = "rgb(0, 255, 0)";

            // Resets elements in array from DOM to id
            for (let i = lengthIndex; i > 0; i--) {
                body[i] = body[i].id;
            }
        }

    }
    // Moving down
    else if (currentDirection === "ArrowDown") {
        // body[1] and body[2] starts as an id, head also an id (body[0])

        // Gets the number of head's id
        headIDNum = parseInt(head.split("-")[1]);

        // In order from right side of array to left side of array, set each element to its left-most elements's DOM
        for (let i = lengthIndex; i > 0; i--) {
            body[i] = document.getElementById(body[i - 1]);
        }
        head = "box-" + (headIDNum + Math.sqrt(boxCount)); // head will take care of which direction to go to
        body[0] = head; // The first element of array is head, so have to set that element as well to new value of head

        headIDNum = parseInt(head.split("-")[1]);
        if (isOuterBorder(headIDNum)) {
            console.log("Game over");
            gameOver = true;
            clearInterval(gameInterval);
            window.location.href = "gameOver.html";
            return;
        }
        else {
            // Order doesn't matter, but for readability, order from right side of array to left side (including head) to change background color of box
            for (let i = lengthIndex; i > 0; i--) {
                body[i].style.backgroundColor = "rgb(0, 255, 0)";
            }
            document.getElementById(head).style.backgroundColor = "rgb(0, 255, 0)";

            // Resets elements in array from DOM to id
            for (let i = lengthIndex; i > 0; i--) {
                body[i] = body[i].id;
            }
        }

    }
    // Move Left
    else if (currentDirection === "ArrowLeft") {
        // body[1] and body[2] starts as an id, head also an id (body[0])

        // Gets the number of head's id
        headIDNum = parseInt(head.split("-")[1]);

        // In order from right side of array to left side of array, set each element to its left-most elements's DOM
        for (let i = lengthIndex; i > 0; i--) {
            body[i] = document.getElementById(body[i - 1]);
        }
        head = "box-" + (headIDNum - 1); // head will take care of which direction to go to
        body[0] = head; // The first element of array is head, so have to set that element as well to new value of head

        headIDNum = parseInt(head.split("-")[1]);
        if (isOuterBorder(headIDNum)) {
            console.log("Game over");
            gameOver = true;
            clearInterval(gameInterval);
            window.location.href = "gameOver.html";
            return;
        }
        else {
            // Order doesn't matter, but for readability, order from right side of array to left side (including head) to change background color of box
            for (let i = lengthIndex; i > 0; i--) {
                body[i].style.backgroundColor = "rgb(0, 255, 0)";
            }
            document.getElementById(head).style.backgroundColor = "rgb(0, 255, 0)";

            // Resets elements in array from DOM to id
            for (let i = lengthIndex; i > 0; i--) {
                body[i] = body[i].id;
            }
        }

    }
    // Move Right
    else if (currentDirection === "ArrowRight") {
        // body[1] and body[2] starts as an id, head also an id (body[0])

        // Gets the number of head's id
        headIDNum = parseInt(head.split("-")[1]);

        // In order from right side of array to left side of array, set each element to its left-most elements's DOM
        for (let i = lengthIndex; i > 0; i--) {
            body[i] = document.getElementById(body[i - 1]);
        }
        head = "box-" + (headIDNum + 1); // head will take care of which direction to go to
        body[0] = head; // The first element of array is head, so have to set that element as well to new value of head

        headIDNum = parseInt(head.split("-")[1]);
        if (isOuterBorder(headIDNum)) {
            console.log("Game over");
            gameOver = true;
            clearInterval(gameInterval);
            window.location.href = "gameOver.html";
            return;
        }
        else {
            // Order doesn't matter, but for readability, order from right side of array to left side (including head) to change background color of box
            for (let i = lengthIndex; i > 0; i--) {
                body[i].style.backgroundColor = "rgb(0, 255, 0)";
            }
            document.getElementById(head).style.backgroundColor = "rgb(0, 255, 0)";

            // Resets elements in array from DOM to id
            for (let i = lengthIndex; i > 0; i--) {
                body[i] = body[i].id;
            }
        }

    }

    if (!gameOver) {
        didSnakeEatApple(previousHead);
    }

}
 
// When the head(color green) collides with apple (color red), push that box to array of snake body
// Randomly replace apple
function didSnakeEatApple(oldHead) {
    if (head === appleBox) {
        justAteApple = true;
        body.push(oldHead.id);
        lengthIndex++;
        console.log("body array: " + body + " " + "length: " + lengthIndex);
        document.getElementById(body[lengthIndex]).style.backgroundColor = "rgb(0, 255, 0)";
        randomNum = getRandomInnerPosition(0, 288);
        appleBox = "box-" + randomNum;
        document.getElementById(appleBox).style.backgroundColor = "rgb(255, 0, 0)";
    }
}

// Turning with arrow key functionality
document.addEventListener("keydown", (event) => {

    if (event.key != currentDirection) { // To stop holding down key to speed up
        if (!(currentDirection === "ArrowUp" && event.key === "ArrowDown" || currentDirection === "ArrowDown" && event.key === "ArrowDown" || currentDirection === "ArrowLeft" && event.key === "ArrowRight" || currentDirection === "ArrowRight" && event.key === "ArrowLeft") )
        currentDirection = event.key;
        moveBody(); // Instant move in new direction

        clearInterval(gameInterval); // Stop stacking of time speed
        gameInterval = setInterval(moveBody, 100);
    }
});