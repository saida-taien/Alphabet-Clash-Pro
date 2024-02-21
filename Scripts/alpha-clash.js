// function play()
// {
//     //Step-1 : Hide the Home section

//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //Step -2: Show the playground section

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');

// }
const audio = new Audio();
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');
const modalBox = document.getElementById('modal-box');
function handleKeyboardButtonPress(event)
{
    if(isGamePlayOn === false)
    {
        return;
    }
    const playerPressed = event.key;


    //stop the game if pressed 'ESC'
    if(playerPressed === 'Escape')
    {
        gameOver();
    }
    else if(playerPressed === 'Enter')
    {
        console.log("clicked");
    }

    //get expected to press

    const currentAlphabet = getElementTextById("current-alphabet");

    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed , expectedAlphabet);

    if(playerPressed === expectedAlphabet)
    {
      audio.src = "../audio/Success.mp3";
      audio.play();

        // //step-1 : get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);

        // //step-2 : increase the score by 1
        // const newScore = currentScore+1;

        // //step-3 : Show the update score
        // currentScoreElement.innerText = newScore;




        //using function
        const currentScore = getValueById('current-score');
        const newScore = currentScore+1;
        setValueById('current-score' , newScore);




        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else
    {
        audio.src = "../audio/Wrong.mp3"
        audio.play();

        
        // console.log('You lost a life')

        //step-1 : get the current life


        // const currentLifeElement = document.getElementById("current-life");
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        //step-2 : decrease the score by 1

        
        
        // const newLife = currentLife-1;
        // alert('You lose a life');

        //step-3 : Show the update score
        // currentLifeElement.innerText = newLife;

        

        

        //using function
        const currentLife = getValueById("current-life");
        const updatedLife = currentLife-1;

        const updatedLifPercentage = (updatedLife / 5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifPercentage}% , red)`

        setValueById('current-life' , updatedLife);

        if(updatedLife === 0)
        {
           gameOver();

        }






        
    }

    
}

//capture keyboard keypress

document.addEventListener('keyup' , handleKeyboardButtonPress);



function continueGame()
{
    //step-1 : generate a random alphabet
   
    const alphabet =  getARandomAlphabet();
    // console.log('Your random alphabet : ' ,alphabet)

    //set randomly generated alphabet to the screen (show it)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;


    //set background color
    setBackgroundColorById(alphabet);

}




function play()  //using external function
{
    isGamePlayOn = true;
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('score');
    showElementById('play-ground');


    //reset score and life
    setValueById('current-life' , 5);
    setValueById('current-score' , 0);
    continueGame()

    
}

function gameOver()
{
    isGamePlayOn = false;
    audio.src = "../audio/GameOver.mp3";
    audio.play();
    hideElementById('play-ground');
    showElementById('score');

    const finalScore = getValueById('current-score');
    setValueById('final-score' , finalScore);

    //clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    artBoard.style.background = `linear-gradient(#FFFFFFB3 100% , red)`
}

function modalOpen (event)
{
    if(event.clientY < 5)
    {
        modalBox.style.display = "flex";
    }
}

function closeModal()
{
    modalBox.style.display = "none";
}
document.body.onmousemove = modalOpen;