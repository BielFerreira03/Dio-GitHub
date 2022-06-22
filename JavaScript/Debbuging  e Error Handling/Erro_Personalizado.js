function validaArray(arr, num) {
    try{
      if(!arr && !num) throw new ReferenceError("Envie os parâmetros !");
    
      if(typeof arr !== 'object') throw new TypeError("Array Precisa ser do tipo Object !");
    
      if(typeof num !== 'number') throw new TypeError("Numero precisa ser do tipo Number !");
    
      if(arr.length !== num) throw new RangeError('O tamanho do Array é diferente de seu parâmetro !')
  
      return arr;
    
    }
    catch(e) {
      if(e instanceof ReferenceError) {
        console.log('Este erro é um referenceError !')
        console.log(e.message)
      }
      else if(e instanceof TypeError) {
        console.log('Este erro é um TypeError !')
        console.log(e.message)
      }
      else if(e instanceof RangeError) {
        console.log('Este erro é um RangeError !')
        console.log(e.message)
      }
      else {
        console.log("Tipo de erro não definido:" + e);
      }
    }
  }
  
  console.log(validaArray([1, 2, 3, 4, 5], 5 ))