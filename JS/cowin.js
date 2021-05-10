function calAge()
{
    
    let dob=document.getElementById("dob").value
    let d=new Date(dob)    
    
    let today=new Date();
     let ageLmt=today.getFullYear()- d.getFullYear();
    
    document.getElementById("disdob").innerHTML=ageLmt
    if (ageLmt>=18 && ageLmt<=44)
     {
         window.open("https://selfregistration.cowin.gov.in")
     }

    
}