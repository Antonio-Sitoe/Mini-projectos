let senha = 0;


const resposta = () => {
    return senha === 2002 ? 'Acesso permitido' : 'Senha errada digite outra vez'
}

while (senha !== 2002) {
    senha = +(prompt(resposta()))
    console.log(resposta())
}