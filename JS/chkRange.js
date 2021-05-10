function chkRange()
{
    let num1=document.getElementById("txtnum").value
    let min=document.getElementById("txtmin").value
    let max=document.getElementById("txtmax").value    

    if(num1>=min && num1<=max)
      {
          
         // document.write("Entered number")
         document.getElementById("result").innerHTML="Entered number is within the range"
      }
    else
    {
       // document.write()
       document.getElementById("result").innerHTML="Entered number is not within the range"
    }

    document.getElementById("txtmin").value=""
    document.getElementById("txtmax").value=""
    document.getElementById("txtnum").value=""

}