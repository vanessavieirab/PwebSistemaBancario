class ClienteEspecial extends Cliente{

    private _dependentes: Array<Cliente>;

    constructor(nomeCliente: string, cpf: number, conta: Conta) {
        super(nomeCliente,cpf,conta);
        this._dependentes = new Array<Cliente>();
    }

    inserir (dependente: Cliente): void {
        this._dependentes.push(dependente)
    }

    remover (clienteCpf: number): void {
        this._dependentes.splice(this._dependentes.findIndex(cliente => cliente.cpf === clienteCpf), 1);
    }

    toString(): string {
        return `Nome: ${this.nomeCliente} - Cpf: ${this.cpf} - Conta: ${this.conta}`
    }
}