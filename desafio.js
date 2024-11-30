class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome
      this.idade = idade
      this.tipo = tipo
    }
    
    atacar() {
      let ataque;
      switch (this.tipo) {
        case "mago":
          ataque = "magia"
          break
        case "guerreiro":
          ataque = "espada"
          break
        case "monge":
          ataque = "artes marciais"
          break
        case "ninja":
          ataque = "shuriken"
          break
        default:
          ataque = "um ataque desconhecido"
          break
      }
      console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
  }
  
  const mago = new Heroi("Merlin", 150, "mago")
  mago.atacar()
  
  const guerreiro = new Heroi("Arthur", 35, "guerreiro")
  guerreiro.atacar()
  
  const monge = new Heroi("Shaolin", 25, "monge")
  monge.atacar()
  
  const ninja = new Heroi("Hattori", 30, "ninja")
  ninja.atacar()
  