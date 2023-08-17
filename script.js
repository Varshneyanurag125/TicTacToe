console.log("hello");

let winnersOld;
if(localStorage.getItem("winners")){
    winnersOld = localStorage.getItem("winners");
}
const winSet = new Set([
    ["Anurag", 20],
    ["arnav", 10]
]);
const tiles = document.querySelectorAll(".gameTile");
const winPanel = document.querySelector(".winPanel");
const leaderboard = document.querySelector(".leaderboard");

let playerTurn = 0;
let array = [[0,0,0],[0,0,0],[0,0,0]];

console.log(tiles);
tiles.forEach((item) => {
    item.addEventListener("click", (e) => {
        const row = e.currentTarget.getAttribute("row") * 1;
        const column = e.currentTarget.getAttribute("column") * 1;
         if(array[row][column] == 0){
            if(playerTurn == 0){
                array[row][column] = 1;
                e.currentTarget.childNodes[1].src = "./x.png"
                e.currentTarget.childNodes[1].classList.remove("notClicked");
            }
            else{
                array[row][column]= -1
                e.currentTarget.childNodes[1].src = "./o.png"
                e.currentTarget.childNodes[1].classList.remove("notClicked");
            }
        }
        if(winCondition(array)) {
            winPanel.classList.remove("hide");
            document.querySelector(".player").innerHTML = `Player ${playerTurn + 1}`;
            console.log(playerTurn + 1, "wins");
        }
        playerTurn = !playerTurn;
    });
})

function winCondition(array){
    let win = false;
    
    array.forEach((item) => {
        let sum = 0;
        item.forEach((a) =>{
            sum += a;
        });
        if(Math.abs(sum) == 3){
            win = true;
            console.log("Us")
        }else{
            sum = 0;
        }
    })
    if(win) return win;
    
    let sum2 = 0;

    for(let i = 0;i <=2;i++){
        for(let j = 0;j <= 2;j++){
          sum2 +=  array[j][i]
        }
        if(Math.abs(sum2) == 3){
            win = true;
            console.log("we")
        }
        else{
            win == false;
        }
        console.log(sum2)
        sum2 = 0
    }
    if(Math.abs(array[0][0] + array[1][1]+ array[2][2]) == 3 ){  
        console.log("I");
        win = true;
    }
    if(Math.abs(array[2][0] + array[1][1] + array[0][2]) == 3) {
        console.log("he");
        win = true;
    }
    return win;    
}


console.log(winCondition([[0,1,0],[-1,1,0],[0,0,0]]));