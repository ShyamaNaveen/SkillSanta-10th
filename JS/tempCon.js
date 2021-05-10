function celTofah()
{
    let celTmp=document.getElementById("txtcel").value
    let fahTmp=(celTmp*1.8)+32
    document.getElementById("msgcel").style.display="block"   
    document.getElementById("msgcel").innerHTML=celTmp +" degree Celsius is equal to " +fahTmp +" Fahrenheit"

}

function fahTocel()
{
    let fahTmp=document.getElementById("txtfah").value
    let celTmp=(fahTmp-32)/1.8
    document.getElementById("msgfah").style.display="block"   
    document.getElementById("msgfah").innerHTML=fahTmp +" Fahrenheit is equal to " +celTmp +" Celsius"
    
}
   