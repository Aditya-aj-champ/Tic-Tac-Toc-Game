let btn = document.querySelectorAll(".btnbox");
let resetbtn = document.querySelector("#reset");
let newGamebtn= document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;


// 2D Array of all possible wining value
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turn0 = true;
    enableBoxes();
    msgcontainer.classList.add ("hide");


}

btn.forEach((btnbox) => {
    btnbox.addEventListener("click",()=>{
        console.log("box click");
        if(turn0 === true){
            btnbox.innerText ="O";
            turn0 = false;
        }else{
            btnbox.innerText ="X";
            turn0 = true;
        }
        btnbox.disabled = true;
        cheekWinner();
    });
    
});

const disableBoxes = () =>{
    for (let btns of btn)
    {
        btns.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let btns of btn)
    {
        btns.disabled = false;
        btns.innerText = "";
    }
};


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const cheekWinner = () =>{
    for(let pattern of winPattern){
        let pos1val = btn[pattern[0]].innerText;
        let pos2val = btn[pattern[1]].innerText;
        let pos3val = btn[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
        
    }
};

newGamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);