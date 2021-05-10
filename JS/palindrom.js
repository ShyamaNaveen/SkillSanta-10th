function chkPalindrome()
{
    let palStr=document.getElementById("txtdata").value
    let len=palStr.length
   
    for(i=0;i<len/2;i++)
        if(palStr[i]!==palStr[len-1-i])
        {
            return false
        }

    return true
}

function chkVal(){
    if(chkPalindrome())
    {
       
       document.getElementById("result").innerHTML="It's a palindrom"
    }
    else
    {
        prompt("Not a palindrome")
        document.getElementById("result").innerHTML="It's not a palindrom"
    }

}
