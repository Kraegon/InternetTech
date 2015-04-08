/*!
 *  v1.0
 *  By Julian G. West & Jelle Braat
 *  Script for a cookie minigame
 */

var canvas = document.getElementById("CookieCanvas");
var context = canvas.getContext("2d");
context.font = "48px serif";
context.fillStyle = "#ffffff";

var cookieImage = document.getElementById("cookieImg");
var grassImg = document.getElementById("grassImg");

var score = 0.0;

function CookieInvader(x, y, cookImg) {
    this.xx = x;
    this.yy = y;
    this.velocity = 0;
    this.force = (Math.random() * 0.5) + 1;
    this.acceleration = (Math.random() * 1.0);
    this.cookieImg = cookImg;
    this.cookieScore = 50.0;
}
CookieInvader.prototype = {
    renderCookie: function() {
        context.drawImage(this.cookieImg, this.xx, this.yy, this.cookieImg.width, cookieImg.height);
    },
    physicCookie: function() {
        this.velocity += this.acceleration;
        this.yy += this.velocity;
        if (this.yy > 335) {
            this.velocity = -(this.velocity / this.force) + 1;
            this.yy = 335;
            this.cookieScore -= 10.0;
        }
    },
    
    isCollisionCookie: function(x, y) {
        return (this.xx < x && (this.xx + this.cookieImg.width) > x && this.yy < y && (this.yy + this.cookieImg.height > y)) ? true : false;
    },
    isAlive: function() {
        return (this.cookieScore >= 5) ? true : false;
    },
    explosion: function() {
        //TODO make cook 2d animation explostion
    }
}

var cookieInvaderList = [new CookieInvader(50, 50, cookieImage)];

for (var i = 0; i < 10; ++i) {
    cookieInvaderList.push(new CookieInvader((Math.random() * canvas.width) + 1, (Math.random() * 50) + 1, cookieImage))
}
canvas.addEventListener("mousedown", getPosition, false);

function getPosition(event) {
    var xMouse = event.pageX - canvas.offsetLeft;
    var yMouse = event.pageY - canvas.offsetTop;
    for (var i = 0; i < cookieInvaderList.length; ++i) {
        if (cookieInvaderList[i].isCollisionCookie(xMouse, yMouse)) {
            score += cookieInvaderList[i].cookieScore;
            cookieInvaderList.splice(i, 1);
            cookieInvaderList.push(new CookieInvader((Math.random() * 750) + 1, 50, cookieImage));
        }

    }
}

function renderAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < cookieInvaderList.length; ++i) {
        cookieInvaderList[i].renderCookie();
    }
    context.drawImage(grassImg, 0, 370, grassImg.width, cookieImg.height);
    context.fillText("Score: " + score, 10, 50);
}

function idleAll() {
    for (var i = 0; i < cookieInvaderList.length; ++i) {
        cookieInvaderList[i].physicCookie();
        if (!cookieInvaderList[i].isAlive()) {
            cookieInvaderList.splice(i, 1);
            cookieInvaderList.push(new CookieInvader((Math.random() * 750) + 1, 50, cookieImage));
            if (score <= 0) {
                score = 0;
            } else {
                score -= 10;
            }
        }
    }
}

function gameLoop() {
    renderAll();
    idleAll();
}
setInterval(gameLoop, 38.0);
