
function setPlayerStyle(player){
    player.style.border = '1px solid red';
    player.style.borderRadius = '20px';
    player.style.padding = '10px';
    player.style.margin = '10px'
}

const players = document.getElementsByClassName('player');

for(const player of players){

    setPlayerStyle(player)

}

// document.getElementById('add-player').addEventListener('click', function(){
    
//     const h2 = document.createElement('h2');
//     h2.innerText = 'shamim usman';
//     const p = document.createElement('p');
//     p.innerText = 'shamim usman buss khai bure bure. se onk valo neta nah, tar mathai problem ache';
//     const div = document.createElement('div');
//     div.append(h2, p)

//     const parentElement = document.getElementById('players')
//     parentElement.appendChild(div)

// })


function addPlayers (){
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    console.log(player);
    player.innerHTML = `<h2 class="player-name">New player</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis est, dolores enim earum maiores officiis quis accusantium ipsa quasi repellat quam incidunt eveniet eius, quaerat ipsum reiciendis id suscipit.</p>`;

    setPlayerStyle(player)
    playersContainer.appendChild(player)

    
}


document.getElementById('players').addEventListener('click', function(event){
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow'
    }
})