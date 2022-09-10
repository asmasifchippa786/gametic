// Selccting all Reuired elements

const selectBox = document.querySelector('.select-box'),
selectXBtn = selectBox.querySelector('.playerX'),
selectOBtn = selectBox.querySelector('.playerO'),
playBoard = document.querySelector('.play-board'),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players'),
rsultBox = document.querySelector('.result-box'),
wonText = rsultBox.querySelector('.won-text'),
replayBtn = rsultBox.querySelector('button');

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
let playerSign = "X"; //suppose player will be X
let runBot = true;

// user click function
function clickedBox(element){
    // console.log(element)
    if(players.classList.contains("player")){// if players contain the class player
        element.innerHTML = `<i class="${playerOIcon}"></i>`//adding icons to insiode the element when user click
        players.classList.add("active");
        // if palyer select O then well cahange the Player sign Value to O
        playerSign = "O";
        element.setAttribute("id" , playerSign)
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`//adding icons to insiode the element when user click
        players.classList.add("active");
        element.setAttribute("id" , playerSign)
    }
    selectWinner()
    playBoard.style.pointerEvents = "none";
    element.style.pointerEvents = "none"; // give the style of pointer events and if user click ones again dont run    
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed(); // get random delay time of insertuing O or X icon
    // console.log(randomDelayTime)
    setTimeout(() => {
        bot(runBot);// cal bot function
    }, randomDelayTime)// set time out for delay
}

// bot click function
function bot(runBot){
    if(runBot){
            // First Cghange Player Sign / If user has X value in Id Then Bot Will have o
    playerSign = "O";
    let array = [] ; // create an empty array for store un selected box 
    for(let i = 0; i < allBox.length; i++){
        if(allBox[i].childElementCount == 0){// if element has no child
            array.push(i);//push the un selected box inside the arr
            // console.log(`${i} has no child`)
        }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)]; // get random index for bot that we can put random box value
    // console.log(randomBox)
    if(array.length > 0){// if array length is greather than 0
        if(players.classList.contains("player")){// if players contain the class player
           allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`//adding icons to insiode the element when user click
            players.classList.remove("active");
            playerSign = "X";
            allBox[randomBox].setAttribute("id" , playerSign);
        }else{
            allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`//adding icons to insiode the element when user click
            players.classList.remove("active");
            allBox[randomBox].setAttribute("id" , playerSign);
        }
        selectWinner()
    }
    // console.log(array)
    allBox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
    }
}


// work on select the winner

function getClass(idname){
    return document.querySelector(".box" + idname).id; 
}

function checkClasses(val1, val2, val3, sign){
    if(getClass(val1) == sign && getClass(val2) == sign && getClass(val3) == sign){
        return true;
    }
}

function selectWinner() {
    if(checkClasses(1, 2, 3, playerSign) || checkClasses(4, 5, 6, playerSign) || checkClasses(7, 8, 9, playerSign) || checkClasses(1, 4, 7, playerSign) || checkClasses(2, 5, 8, playerSign) || checkClasses(3, 6, 9, playerSign) || checkClasses(1, 5, 9, playerSign) || checkClasses(3, 5, 7, playerSign)){
        //  console.log(playerSign + " " + "is a winner")
        runBot = false;
        bot(runBot);
        //let show result
        setTimeout(() => {
            playBoard.classList.remove("show");
           rsultBox.classList.add("show");
        }, 700)
        wonText.innerHTML = `Player <p>${playerSign}</p> won The game`

    }
   else{
    if(getClass(1) != "" && getClass(2) != "" && getClass(3) != "" && getClass(4) != "" && getClass(5) != "" && getClass(6) != "" && getClass(7) != "" && getClass(8) != "" && getClass(9) != ""){
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            playBoard.classList.remove("show");
            rsultBox.classList.add("show");
        }, 700)
        wonText.textContent = `<p>!! Tie !!</p>`
    }
   }
}

replayBtn.onclick = ()=>{
    window.location.reload();
}