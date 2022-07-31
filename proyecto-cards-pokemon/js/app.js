
const getRandomInt = (max,min=0) => Math.floor((Math.random() * (max-min))+min);

const fetchApi = async ()=> {
    
    try {
    const idPokemon = getRandomInt(150, 0)
    const url = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch( url + idPokemon );
    const data     = await response.json();
    console.log(data);
    const pokemon = {
        img : data.sprites.other.dream_world.front_default,
        name: data.name,
        hp: data.stats[0].base_stat,
        xp: data.base_experience,
        atack: data.stats[1].base_stat,
        special: data.stats[2].base_stat,
        defense: data.stats[3].base_stat,

    }
    pintarData(pokemon)
} catch (error) {
    console.log(error);    
}
}

const pintarData = (pokemon)=>{
    // const flex = document.getElementsByClassName('flex');
    // const flex = document.getElementsByClassName("flex")
    const flex = document.querySelector('.flex')
    
    const templates = document.getElementById('template').content;
    // const template = document.querySelector('#template').content;
    
    const clone = templates.cloneNode(true);  // hacemos un clone, por que es recomendable no manipular el dom original   
    // sino el clone
    
    const fragment = document.createDocumentFragment();  // un fragmen es un pedacito de código invisible que se crea solo en el js
    // es muy útil para hacer loops y evitar el reflou, renderizados innecesarios del dom
    // es una buena práctica
    
    
    // clone.getElementsByClassName('card-body-img').setAttribute('src','aaa');
    clone.querySelector('.card-body-img').setAttribute('src',pokemon.img);
    // console.log(clone.getElementsByClassName('card-body-img'))

    clone.querySelector(".card-body-title").innerHTML =` ${pokemon.name} <span class="card-body-title-age">${pokemon.hp} hp</span>`;
    clone.querySelector(".card-body-text").textContent= `Xp ${pokemon.xp}`
    clone.querySelectorAll(".card-footer-social h3")[0].textContent= `${pokemon.atack}K`
    clone.querySelectorAll(".card-footer-social h3")[1].textContent= `${pokemon.special}K`
    clone.querySelectorAll(".card-footer-social h3")[2].textContent= `${pokemon.defense}K`

    fragment.appendChild(clone);
    flex.appendChild(fragment);
    
}


document.addEventListener('DOMContentLoaded', () => {
    fetchApi()
})


