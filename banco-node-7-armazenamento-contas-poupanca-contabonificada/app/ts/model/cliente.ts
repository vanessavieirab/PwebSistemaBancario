class Cliente {

    private _nomeCliente: string;
    private _cpf: number;
    private _conta: Conta;

    constructor(nomeCliente: string, cpf: number, conta:  Conta) {
        this._nomeCliente = nomeCliente;
        this._cpf = cpf
        this._conta = conta;
    }

    get nomeCliente() {
        return this._nomeCliente;
    }

    set nomeCliente(nome_cliente) {
        this._nomeCliente = nome_cliente;
    }

    get cpf(){
        return this._cpf;
    }

    set conta (conta) {
        this._conta = conta;
    }

    get conta(){
        return this._conta;
    }
    
    toString(): string {
        return `Nome: ${this._nomeCliente} 
        - Cpf: ${this._cpf}
        - Conta: ${this._conta}`;
    }
}