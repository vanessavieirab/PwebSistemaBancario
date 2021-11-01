//let contaController = new ContaController();
let clienteController = new ClienteController();

//contaController.listar();
clienteController.listar();

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 100)

const p1 = new Poupanca('3', 100);

const cb1 = new ContaBonificada('3', 0);

const listaCliente1 = new Clientes

const cli1 = new Cliente("Vanessa", 11113333, c1)
const cli2 = new Cliente("Nina", 223333, c2)
const cli3 = new Cliente("Janaina", 545553, c1)

listaCliente1.inserir(cli1)
listaCliente1.inserir(cli2)
listaCliente1.inserir(cli3)

console.log(listaCliente1.listar())

listaCliente1.remover(11113333)

listaCliente1.pesquisar(545553)

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

