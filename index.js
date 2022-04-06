function operation(elem) 
         { 
             
           let val=(elem.innerHTML)
           if(document.getElementById("hello").value===undefined){
            document.getElementById("hello").value=""
           }
          document.getElementById("hello").value+=val ;
            console.log(document.getElementById("hello").value)
            document.getElementById("hello").innerHTML= document.getElementById("hello").value
         } 
           
        
         function calculate() 
         { 
             let x = document.getElementById("hello").value 
             let y = eval(x) 
             document.getElementById("hello").value = y 
             document.getElementById("hello").innerHTML= document.getElementById("hello").value
            
         } 
           
         
         function clean(v) 
         { 
        
             document.getElementById("hello").value="" ;
             document.getElementById("hello").innerHTML=""
         } 