function contabilizarSaldo(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas

    if(saldoDeVitorias<=10){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Ferro`);
    } else if (saldoDeVitorias>=11 && saldoDeVitorias<=20){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Bronze`);
    }else if(saldoDeVitorias>=21 && saldoDeVitorias<=50){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Prata`);
    }else if (saldoDeVitorias>=51 && saldoDeVitorias<=80){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Ouro`);
    }else if (saldoDeVitorias>=81 && saldoDeVitorias<=90){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Diamante`);
    }else if (saldoDeVitorias>=91 && saldoDeVitorias<=100){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de Lendário`);
    }else if(saldoDeVitorias>=101) {
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de imortal`);
    }
    
    return saldoDeVitorias
}

contabilizarSaldo(110, 6)