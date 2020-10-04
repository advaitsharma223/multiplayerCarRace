var canvas, backgroundImg;
var database;
var gameState = 0
var playerCount;
var allPlayers;
var form, game, player;
var car1, car2, car3, car4, cars;
var track;
var car1_image, car2_image, car3_image, car4_image;


function preload() {

    car1_image = loadImage("/multiplayerCarRace/images/car1.png");
    car2_image = loadImage("/multiplayerCarRace/images/car1.png");
    car3_image = loadImage("/multiplayerCarRace/images/car1.png");
    car4_image = loadImage("/multiplayerCarRace/images/car1.png");

    track = loadImage("/Advaitmulticarracing/images/track.jpg");
}

function setup() {

    canvas = createCanvas(displayWidth-20, displayHeight-30);

    database = firebase.database();
    //console.log(database);

    game = new Game();
    game.getState();
    game.start();
}

function draw() {

    if(playerCount === 4) {

        game.update(1);
    }

    if(gameState === 1) {

        clear();
        game.play();
    }

    if(gameState === 2) {

        game.end();
    }
}
