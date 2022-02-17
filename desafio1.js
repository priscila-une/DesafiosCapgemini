function escada(tamanho){
    //iniciando um array vazio para armazenar as #
    let array = [];

    //percorrendo um loop para colocar a # e os espaços
    for(let i = 1; i <= tamanho; i++){
        let espaco = tamanho - i;
        array.push(" ".repeat(espaco) + "#".repeat(i));
    }

    //retornando o array 
    return array;
}

console.log(escada(6))