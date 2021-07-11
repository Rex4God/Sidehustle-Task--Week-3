let counterValue = document.querySelector("#counterValue");
 let decrement = document.querySelector("#decrement"); 
 let increment = document.querySelector("#increment");
  let count= 0;
  increment.addEventListener("click",()=>{ 
    counterValue.innerText = count;
      count++; 
      if(count >=51){
          count =50;
      }
     }) ; 
     decrement.addEventListener("click",()=>{ 
        counterValue.innerText = count;
         count--; 
         if(count <= -1)
         {
             count =0;
         }      
 }); 
 