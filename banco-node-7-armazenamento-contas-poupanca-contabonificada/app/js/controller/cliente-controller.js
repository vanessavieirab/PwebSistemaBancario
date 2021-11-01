class ClienteController {
    constructor() {
        this.inputNumero =
            document.querySelector("#conta");
        this.inputSaldo =
            document.querySelector("#saldo");
        this.inputNome =
            document.querySelector("#cliente_nome");
        this.inputCpf =
            document.querySelector("#cpf");
        this.clientes = new Clientes();
    }
    inserir(evento) {
        evento.preventDefault();
        if (this.clientes.pesquisar(parseInt(this.inputCpf.value)) == null) {
            let newCliente = new Cliente(this.inputNome.value, parseInt(this.inputCpf.value), new Conta(this.inputNumero.value, parseFloat(this.inputSaldo.value)));
            this.clientes.inserir(newCliente);
            this.inserirClienteNoHTML(newCliente);
        }
        else {
            alert("Cliente já existe.");
        }
    }
    listar() {
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const elementoCliente = document.createElement('p');
        elementoCliente.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo cliente ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoCliente.appendChild(botaoApagar);
        document.body.appendChild(elementoCliente);
    }
}
