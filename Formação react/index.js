class Conta {
    agencia;
    saldo;
    
    constructor(agencia, saldo){
        this.agencia = agencia;
        this.saldo = saldo;
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return 'Deposito efetuado com sucesso, no valor de: ' + valor;
        }
        return 'Não foi possivel realizar o saque, valor invalido';
    }

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; 
            return 'Saque efetuado com sucesso, no valor de: ' + valor;
        }
        return 'Não foi possivel realizar o saque, saldo insuficiente';
    }

    get saldo(){
        return this.saldo;
    }
}

class Cliente {
    nome;
    cpf;
    Conta;

    constructor(nome, cpf, Conta){
        this.nome = nome;
        this.cpf = cpf;
        this.Conta = Conta;
    }
}

const conta1 = new Conta('1234',1000);
console.log(conta1.depositar(9000));
console.log(conta1.saldo);
console.log(conta1.sacar(6000));
console.log(conta1.sacar(8000));

const cliente1 = new Cliente('Matheus', 11122233344, conta1);