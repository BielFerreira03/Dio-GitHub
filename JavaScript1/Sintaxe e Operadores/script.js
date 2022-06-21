function verifySoma() {
    let n1 = Number(prompt('Digite seu primeiro número !'));
    let n2 = Number(prompt('Digite seu segundo número!'));
    let soma;
    soma = n1 + n2;
    
    if (n1 == n2) {
        if (soma < 10) {
            alert(`Os números ${n1} e ${n2} São iguais. Sua soma é ${soma}, que é menor que 10. `);
        }
        else if(soma < 20){
            alert(`Os números ${n1} e ${n2} São iguais. Sua soma é ${soma}, que é menor que 20. `);
        }
        else if(soma > 20) {
            alert(`Os números ${n1} e ${n2} São iguais. Sua soma é ${soma}, que é maior que 20. `);
        }
    }
    else{
        if (soma < 10) {
            alert(`Os números ${n1} e ${n2} Não são iguais. Sua soma é ${soma}, que é menor que 10. `);
        }
        else if (soma < 20) {
            alert(`Os números ${n1} e ${n2} Não são iguais. Sua soma é ${soma}, que é menor que 20. `);
        }
        else if (soma > 20) {
            alert(`Os números ${n1} e ${n2} Não são iguais. Sua soma é ${soma}, que é maior que 20. `);
        }
    }
    
}