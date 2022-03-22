
function consultarEndereco (){

    let cep = document.getElementById('cep').value

    if(cep.length !== 8){//validando o CEP
        alert("CEP Inválido!")
        return //Se o CEP tiver mais que 8 digitos a função para
    }

    let url = `https://viacep.com.br/ws/${cep}/json/` //Pegando a url da api

    //CONSUMINDO API
    fetch(url) //A API fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.
    .then((response)=>{ //O método then() retorna uma Promise. Possui dois argumentos, ambos são "call back functions", sendo uma para o sucesso e outra para o fracasso da promessa.
        response.json().then(mostrarEndereco)//Ja recebe os parametros da função chamada, convertendo para objeto
    })
}

function mostrarEndereco(dados){
    let resultado = document.getElementById('resultado')
    if(dados.erro){
        resultado.innerHTML = "Não foi possíivel localizar endereço!"
    }
    else{
        resultado.innerHTML = `<p>Bairro: ${dados.bairro}</p>
                           <p>Endereço: ${dados.logradouro}</p>
                           <p>Complemento: ${dados.complemento}</p>
                           <p>Cidade: ${dados.localidade}</p>
                           <p>DDD: ${dados.ddd}</p>`
    }
}