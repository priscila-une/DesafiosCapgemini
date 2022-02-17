function verificaSenha(senha){
    
    let valida = false;
    //variaveis de expressões regulares 
    let letrasMaiusculas =  /[A-Z]/;
    let letrasMinusculas = /[a-z]/;
    let numeros = /[0-9]/;
    let charEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|+]/;
    
    //Se o tamanho da senha for menor que 6 retornar um aviso de  ter no mínimo 6 caracteres
    if(senha.length < 6){
        return `Você digitou ${senha.length} caracteres.\n\A senha deve ter no mínimo 6 caracteres`;
    }

    //variaveis auxiliares para contar quantos caracteres tem de cada tipo
    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;

    //percorrendo todas as letras
    for(var i = 0; i < senha.length; i++){
        //Se tiver letras maiusculas adicionar +1 na variavel auxMaiuscula
        if(letrasMaiusculas.test(senha[i])){
            auxMaiuscula++;
        }
        //Se tiver letras minusculas adicionar +1 na variavel auxMinuscula
        else if(letrasMinusculas.test(senha[i])){
            auxMinuscula++;
        } 
        //Se tiver numeros adicionar +1 na variavel auxNumero
        else if(numeros.test(senha[i])){
            auxNumero++;
        } 
        //Se tiver caracteres especiais adicionar +1 na variavel auxEspecial
        else if(charEspeciais.test(senha[i])){
            auxEspecial++;
        }
    }
    //Se todos as variaveis forem maior que 0 retorna a variavel valida = true
    if(auxMaiuscula > 0 && auxMinuscula > 0 && auxEspecial > 0 && auxNumero > 0){
        valida = true;
    }

    //retorna a variavel valida
    return valida;
}

console.log(verificaSenha("Teste123@"));
console.log(verificaSenha("Ya3"));
console.log(verificaSenha("Teste()"));