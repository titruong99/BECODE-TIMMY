const nbPokemon=1008;
for(let i=1;i<=nbPokemon;i++){
    let image=document.createElement("img");
    image.src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+i+".png";
    image.tagName="Pokemon "+i;
    document.querySelector("div").appendChild(image);
}
