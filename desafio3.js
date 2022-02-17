function numeroAnagramas (palavra, anagrama = '', anagramas = []){
    if(!palavra){
        anagramas.push(anagrama);
        return;
    }
    for(let i = 0; i < palavra.length; i++){
        anagrama += palavra[i];
        numeroAnagramas(palavra.slice(0, i) + palavra.slice(i + 1), anagrama, anagramas);
        anagrama = anagrama.slice(0, anagrama.length - 1);
    }
    let setAnagramas = [...new Set(anagramas)];

    return setAnagramas.length;
}   

console.log(`O número de Anagramas é ${numeroAnagramas('lobo')}`)