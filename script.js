const ram = () =>{
    const pers = document.getElementById("pers")
    var id = pers.value;
    var char = []
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const div = document.getElementById("resposta")


    char.push(fetch(url).then(response => response.json()))
    
    Promise.all(char)
        .then(item =>{
            console.log(item);
            var list = item.reduce((acumulattor, item) =>{
                acumulattor += `
                <div class="info">
                        <div class="card-info">
                        <img class="card-img" alt="" src="${item.image}">
                        <br>
                        <h2 class="card-title"> ${item.name}</h2> <br>
                        <p class="card-subtitle"><strong>Genero:</strong> ${item.gender}</p>
                        <p class="card-subtitle"><strong>ID:</strong> ${item.id}</p>
                    </div>
                    <div class="card-info2">
                        <h2 class="card-title">Informações</h2> <br>
                        <p class="card-subtitle"><strong>Status:</strong> ${item.status}</p>
                        <p class="card-subtitle"><strong>Especie:</strong> ${item.species}</p>
                        <p class="card-subtitle"><strong>Origem:</strong> ${item.origin.name}</p>
                        
                    </div>
                </div>
                ` 
                return acumulattor
            }, '')
            div.innerHTML = list
        })
    
}


