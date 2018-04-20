 
var creatBlockageLevel1 = function (x,y) {

  var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 0+x;
  creatPolyCord[0].y = 0+y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =100+x;
  creatPolyCord[1].y = 0+y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x =100+x;
  creatPolyCord[2].y =10+y;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 0+x;
  creatPolyCord[3].y = 10+y;
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel1(creatPolyCord ,50+x,5+y);
   blockagePolygon[id].vy = 1 +maxSpeed*0.1;
  blockagePolygon[id].moveAngle= getRandomArbitrary(-1-maxSpeed*0.1, 1+maxSpeed*0.1);
  blockagePolygon[id].updatePlanetaryCord();
/**/

 }
 
 
 var creatBlockageLevel2 = function (x,y) {
  var moveAngle = getRandomArbitrary(-1 - maxSpeed*0.1, 1+maxSpeed*0.1);
  var vy = 1 +maxSpeed*0.1;
  
  var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 0+x;
  creatPolyCord[0].y = 0+y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =10+x;
  creatPolyCord[1].y = 0+y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x =10+x;
  creatPolyCord[2].y =100+y;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 0+x;
  creatPolyCord[3].y = 100+y;
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel2(creatPolyCord ,90+x,50+y);
   blockagePolygon[id].vy = vy;
  blockagePolygon[id].moveAngle= moveAngle;
  blockagePolygon[id].updatePlanetaryCord();
  
  
  
    var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 40+x;
  creatPolyCord[0].y = 130+y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =140+x;
  creatPolyCord[1].y = 130+y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x =140+x;
  creatPolyCord[2].y =140+y;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 40+x;
  creatPolyCord[3].y = 140+y;
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel2(creatPolyCord ,90+x,50+y);
   blockagePolygon[id].vy = vy;
  blockagePolygon[id].moveAngle = moveAngle;
  blockagePolygon[id].updatePlanetaryCord();
  
  
  
    var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 40+x;
  creatPolyCord[0].y = -40+y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =140+x;
  creatPolyCord[1].y = -40+y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x = 140 + x;
  creatPolyCord[2].y = -30 + y ;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 40 + x;
  creatPolyCord[3].y = -30 + y;
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel2(creatPolyCord ,90+x,50+y);
   blockagePolygon[id].vy = vy;
  blockagePolygon[id].moveAngle= moveAngle;
  blockagePolygon[id].updatePlanetaryCord();
  
  
    var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 170+x;
  creatPolyCord[0].y = 0+y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =180+x;
  creatPolyCord[1].y = 0+y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x =180+x;
  creatPolyCord[2].y =100+y;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 170+x;
  creatPolyCord[3].y = 100+y;
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel2(creatPolyCord ,90+x,50+y);
   blockagePolygon[id].vy = vy;
  blockagePolygon[id].moveAngle= moveAngle;
  blockagePolygon[id].updatePlanetaryCord();
/**/

 }
 
 
 
 var creatBlockageLevel3 = function (x,y) {

  var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 20 + x;
  creatPolyCord[0].y = 0 + y;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =20 + x;
  creatPolyCord[1].y = -10 + y;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x = 20 + x;
  creatPolyCord[2].y = -20 + y;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 10 + x;
  creatPolyCord[3].y = -20 + y;
  
    creatPolyCord[4]= new vector();
  creatPolyCord[4].x = 0+x;
  creatPolyCord[4].y = -20+y;
  
  creatPolyCord[5]= new vector();
  creatPolyCord[5].x = -10 +x;
  creatPolyCord[5].y = -20 +y;
  
  creatPolyCord[6]= new vector();
  creatPolyCord[6].x = -20 + x;
  creatPolyCord[6].y = -20 + y;
  
  creatPolyCord[7]= new vector();
  creatPolyCord[7].x = -20+x;
  creatPolyCord[7].y = -10+y;
  
  
    creatPolyCord[8]= new vector();
  creatPolyCord[8].x = -20+x;
  creatPolyCord[8].y = 0+y;
  
  creatPolyCord[9]= new vector();
  creatPolyCord[9].x = -20 + x;
  creatPolyCord[9].y = 10 + y;
  
  creatPolyCord[10]= new vector();
  creatPolyCord[10].x = -20 + x;
  creatPolyCord[10].y = 20 +y;
  
  creatPolyCord[11]= new vector();
  creatPolyCord[11].x = -10 + x;
  creatPolyCord[11].y = 20+ y;
  
    creatPolyCord[12]= new vector();
  creatPolyCord[12].x = 0+x;
  creatPolyCord[12].y = 20+y;
  
  creatPolyCord[13]= new vector();
  creatPolyCord[13].x =10+x;
  creatPolyCord[13].y = 20+y;
  
  creatPolyCord[14]= new vector();
  creatPolyCord[14].x =20+x;
  creatPolyCord[14].y =20+y;
  
  creatPolyCord[15]= new vector();
  creatPolyCord[15].x = 20+x;
  creatPolyCord[15].y = 10+y;
  
  
   var id =  blockagePolygon.length;
   
   blockagePolygon[id]= new polygonBlockageLevel3(creatPolyCord , x , y);
   blockagePolygon[id].vy=1+maxSpeed*0.1;
  blockagePolygon[id].moveAngle= getRandomArbitrary(-1-maxSpeed*0.1,1+maxSpeed*0.1);
  blockagePolygon[id].updatePlanetaryCord();
     blockagePolygon[id].maxRadius = 62;
/**/

 }
 
 
 
 
 
 
 
 
 
 
 var newGame =   function() {
 
  var xp=width/2;
  var yp =height/2;
  var creatPolyCord = [];
  creatPolyCord[0]= new vector();
  creatPolyCord[0].x = 0+xp;
  creatPolyCord[0].y = 0+yp;
  
  creatPolyCord[1]= new vector();
  creatPolyCord[1].x =10+xp;
  creatPolyCord[1].y = 0+yp;
  
  creatPolyCord[2]= new vector();
  creatPolyCord[2].x =10+xp;
  creatPolyCord[2].y =10+yp;
  
  creatPolyCord[3]= new vector();
  creatPolyCord[3].x = 0+xp;
  creatPolyCord[3].y = 10+yp;

   
     plaer= new polygonPlaer(creatPolyCord ,width/2,height/2);
     plaer.updatePlanetaryCord();
	 plaer.moveAngle = 0;
 
 
 }
 
 
 