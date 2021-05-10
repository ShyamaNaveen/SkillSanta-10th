async function oddEven()
{
    
  let minNum=document.getElementById("txtmin").value 
  let maxNum=document.getElementById("txtmax").value   
  for(i=minNum;i<=maxNum;i++){ 

    await sleep(2000);  

    if(i%2==0)
      {
        msg="Even"           
           
      }

      else
      {
          msg="Odd"          
         
      }
    document.getElementById("dismsg").style.display="block"
    document.getElementById("dismsg").innerHTML=i+" is "+msg
   
  }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }