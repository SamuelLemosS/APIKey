const btn = document.getElementById("btn");
const img = document.getElementById("img");
const h3 = document.getElementById("h3");

const gerarEspecie = async() =>{
    const apikey=('9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee')
    const response = await fetch(`https://apiv3.iucnredlist.org/api/v3/species/page/0?token=${apikey}`);
    const data = await response.json();
    const randomNumber=(Math.random() * 10000);
    h3.innerHTML = data.result[Math.trunc(randomNumber)].scientific_name;

}; 


btn.onclick=gerarEspecie;
