function contabilizarSaldo(vitorias, derrotas) {
    let saldoDeVitorias = vitorias - derrotas
    let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

    if(saldoDeVitorias<=10){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[0]}`);
    } else if (saldoDeVitorias>=11 && saldoDeVitorias<=20){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[1]}`);
    }else if(saldoDeVitorias>=21 && saldoDeVitorias<=50){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[2]}`);
    }else if (saldoDeVitorias>=51 && saldoDeVitorias<=80){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[3]}`);
    }else if (saldoDeVitorias>=81 && saldoDeVitorias<=90){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[4]}`);
    }else if (saldoDeVitorias>=91 && saldoDeVitorias<=100){
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[5]}`);
    }else if(saldoDeVitorias>=101) {
        console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivel[6]}`);
    }
    
    return saldoDeVitorias, nivel
}

contabilizarSaldo(110, 6)