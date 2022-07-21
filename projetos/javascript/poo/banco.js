
class ContaBancaria {
    constructor(agencia, numero, tipo='bancaria', saldo_limite=500) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo_limite = saldo_limite;
        this._saldo = 0;
        this.contador = 0;
    }

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        if (valor < this._saldo) {
            this.contador += valor;
            if (this.contador <= this.saldo_limite) {
                this._saldo -= valor;
                console.log('Saque realizado com sucesso.');
            } else console.log('Limite diario atingido.');
        } else console.log('Saldo insuficiente.');
    }

    depositar(valor) {
        this._saldo += valor;
        console.log(`R$ ${valor} depositado em sua conta`);
    }


}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo_limite, cartaoCredito) {
        super(agencia, numero, saldo_limite);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo_limite) {
        super(agencia, numero, saldo_limite);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo_limite) {
        super(agencia, numero, saldo_limite);
        this.tipo = 'universitara';
    }

    sacar(valor) {
        if (valor > 500) {
            console.log('Sua conta tem o limite de saque de R$500,00.')
        } else {
            if (valor < this._saldo) {
                this.contador += valor;
                if (this.contador <= this.saldo_limite) {
                    this._saldo -= valor;
                    console.log('Saque realizado com sucesso.');
                } else console.log('Limite diario atingido.');
            } else console.log('Saldo insuficiente.');
        }
    }
}

const conta1 = new ContaBancaria(12, 123123);
const conta2 = new ContaCorrente(1, 123);
conta2._saldo = 700;
conta2.sacar(400);
conta2.sacar(200);
console.log(conta2._saldo);

const conta3 = new ContaUniversitaria(43, 45345);
conta3._saldo = 2500;
conta3.sacar(700);
console.log(conta3._saldo);
conta3.sacar(300);
conta3.sacar(300);
console.log(conta3._saldo);