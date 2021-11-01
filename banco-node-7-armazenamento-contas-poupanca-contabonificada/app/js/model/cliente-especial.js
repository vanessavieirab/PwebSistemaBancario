class ClienteEspecial extends Cliente {
    constructor(nomeCliente, cpf, conta) {
        super(nomeCliente, cpf, conta);
        this._dependentes = new Array();
    }
    inserir(dependente) {
        this._dependentes.push(dependente);
    }
    remover(clienteCpf) {
        this._dependentes.splice(this._dependentes.findIndex(cliente => cliente.cpf === clienteCpf), 1);
    }
    toString() {
        return `Nome: ${this.nomeCliente} - Cpf: ${this.cpf} - Conta: ${this.conta}`;
    }
}
