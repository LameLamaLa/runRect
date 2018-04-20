var polygon = function(creatPolyCord, xc , yc) {

  
  this.polyCord = creatPolyCord;
  
  this.vx=0;
  this.vy=0;
  this.color ='black';
  
  this.moveAngle = 1;
  
  this.center = new vector();
  
  this.center.x = xc;
  this.center.y = yc;
  
   
  this.planetaryCord = [];
  
  this.maxRadius;



   
  this.draw = function () {

   
    ctx.beginPath();
	
    ctx.strokeStyle = this.color;
	
	ctx.fillStyle = this.color;
	  

    ctx.moveTo( this.polyCord[0].x , this.polyCord[0].y);

	 
  	for(i in this.polyCord) {
	 
	  ctx.lineTo(this.polyCord[i].x , this.polyCord[i].y);
	 
	}
	
		  
    ctx.fill();
   
   // ctx.stroke();
	
    ctx.closePath();

  }
  this.newMove = function() {
     this.vy*=0.999;
     this.vx*=0.999;
    
  }  
  
  this.newCordLevel = function() {}
  
  this.newCord = function() {
  
  
    for(i in  this.planetaryCord) {
	
	  this.planetaryCord[i].y += this.moveAngle ; 
	  
	}
	
   for(i in  this.polyCord) {
	
	//ctx.strokeText(   planetaryCord[i].y ,300,(i+1)*10); 
//ctx.strokeText(   planetaryCord[i].x * Math.cos(planetaryCord[i].y) + this.center.y,300,(i+1)*10); 

     this.polyCord[i].x = this.planetaryCord[i].x * Math.cos(this.planetaryCord[i].y * Math.PI / 180) + this.center.x ; 
	 this.polyCord[i].y = this.planetaryCord[i].x * Math.sin(this.planetaryCord[i].y * Math.PI / 180 ) + this.center.y ; 
	  
	  
	}
	
   
    this.center.x += this.vx;
	this.center.y += this.vy;
	 

   
  }
  
   this.updatePlanetaryCord = function() {
   
    this.maxRadius = 0;
	
    for (i in this.polyCord) {
       this.planetaryCord[i] = new vector();
	   
	   this.planetaryCord[i].x = getLong(this.center , this.polyCord[i] ) //радиус 
	    
	   this.maxRadius = Math.max(this.maxRadius ,  this.planetaryCord[i].x) ;
		
	   var axisOX = new vector();
	   
	   axisOX.x = this.center.x + 1;
	   
	   axisOX.y = this.center.y ;
	   
	   var a = getAngle( getVectorEB( this.polyCord[i] , this.center) , getVectorEB(axisOX , this.center) );

	    
	   if (a<0) 
	     a = 360 + a;
		 
	 //ctx.strokeText(  a,300,(i+1)*10);
	  
	   this.planetaryCord[i].y = a //угол
	     
     }
  
  
  
  }

  this.searchConflictPolygon = function(masPolygon) {

  var flag= false;

	for (i in  masPolygon) {
		
	 if(this.maxRadius + masPolygon[i].maxRadius < getLong(this.center ,masPolygon[i].center))
	   continue; 
	
	   

	  for (j in  masPolygon[i].polyCord) {
	  
	    if(flag)
          break;
		
        if(searchConflict(this.polyCord , masPolygon[i].polyCord[j])) 
		  flag = true;
		 /* */ 	
	  }
	
     for (j in  this.polyCord) {
	  
	    if(flag)
          break;
		 
        if(searchConflict(masPolygon[i].polyCord , this.polyCord[j])) 
		  flag = true; 
		  	
	  }
	  
    } 
	 
  return flag;
 
  }
  
     this.movedBorder = function(h) {
  
   var flag = true;
	
    for( i in this.polyCord) {
	
	  if(!flag)
	    break;

	  if (this.polyCord[i].y < h) {
	    flag =false;
	  }
	 
	}
    return flag;
	
  
  }
  
  
 
}


var polygonPlaer = function(creatPolyCord, xc , yc) {
polygon.call(this,creatPolyCord,xc, yc);

  this.newCordLevel = function() {
  
    /*if(this.center.y < 10  ) {
	   this.vy =0;
	   this.center.y =10;
	 }
	 
	 if(this.center.y > height   ) {
	   this.vy =0;
	   
	   this.center.y = height ;
	 }
	 
	  if( this.center.x < 0  ) {
	   
	   this.vx =0;
	   this.center.x =0;
	 }
	 
	 if( this.center.x > width - 10   ) {
	   
	   this.vx =0;
	   this.center.x =width - 10 ;
	 }*/
  
  
  }

}


var polygonBlockageLevel2 = function(creatPolyCord, xc , yc) {
polygon.call(this,creatPolyCord,xc, yc);
 this.vr= -0.2; 
      this.center2Id ;

     this.newCordLevel = function() {
    
	  
	
     for(i in  this.planetaryCord) {
	  if (this.planetaryCord[i].x<0)
	  this.vr=0.2;
	  if (this.planetaryCord[i].x>100)
	  this.vr=-0.2;
	  this.planetaryCord[i].x += this.vr ; 
	  
	}
	
	
}
}
var polygonBlockageLevel1 = function(creatPolyCord, xc , yc) {
  polygon.call(this,creatPolyCord,xc, yc);
  

 
    /*this.center2 = new vector();*/
    

 
    /*this.center2 = this.polyCord[this.center2Id];
	
	
	
    //this.maxRadius = 0;
	
    for (i in this.polyCord) {
	
       this.planetaryCord[i] = new vector();
	   
	   this.planetaryCord[i].x = getLong(this.center2 , this.polyCord[i] ) //радиус 
	    
	  // this.maxRadius = Math.max(this.maxRadius ,  this.planetaryCord[i].x) ;
		
	   var axisOX = new vector();
	   
	   axisOX.x = this.center2.x + 1;
	   
	   axisOX.y = this.center2.y ;
	   
	   var a = getAngle( getVectorEB( this.polyCord[i] , this.center2) , getVectorEB(axisOX , this.center2) );

	    
	   if (a<0) 
	     a = 360 + a;
		 
	 //ctx.strokeText(  a,300,(i+1)*10);
	  
	   this.planetaryCord[i].y = a //угол
	     
     }
  
  

     this.polyCord[this.center2Id]+=0;
     this.center2 = this.polyCord[this.center2Id];
  
   
  
  

	
   for(i in  this.polyCord) {
	


     this.polyCord[i].x = this.planetaryCord[i].x * Math.cos(this.planetaryCord[i].y * Math.PI / 180) + this.center2.x ; 
	 this.polyCord[i].y = this.planetaryCord[i].x * Math.sin(this.planetaryCord[i].y * Math.PI / 180 ) + this.center2.y ; 
	  
	  
	}*/
  
  
  
  
  }
  
var polygonBlockageLevel3 = function(creatPolyCord, xc , yc) {

  this.vr = 3;
  this.timer = 100;
  polygon.call(this,creatPolyCord,xc, yc);
  
  this.newCordLevel = function() {
  
    for(i in  this.planetaryCord) { 
	
	   if (this.timer > 0) {
	     this.timer--;
		 break;
	   }
	   if(this.timer == 0){
	     this.vr =3;
		 this.timer--;
	   }
	     
  
      if (i == 0  ||   i == 4 ||   i == 8 ||   i == 12){
	  
	     
		
	    if(this.planetaryCord[0].x > 60)	
		  this.vr =-0.5;
		if(this.planetaryCord[0].x < 20) {
  		  this.timer = 100;
		 // this.planetaryCord[0].x =20;
		this.planetaryCord[0].x =20;
		  this.vr = 0;
		}
		
		if(this.planetaryCord[i].x < 20) 
	       this.planetaryCord[i].x =20;
		   
	    this.planetaryCord[i].x += this.vr;
		
		}
		}
  
    }
  }
  
  
















