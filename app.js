// Selccting all Reuired elements

const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');

window.onload = ()=>{ //once window loaded
    for(let i = 0; i < allBox.length ; i++){ // add onclick attribute to all available section's span
        allBox[i].setAttribute("onclick", "clickedBox(this)")
    }

    selectXBtn.onclick = ()=>{
        selectBox.classList.add("hide");// its hide select box when i click in X
        playBoard.classList.add("show");// its Show Play box when i click in X
    
    }
    selectOBtn.onclick = ()=>{
        selectBox.classList.add("hide");// its hide select box When i click in O
        playBoard.classList.add("show");// its Show Play box when i click in O
        players.setAttribute("class", "players active player")//adding three class to players 
    }
}
let playerXIcon = "fas fa-times";// class of font awsome for cross icon
let playerOIcon = "far fa-circle";// class of font awsome for circle icon

function clickedBox(element){
    if(players.classList.contains("player")){// if players contain the class player
        element.innerHTML = `<i class="${playerOIcon}"></i>`//adding icons to insiode the element when user click
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`//adding icons to insiode the element when user click
    }
}