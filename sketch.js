var img,data,MAX,itemData,señor,offset,ITEMMAX,count;
var walls = 250;

function preload() {

    data = loadJSON('champs.json');

itemData = loadJSON('items.json');

frame = loadImage('assets/frame.png');



  }



//var myp5 = new p5(sketch);


var sketch1 = function(p) {

p.setup = function(){
    p.createCanvas(walls,walls-80);
    p.background(200);
    p.MAX = Object.keys(data).length-1;
}

p.wild = function(){

     señor = round(random(0, p.MAX));

    p.background(200);
    //amount of champs in total.

//data[señor] = random champ.

console.log("Champ: "+data[señor].name);
 offset = 100;

imgPath = data[señor].icon;

loadImage(imgPath, img => {
    p.image(img, walls-(offset+walls/(offset/10)), walls/(offset/10)+20,offset,offset);
    p.image(frame,walls-(offset+walls/(offset/10))-offset/10, walls/(offset/10)-offset/10+20,offset*1.1667,offset*1.1667);
  });
//id is the proper name of the champ.

//Name
p.textStyle(BOLD);
p.textSize(20);
p.text(data[señor].name,10,22);
//title
p.textSize(10);
p.text(data[señor].title,10,34);
//Tags
p.textSize(20);
p.text("tags:",10,70);
p.textSize(15);
for (let index = 0; index < data[señor].tags.length; index++) {
    p.text(data[señor].tags[index],10,90+(20*index));
}

}


}

var sketch2 = function (o){

    o.setup = function(){
        o.createCanvas(300,170);
        o.background(150);
        }

    o.Mythic = function(){
        o.background(150);


//returns the name at the 20th index of the json file.
//console.log(datarino(20).name);


var señorita = round(random(0, ITEMMAX));

var str = o.datarino(señorita).description;

if (str.includes("Mythic")){
    console.log("Item: "+o.datarino(señorita).name);
    o.drawText(señorita);
    o.drawImg(señorita);
} else {
    o.Mythic();

}


    }

o.drawText = function(numb){

homie = Object.keys(itemData.data)[numb]

    o.textStyle(BOLD);
    o.textSize(20);
    o.text(itemData.data[homie].name,10,20);
    o.textSize(20);
    o.text("Stats:",105,43);
    o.textSize(12);
    var str = itemData.data[homie].description;

    var stats = str.substring(0, str.lastIndexOf('</stats>'));
    stats = stats.replace( /<.*?\>/g, '' );
  
    var statterino = stats.split(" ");
    statterino.shift();

    for (let index = 0; index < statterino.length-1; index++) {
        if (isNaN(statterino[index].replace( /%/g,""))==false){
             count = 1;
             while (index+count<statterino.length && isNaN(statterino[index+count].replace( /%/g,""))){
                statterino[index]=statterino[index]+" "+statterino[index+count];
                count++;
            }

        } 
        
    }
    var unfinished=true;
    while(unfinished){
        unfinished=false
    for (let ing = 0; ing < statterino.length; ing++) {
        if (isNaN(statterino[ing][0])){
            statterino.splice(ing,1);
            unfinished=true;
        }
    }
    
}

    for (let index = 0; index < statterino.length; index++) {
        o.text(statterino[index], 105, 60+(15*index));
    }

var bonus = str.split('<rarityMythic>')[1];
bonus = bonus.split('<rules>')[0];
bonus = bonus.replace( /<.*?\>/g, '' );

if (itemData.data[homie].name.includes("Divine")){
bonus = bonus + " and 5% Magic penetration.";
}


o.textSize(10);
o.text(bonus,10,115,290,50);

console.log();
o.textSize(15);
o.text("Total cost: "+itemData.data[homie].gold.total+" schekels",10,155);   

}



o.drawImg = function(numb){
    var imgPath = "http://ddragon.leagueoflegends.com/cdn/10.25.1/img/item/"+Object.keys(itemData.data)[numb]+".png";

    loadImage(imgPath, img => {
        o.image(img, 10, 25,85,85);
        });
}
o.datarino = function(numb){
    return itemData.data[Object.keys(itemData.data)[numb]];
}

    
}


var myp51 = new p5(sketch1);
var myp52 = new p5(sketch2);

function setup(){
    ITEMMAX = Object.keys(itemData.data).length-1;

myp51.setup();
createCanvas(2,170);
background(0);
myp52.setup();





}



function clonk(){
myp51.background(200);
myp52.background(150);
}
