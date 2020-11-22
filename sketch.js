var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    var dbref = database.ref("ball/position");
    dbref.on("value",readvalue,showerror);


}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;

    var dbref = database.ref("ball/position");
     dbref.update({x:ball.x+x,
    y:ball.y+y})
}


function readvalue(data){

position =  data.val();
ball.x = position.x;
ball.y = position.y;

};

function showerror(){
  console.log("error in database");  
}

