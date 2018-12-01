const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;
let array = [];
const create = function(){
  createCanvas(400,400);
  array[array.length]=[
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ];
  console.table(array);
  addChessPieces();
  addChessPieces();
  console.table(array);
}

const addChessPieces = function(){
  let choices = [];
  for(let i=0; i < array[0].length; i++){
    for(let j=0; j < array[0].length; j++){
      if(array[i][j]===0){
        choices.push({
          x: i,
          y: j
        });
      }
    }
  }
  if(choices.length > 0){
    let place = random(choices);
    let rand = random(10);
    if(rand > 5){
    array[place.x][place.y] = 2;
  }
    else{
      array[place.x][place.y] = 4;
    }
  }
 
}
