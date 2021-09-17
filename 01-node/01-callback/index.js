/*
0 obter usuario
1 Obter numero de telefone de um usuario a  partir de seu id
2 obter endereço do usuario pelo id

*/

function obterUsuaio(callback) {
    setTimeout(() =>{
        return callback(null,{
            id:1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)

}
function obterTelefone(idUsuario, callback){
    setTimeout(function(){
        return callback(null,{
            tel: '999 999 999',
            ddd: 11
        })
    },1000)
}
function obterEndereco(idUsuario, callback){
    setTimeout(function(){
        return callback(null,{
            rua: 'dos bobos',
            numero: 110
        })
    },1000)
}

obterUsuaio(function resolverUsuario(error, usuario){
    console.log('já tenho usuario')
    if(error){
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        console.log('já tenho Telefone', )
        if(error1){
            console.error('DEU RUIM em TELEFONE', error1)
            return;
        }

        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            console.log('já tenho endereço')
            if(error2){
                console.error('DEU RUIM em TELEFONE', error2)
                return;
            }

            console.log(`
            Aqui esta todos que chamei
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.tel}
            Endereço: ${endereco.rua} nº ${endereco.numero}`
            )
        })
    })
    
})
