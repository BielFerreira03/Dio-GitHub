const alunos = [
    {
        nome: 'Gabriel',
        nota:  10,
        turma: '18'
    },
    {
        nome: 'Paulo',
        nota:  5,
        turma: '18'
    },
    {
        nome: 'Sofia',
        nota:  6,
        turma: '20'
    },
    {
        nome: 'miguel',
        nota:  3,
        turma: '20'
    },
  ];
  
  
  function alunosAprovados(arr, media){
    let aprovados = [];
    
    for(let i = 0; i < arr.length; i++) {
  
        const {nota, nome} = arr[i];
  
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
  
    return aprovados;
  }
  
  console.log(alunosAprovados(alunos, 5))