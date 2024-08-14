
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    emitirSom() {
        throw new Error("Este método deve ser implementado pelas subclasses");
    }

    mover() {
        throw new Error("Este método deve ser implementado pelas subclasses");
    }
}


class Cachorro extends Animal {
    emitirSom() {
        return `${this.nome} faz 'au au'`;
    }

    mover() {
        return `${this.nome} está correndo atrás de uma bola`;
    }
}


class Gato extends Animal {
    emitirSom() {
        return `${this.nome} faz 'miau'`;
    }

    mover() {
        return `${this.nome} está escalando uma árvore`;
    }
}


const cachorro1 = new Cachorro("Rex", 5);
const gato1 = new Gato("Mia", 3);
const cachorro2 = new Cachorro("Bobby", 2);


console.log(cachorro1.emitirSom());  
console.log(gato1.mover());          
console.log(cachorro2.emitirSom());  
