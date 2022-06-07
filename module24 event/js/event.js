

function makeRed(){
    document.body.style.backgroundColor = 'red'
}


// handle blue button click by setting function name
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue (){
    document.body.style.backgroundColor = 'blue'
}

// handle event using anonymous function 
const greenButton = document.getElementById('green-button');
greenButton.onclick = function(){
    document.body.style.backgroundColor = 'green'
}


// handle by addEventListener
const goldenRod = document.getElementById('goldenrod-butoon');
goldenRod.addEventListener('click', MakegoldenRod);

function MakegoldenRod (){
    document.body.style.backgroundColor = 'GoldenRod';
}

//addEventListener
const hotPink = document.getElementById('hotpink-butoon');
hotPink.addEventListener('click', function(){
    document.body.style.backgroundColor = 'hotpink'
})


//direct shortcut
document.getElementById('LightBlue-butoon').addEventListener('click', function(){
    document.body.style.backgroundColor = 'LightBlue'
})