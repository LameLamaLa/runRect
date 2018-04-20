
 var print = function (s,x) {
  
  
 var ans = s;
 ctx.strokeText(ans,50+x,10)
  }
	 

  var clear = function () {
  
    ctx.fillStyle ='white';
    ctx.fillRect(0,0,width,height);
//ctx.fillRect(plaer.center.x-10,plaer.center.y-10,plaer.center.x+10,plaer.center.y+10);
  }
  
  



   
  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;

}
function drawStart(){
    ctx.beginPath();
	
    ctx.strokeStyle = '#000000';
	
	ctx.fillStyle = '#EEEEEE';
	  

    ctx.moveTo(450 + 10 ,10 );

	 ctx.lineTo(450+37,25);
	 ctx.lineTo(450+37,25);
     ctx.lineTo(450+10,40);
	 ctx.lineTo(450 + 10 ,10 );
		  
    ctx.fill();
   
    ctx.stroke();
	
    ctx.closePath();
	
	}