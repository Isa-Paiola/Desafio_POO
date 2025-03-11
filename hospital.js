class Pessoa{
    constructor(nome, especialidade) {
        // o constructor é um metodo tradicional
        this.nome = nome;
        this.especialidade = especialidade;
    }
    //metodo
    apresentar () {
        return `Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, e cuido das saúdes das crianças.`;
    }
}


//herdou as infos da classe pessoa
class Funcionario extends Pessoa{
    falar = () => (`Olá, sou ${this.nome} e minha profissão é ${this.especialidade}, eu cuido da saúde mentais das pessoas.`);
    dizer = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, responsável por cuidar das grávidas e seus bebês.`);
    explicar = () => console.log(`Olá, sou ${this.nome} e minha profissão é ${this.especialidade}, cuido dos hábitos alimentares das pessoas.`);
    comentar = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, cuido da saúde bucal das pessoas.`);
    explicando = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade},responsável por realizar cirurgias e tratamentos do sistema nervoso, central e periférico.`);
    falando = () => console.log(`Olá, sou ${this.nome} e minha especialidade é ${this.especialidade}, responsável pelo coração e sistema cardiovascular.`);
}


const Duda = new Funcionario("Duda", "Pediatria")
const Isabela = new Funcionario("Isabela", "Psicologa")
const Yasmin = new Funcionario("Yasmin", "Obstetria")
const Leonardo = new Funcionario("Leonardo", "Nutricionista")
const Lucas = new Funcionario("Lucas", "Dentista")
const Felipe = new Funcionario("Felipe", "Neurocirurgia")
const Vitor = new Funcionario("Vitor", "Cardiologista")

Duda.apresentar();
Isabela.falar();
Yasmin.dizer();
Leonardo.explicar();
Lucas.comentar();
Felipe.explicando();
Vitor.falando();


function exibir(mensagem) {
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = mensagem;
    output.appendChild(p);
}




exibir(Duda.apresentar());
exibir(Isabela.falar());
exibir(Yasmin.dizer());
exibir(Leonardo.explicar());
exibir(Lucas.comentar());
exibir(Felipe.explicando());
exibir(Vitor.falando());