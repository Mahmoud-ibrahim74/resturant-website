var BAR = document.getElementById("bar1");
var BAR2 = document.getElementById("bar2");
var page = document.getElementById("pages");
var hoverPage = document.getElementById("hoverPage");
var myOrder1 = document.getElementById("order1");
var myOrder2 = document.getElementById("order2");
var myOrder3 = document.getElementById("order3");
var myOrder4 = document.getElementById("order4");
var mySand = document.getElementById("sand");
var myPizza = document.getElementById("pizza");
var myChers = document.getElementById("chers");
var myTaco = document.getElementById("taco");
var mycontentBox1 =document.getElementById("contentBox1");
var mycontentBox2 =document.getElementById("contentBox2");
var mycontentBox3 =document.getElementById("contentBox3");
var mybookBox1 =document.getElementById("bookkBox1");
var mybookBox2 =document.getElementById("bookkBox2");
var mybookBox3 =document.getElementById("bookkBox3");


$(document).ready(function(){
    
    

    
    $(hoverPage).mouseenter(function(){
        
        $(page).fadeIn(300);
        
        
    });
   
    $(page).mouseleave(function(){
        
        
       $(page).fadeOut(300);
        
    });
    
    
   
    $(myOrder1).hide();
    $(myOrder2).hide();
    $(myOrder3).hide();
    $(myOrder4).hide();
    
 
   $(mySand).mouseenter(function(){
       
       
       $(myOrder1).slideDown(300);
       
     
       
       
   });
    
    $(mySand).mouseleave(function(){
        
        
        $(myOrder1).slideUp(2000);
        
    });
    
    
    
     $(myPizza).mouseenter(function(){
       
       
       $(myOrder2).slideDown(600)
     
       
       
   });
    
    $(myPizza).mouseleave(function(){
        
        
        $(myOrder2).slideUp(600);
        
    });
    
    
     $(myChers).mouseenter(function(){
       
       
       $(myOrder3).slideDown(600);
     
       
       
   });
    
    
    
    $(myChers).mouseleave(function(){
        
        
        $(myOrder3).slideUp(600);
        
    });
     $(myTaco).mouseenter(function(){
       
       
       $(myOrder4).slideDown(600);
     
       
       
   });
    
    $(myTaco).mouseleave(function(){
        
        
       $(myOrder4).slideUp(600);
        
    });
       $(mybookBox1).hide();
       $(mybookBox2).hide();
     $(mybookBox3).hide();
    $(mycontentBox1).mouseenter(function(){
                 
         $(mycontentBox1).animate({
          
            marginTop : "-50px",
            
         });    
     mycontentBox1.style.backgroundColor = "#101010db"; 
        $(mybookBox1).fadeIn(500);
        
});
        
     $(mycontentBox1).mouseleave(function(){
                 
         $(mycontentBox1).animate({
          
          
              marginTop : "1px",

         });   
             
    
        mycontentBox1.style.backgroundColor = "#101010a1";
          $(mybookBox1).fadeOut(500);
    
    }); 
    
        $(mycontentBox2).mouseenter(function(){
                 
         $(mycontentBox2).animate({
          
            marginTop : "-50px",
            
         });    
     mycontentBox2.style.backgroundColor = "#101010db"; 
        $(mybookBox2).fadeIn(500);
        
});
        
     $(mycontentBox2).mouseleave(function(){
                 
         $(mycontentBox2).animate({
          
          
              marginTop : "1px",
           

             
         });   
             
    
        mycontentBox2.style.backgroundColor = "#101010a1";
          $(mybookBox2).fadeOut(500);
    
    }); 
        $(mycontentBox3).mouseenter(function(){
                 
         $(mycontentBox3).animate({
          
            marginTop : "-50px",
            
         });    
     mycontentBox3.style.backgroundColor = "#101010db"; 
        $(mybookBox3).fadeIn(500);
        
});
        
     $(mycontentBox3).mouseleave(function(){
                 
         $(mycontentBox3).animate({
          
          
              marginTop : "1px",
           

             
         });   
             
    
        mycontentBox3.style.backgroundColor = "#101010a1";
          $(mybookBox3).fadeOut(500);
    
    }); 
    
    
    
    
    
    
    
});