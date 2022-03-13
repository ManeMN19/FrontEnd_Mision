const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput=pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != 200) {
            console.log(res);
            pokeImage("./pikachucry.jpg");
        }
        else {
            return res.json();
        }
    }).then((data)=> {
        console.log(data);
        let pokeIMG = data.sprites.front_default;
        console.log(pokeIMG);
        pokeImage(pokeIMG);
    });
}

// fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}

// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png");