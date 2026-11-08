// Definição da classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades 
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Converte para minúsculo para evitar erros de digitação
    }

    atacar() {
        let ataque = "";

        // Estrutura de decisão tratando variações com artigos ou nomes diretos
        switch (true) {
            case this.tipo.includes("feiticeira"):
                ataque = "magia";
                break;
            case this.tipo.includes("guerreiro"):
                ataque = "espada";
                break;
            case this.tipo.includes("monge"):
                ataque = "artes marciais";
                break;
            case this.tipo.includes("ninja"):
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque indefinido";
        }

        // Exibe a mensagem formatada (usando o tipo original passado ou ajustado)
        console.log(`O tipo ${this.tipo} atacou usando ${ataque}`);
    }
} // <--- Essa chave estava faltando para fechar a classe!

// Criando as instâncias dos heróis
const heroi1 = new Heroi("Yennefer de Vengerberg", 99, "A feiticeira");
const heroi2 = new Heroi("Kratos", 190, "O guerreiro");
const heroi3 = new Heroi("Aang o Avatar", 12, "O monge");
const heroi4 = new Heroi("Naruto", 17, "ninja");

// Chamando o método atacar para cada um deles
heroi1.atacar(); // Saída: O tipo a feiticeira atacou usando magia
heroi2.atacar(); // Saída: O tipo o guerreiro atacou usando espada
heroi3.atacar(); // Saída: O tipo o monge atacou usando artes marciais
heroi4.atacar(); // Saída: O tipo ninja atacou usando shuriken

