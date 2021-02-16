function logScope(){
   let localVar = 2;

    if(localVar){
        let localVar = "Eu sou diferente!";
        console.log("localVar aninhada: ", localVar);
    }

    console.log("logScope localVar: ", localVar);
}

logScope();

const minhaconstante = 5;
console.log(minhaconstante)
// const = 6; Erro não pode alterar const
