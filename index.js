let headerSection = document.querySelector('.header-section');
let rightArea = document.querySelector('.right-area');
let button = document.getElementById('button');

function generateColor () {              
    let haxColors = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f'];
    let color = '#';
  for ( let i = 0 ;  i < 6  ;  i++) {       
    let num = Math.round(Math.random()*15);
    let num2 = haxColors[num];
     color += num2;
     console.log(color);
  }
  
  rightArea.style.backgroundColor = color;

  
    }
   
   
    function audioPlay(){ 
   
      
      
      
      
      
            
  var audio = new Audio('/valobasbore.mp3');
  audio.play();

      
      
    }

    headerSection.addEventListener("click", generateColor )


    
    var num = 0;

    headerSection.addEventListener("click", function (){
        
        num++;
        console.log(typeof num)

       
        if(num === 1) {
            var audio = new Audio("/valobasbore.mp3");
            audio.play();
        }else if(num ===4){
            alert("Oi beta koto bar click koros")
        }
    
    


    } )

