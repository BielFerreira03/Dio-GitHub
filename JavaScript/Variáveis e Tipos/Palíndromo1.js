// solução 1

function verificaPalindromo(string){
    if(!string ) return "string inexistente";
  
    return string.split("").reverse().join("") === string; 
  
  }
  
  
  console.log(verificaPalindromo("gato"))