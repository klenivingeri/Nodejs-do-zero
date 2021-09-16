/*
0 obter usuario
1 Obter numero de telefone de um usuario a  partir de seu id
2 obter endereço do usuario pelo id
*/

// importamos o módulo interno do node.js, que transforma funções de callback em new Promise
const util = require('util')
const obterEnderecoAsync = util.promisify(obterEndereco)


function obterUsuaio() {
    //Quando der algum problema -> reject(erro)
    //Quando der success -> resolve
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            return resolve ({
                id:1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })

}
function obterTelefone(idUsuario){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve({
                tel: '999 999 999',
                ddd: 11
            })
        },1000)
    })
}
function obterEndereco(idUsuario, callback){
    setTimeout(function(){
        return callback(null,{
            rua: 'dos bobos',
            numero: 110
        })
    },1000)
}

// para manipular o sucesso usamos a funçãpo .then()
// para manipular o erros, usamos o .catch()
obterUsuaio()
    .then(function(usuario){
        return obterTelefone(usuario.id)
            .then(function(telefone){
                return {
                    usuario: {
                        nome: usuario.nome,
                        id: usuario.id
                    },
                    telefone
                }
            })
    })
    .then(function(usuario){
        return obterEnderecoAsync(usuario)
            .then(function(endereco){
                return {
                    ...usuario,
                    endereco
                }
            })
    })
    .then(function(result){
        console.log(result)
    })
    .catch(function(error){
        console.log('DEU RUIM', error)
    })



/* obterTelefone()
    .then(function(resolve){
        console.log(resolve)
    })
    .catch(function(error){
        console.log('DEU RUIM', error)
    })

    obterEndereco()
        .then(function(resolve){
            console.log(resolve)
        })
        .catch(function(error){
            console.log(error)
        }) */