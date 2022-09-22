function verificar(value1, value2) {
    //    value1 = document.getElementById('value1').value;
    //    value2 = document.getElementById('value2').value;
      if(value1 === '' || value2 === ''){
        throw new Error ('Digite um numero')
      }
    }


    function sum (value1, value2){
      try{
       verificar(value1, value2)
       const result = Number(value1) + Number(value2)
       return result
    //    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    //    document.getElementById('value1').value = '';
    //    document.getElementById('value2').value = '';
      }
      catch (erro) {
        return erro.message;
      }

      }
        
      console.log(sum('', ''))