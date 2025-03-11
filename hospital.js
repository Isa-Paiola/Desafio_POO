class Pessoa{
    constructor(nome, especialidade) {
        // o constructor é um método tradicional
        this.nome = nome;
        this.especialidade= especialidade;
    }
    apresentar= () =>console.log (`Olá, eu sou ${this.nome} minha especialidade é ${this.especialidade}, e cuido das saúdes das crianças.`)
}


//herdou as infos da classe pessoa
class Funcionario extends Pessoa{
    falar = () => console.log(`Olá, sou ${this.nome}  minha profissão é ${this.especialidade}, e cuido das saúdes mentais das pessoas.`);
    dizer = () => console.log(`Olá, sou ${this.nome}  minha especialidade é ${this.especialidade}, e sou responsável por cuidar da mulher durante a gravidez.`);
    explica = () => console.log(`Olá, sou ${this.nome}  minha função é ${this.especialidade}, cuido dos hábitos alimentares das pessoas.`);
    comentar= () => console.log(`Olá, sou ${this.nome}  minha especialidade é ${this.especialidade}, cuido da saúde bucal das pessoas.`);
    falando = () => console.log(`Olá, sou ${this.nome}  minha especialidade é ${this.especialidade}, responsável por realizar cirurgias e tratamentos do sistema nervoso, central e periférico.`);
    apresentando = () => console.log(`Olá, sou ${this.nome}  minha especialidade é ${this.especialidade}, responsável pelo coração e sistema cardiovascular.`);
}


const Duda = new Funcionario("Duda", "Pediatra")
const Isabela = new Funcionario("Isabela", "Psicologa")
const Yasmin = new Funcionario("Yasmin", "Obstetra")
const Leonardo = new Funcionario("Leonardo", "Nutricionista")
const Lucas = new Funcionario("Lucas", "Dentista")
const Felipe = new Funcionario("Felipe", "Neurocirurgião")
const Vitor = new Funcionario("Vitor", "Cardiologista")

Duda.apresentar();
Isabela.falar();
Yasmin.dizer();
Leonardo.explica();
Lucas.comentar();
Felipe.falando();
Vitor.apresentando();