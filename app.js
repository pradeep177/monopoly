var board = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const button1 = document.getElementById("button-1");
const button2 = document.getElementById("button-2");

//const box1 = document.getElementById('box1');
//black



// var src = document.getElementById("box1");
 
// src.appendChild(img);

//brown 
var img = document.createElement("img");
 
img.src = "brown.jpg";
img.width="30";
img.height="44";


var src = document.getElementById("box1");
 
src.appendChild(img);








class Player{
    constructor(name,position,money){
        this.name = name;
        this.position = position;
        this.money = money;
    }
    createImage(pos){
        var img = document.createElement("img");
        img.src = "black.jpg";
        img.width="30";
        img.height="22";
        var src = document.getElementById(`box${pos}`);
        src.appendChild(img);
    }
    rollDice(){
        var pos = Math.ceil(Math.random() * 6);
        console.log(pos);
        
        this.changePosition(this.position,pos);
    }
    changePosition(oldPos,currentPos){
        var newPos = oldPos + currentPos;
        this.createImage(newPos)
        this.position = newPos;
        console.log(this.position);
        this.updateMoney()
    }
    updateMoney(){
        this.position %= 16;
        var updatedMoney = this.money - board[this.position];
        this.money = updatedMoney;
        console.log(updatedMoney);
    }

}

var player1 = new Player("pradeep",0,1000);
var player2 = new Player("rohit",0,1000);

button1.addEventListener('click',function(){
    player1.rollDice()
},false);

button2.addEventListener('click',function(){
    player2.rollDice()
},false);



// function rollDice()
// {
//     var position = Math.ceil(Math.random() * 6);
//     console.log(position);
//     changePosition(player1[1],position);
    
// }
// function changePosition(oldPos,currentPos)
// {
//     var newPos = oldPos + currentPos;
//     player1[1] = newPos;
//     console.log(newPos);
//     updateMoney(player1[1],board)
// }
// function updateMoney(p1, amount)
// {
//     p1 = p1 % 16;
//     var updatedMoney = player1[2] - amount[p1 - 1];
//     player1[2] = updatedMoney;
//     console.log(updatedMoney);

// }
