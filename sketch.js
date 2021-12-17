var path,boy;
var pathImg,boyImg;
var leftBoundary,rightBoundary;
function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg1 = loadAnimation("jake1.png","jake2.png","jake3.png");
  
}

function setup(){
  
  createCanvas(400,400);
  background("blue");
  //crie um sprite para a pista 
  path = createSprite(200,200);
  //adicione uma imagem para a pista
  path.addImage(pathImg);
  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.velocityY = 4;
  path.scale=1.2;

  //crie um sprite de menino
  boy = createSprite(200,200,30,30);
  //adicione uma animação de corrida para ele
  boy.addAnimation("runningboy",boyImg1);
  boy.scale=0.8;
  
  //crie um limite à esquerda
  leftBoundary=createSprite(0,0,100,800);
  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false
  //crie um limite à direita
  rightBoundary=createSprite(410,0,100,800);
  //defina visibilidade como falsa para o limite à direita
  rightBoundary.visible = false
}

function draw() {
   background(0);
   path.velocityY = 4;
  
   // mover o menino com o mouse usando mouseX
   boy.x = World.mouseX;
   edges= createEdgeSprites();
   boy.collide(edges[3]);
   // colidir o menino com os limites invisíveis da esquerda e da direita
   boy.collide(rightBoundary);
   boy.collide(leftBoundary);
   //código para redefinir o fundo
   if(path.y > 400 ){
     path.y = height/2;
  }
  drawSprites();
}
