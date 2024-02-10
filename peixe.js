var config = {  //configs básicas do jogo
    type: Phaser.AUTO, //vai renderizar a página web de acordo com o navegador
    width: 800, //indicam a largura
    height: 600, //indica a altura

    scene: {  //define as funções que serão executadas no jogo
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config); //criando uma variável game e essa variável tera os algoritimos definidos em "config"

var peixinho; 

function preload() { //aqui é carregado os recursos do jogo
    this.load.image('ocean', 'assets/bg_azul-claro.png') //o "ocean" é o apelido da imagiem add em seguida
    this.load.image('logo', 'assets/logo-inteli_azul.png')
    this.load.image('peixe', 'assets/peixes/peixe_turquesa.png')
    this.load.image('505', 'assets/peixes/505.png')
}

function create() { //depois de carregado no preload, o creat cria e configura elementos do jogo
    this.add.image(400, 300, 'ocean') //aqui carregamos o "ocean" feito anteriormente
    this.add.image(400, 525, 'logo').setScale(0.5); //realiza alterações no tamanho da imagem
    this.add.image(200, 200, '505').setScale(0.5);
    //this.add.image('505').set.Origin(0.5, 0.5).setFlip(true, false); //indica se a imagem deve se espelhar horiz(true) - vert(false)

    peixinho = this.add.image(400, 300, 'peixe'); //guardar "peixe" em uma variável

    peixinho.setFlip(true, false); //deixando ele virável horizontalmente

}

function update() { //'lógica do looping de C++' código que roda em tempo real no game como comandos

    peixinho.x = this.input.x; // controle horizontal do peixe
    peixinho.y = this.input.y; // controle vertical do peixe

}