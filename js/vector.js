  
  const EPS = 0.01;
 
  // структура  вектора
  
 var vector = function (x,y){
    
    this.x = x;
    this.y = y;
	
  }
  
  // Возвращаем вектор  из двух точеу  E - B 
  
 var getVectorEB =  function(E , B) {
 
   var ans = new vector();
   ans.x =  E.x - B.x;
   ans.y =  E.y - B.y;
   return  ans;
 
 }
  // Возвращаем векторное произведение
  
 var getVectorProduct = function (a , b) {
 
   return a.x * b.y - a.y * b.x;
 
 
 }
  // Возвращаем скалярное произведение
  
  var getScalarProduct = function (a , b) {
 
   return a.x * b.x + a.y * b.y;
 
 }
  // Возвращаем длинну между двумя векторами 
  
 var getLong = function (a , b) {
 
   return Math.sqrt( (a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y));
 
 
 }
 
 // Возвращаем угол между двумя векторами 
 
 var getAngle = function (a , b) {
 
   var sc = getScalarProduct(a,b);
   
   var ve = getVectorProduct(a,b);
   
   return Math.atan2( ve , sc) / Math.PI * 180;
 
 
 }
 
  // Возвращает true если есть коллизия  полигона и точки  ,полигон массив  структуры vector 
  
 var searchConflict = function (polygon , a) {
   
   var angleSum = 0;
   
   for (var i = 0; i <  polygon.length - 1; ++i) {
   
      angleSum += getAngle( getVectorEB(polygon[i] , a) , getVectorEB(polygon[i + 1] , a) );
	  	 
   }
      angleSum += getAngle( getVectorEB(polygon[ polygon.length - 1] , a) , getVectorEB(polygon[0] , a) );
	  

    
   if ( Math.abs(angleSum) > 360 - EPS  && Math.abs(angleSum)  < 360 + EPS )
     return 1;
   else
     return 0;   
	 
	
 }
 
 
 
 
   
 
 
 
 