var img,data,MAX;

function preload() {

    data = loadJSON('champs.json');

frame = loadImage('assets/frame.png');

  }
var walls = 250;
function setup(){

    createCanvas(walls,walls-80);
    background(200);
    MAX = Object.keys(data).length;

}

function wild(){

    var señor = round(random(0, MAX));

    background(200);
    //amount of champs in total.

//data[señor] = random champ.

console.log(data[señor].name);
var offset = 100;

imgPath = data[señor].icon;

loadImage(imgPath, img => {
    image(img, walls-(offset+walls/(offset/10)), walls/(offset/10)+20,offset,offset);
    image(frame,walls-(offset+walls/(offset/10))-offset/10, walls/(offset/10)-offset/10+20,offset*1.1667,offset*1.1667);
  });
//id is the proper name of the champ.

//Name
textStyle(BOLD);
textSize(20);
text(data[señor].name,10,22);
//title
textSize(10);
text(data[señor].title,10,34);
//Tags
textSize(20);
text("tags:",10,70);
textSize(15);
for (let index = 0; index < data[señor].tags.length; index++) {
    text(data[señor].tags[index],10,90+(20*index));
}

}