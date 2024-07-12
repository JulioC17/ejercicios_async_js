const body = document.querySelector("body").insertAdjacentHTML("beforebegin",
    `<h1>POKERANDOM</h1>`
)


const pokeRandom = (select) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${select}`)
    .then((res) => res.json ())
    .then ((res) => imprimir(res))
}

const imprimir = (pokemon) => {
    const img = document.querySelector(".random-image")
    console.log(pokemon);
    img.setAttribute("src", pokemon.sprites.front_default)
    const pokemonName = document.createElement("h2")
    const catchBody = document.querySelector("body")
    pokemonName.innerHTML = pokemon.name.toUpperCase()
    catchBody.appendChild(pokemonName)
    
}


pokeRandom((Math.floor(Math.random() * (1 + 151 - 0) + 0)))




    /* https://pokeapi.co/api/v2/pokemon?offset=151&limit=151 */

    /* sprites/front default */

    



     