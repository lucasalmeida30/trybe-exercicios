const ContarPalavra = (frase) => {
  const palavras = frase.split(' ');
  let maxLength = 0;
  let result = '';
  for(const key of palavras){
     if(key.length > maxLength){
        maxLength = key.length;
        result = key
     }
  }
  return result
}

console.log(ContarPalavra('Antônio foi ao banheiro e não sabemos o que aconteceu'))