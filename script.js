var char = []
const url = id => `https://rickandmortyapi.com/api/character/${id}`
const div = document.getElementById("resposta")
var i;
var f;

const ram = (i, f) =>{
    for (i; i<f; i++) {
        char.push(fetch(url(i)).then(response => response.json()));
     }
    
    Promise.all(char)
        .then(item =>{
            console.log(item);
            var list = item.reduce((acumulattor, item) =>{
                acumulattor += `
                <div class="info">
                    
                        <img class="card-img" alt="" src="${item.image}">
                        <br>
                        <h2 class="card-name">Nome: ${item.name}</h2> <br>
                        <p class="card-subtitle"><strong>Genero:</strong> ${item.gender}</p>
                        <p class="card-subtitle"><strong>ID:</strong> ${item.id}</p>
                        <h2 class="card-title">Informações</h2> <br>
                        <p class="card-subtitle"><strong>Status:</strong> ${item.status}</p>
                        <p class="card-subtitle"><strong>Especie:</strong> ${item.species}</p>
                        <p class="card-subtitle"><strong>Origem:</strong> ${item.origin.name}</p>
                         
                </div>
                ` 
                return acumulattor
            }, '')
            div.innerHTML = list
        })
    
}

