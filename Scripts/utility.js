function hideElementById (elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getARandomAlphabet()
{
    //get or create an alphabet array

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    //get a random index between 0 - 25

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    

    const alphabet = alphabets[index];
    // console.log(index ,  alphabet);

    return alphabet;
}

function setBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getValueById(elementId)
{
    const element  =document.getElementById(elementId);
    const elementText = element.innerText;
    const elementValue = parseInt(elementText);
    return elementValue;
}

function setValueById(elementId , value)
{
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId)
{
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}