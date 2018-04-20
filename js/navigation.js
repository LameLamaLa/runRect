   var aboutPage =2;
   
   var aboutText1 ="Автор - Смирнов Владислав" ;
   var aboutText2 ="<p> Вы управляете квадратом через клавиши :A , S , D , W , Spase .   Цель игры  не столкнуться  с падающими объектами .</p> <p> Для усложнения игры  вы  можете поменять значения  скорости и количество падающих объектов  в настройках. </p>";
   var aboutText3 ="<p> Приложение было создано с использованием языка программирования javascript , технологий: css , html5 , canvas . Из сторонних библиотек использовано jquery </p><p>Обновления:</p><p>1.Исправлена ошибка с границами .</p><p>2.Исправлена ошибка  с объектом 'шип' (выпирающие  шипы были неактивны).</p><p>3.добавлена возможность игры на телефонах,планшетах</p><p>В следующих обновлениях планируется добавить : </p> <p>1. бонусы (ускорение , защита).</p><p>2. Систему уровней. </p>   ";





   
  $("#wrapperCanvas").hide();
  $("#about").hide();
  $("#option").hide();
  
$( "#optionExitButton" ).click(function() {
   
   $("#meny").show();//"slow"
   $("#option").hide();
 
   
 
   
});

 $( "#optionButton" ).click(function() {
   
   $("#option").show();//"slow"
   $("#meny").hide();
   
});


$( "#startButton" ).click(function() {
   
   $("#wrapperCanvas").show();//"slow"
   $("#meny").hide();
   startGame=true;
   
   
});


$( "#aboutButton" ).click(function() {
   
   $("#about").show();//"slow"
  
   $("#meny").hide();
   
   
});
$( "#aboutExitButton" ).click(function() {
   
   $("#about").hide();//"slow"
  
   $("#meny").show();
   
   
});
$( "#aboutNextButton" ).click(function() {
   aboutPage++;
   if(aboutPage==4)
     aboutPage=1;
  
   switch(aboutPage){
     case 1 :  $("#aboutText").html( aboutText1);
	           $("#aboutHeader1").text( "создание");
			   $("#aboutHeader2").text( "автор");
			  // $("#aboutHeader2").css("color:red;"); 
			   $("#aboutHeader3").text( "правила");
	 break;
     case 2 :  $("#aboutText").html( aboutText2);
	           $("#aboutHeader1").text( "автор");
			   $("#aboutHeader2").text("правила" );
			   $("#aboutHeader3").text("создание " );
	 break;
     case 3 :  $("#aboutText").html( aboutText3);
	           $("#aboutHeader1").text("правила" );
			   $("#aboutHeader2").text("создание");
			   $("#aboutHeader3").text( "автор");
	 break;
   }
   
});

$( "#aboutLastButton" ).click(function() {
   aboutPage--;
   if(aboutPage==0)
     aboutPage=3;
  
   switch(aboutPage){
     case 1 :  $("#aboutText").html( aboutText1);
	           $("#aboutHeader1").text( "создание ");
			  
			   $("#aboutHeader2").text( "автор");
			  // $("#aboutHeader2").css("color:red;"); 
			   $("#aboutHeader3").text( "правила");
	 break;
     case 2 :  $("#aboutText").html( aboutText2);
	           $("#aboutHeader1").text( "автор");
			   $("#aboutHeader2").text("правила" );
			   $("#aboutHeader3").text("создание " );
	 break;
     case 3 :  $("#aboutText").html( aboutText3);
	           $("#aboutHeader1").text("правила" );
			   $("#aboutHeader2").text("создание ");
			   $("#aboutHeader3").text( "автор");
	 break;
   }
   
});














