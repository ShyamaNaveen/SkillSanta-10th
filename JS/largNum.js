function largNum()
{
    
   // prompt("Enter your second Number")
    let max = -Infinity
    for (i=0;i<arguments.length;i++)
    {
        if(arguments[i]>max)
        {
           max=arguments[i];
        }
    }
    console.log("The biggest number is "+max)
    document.write("The biggest number is "+max)
}

let firstNum=window.prompt("Enter your first Num")
let seconNum=window.prompt("Enter your second Number")
let thrdNum=window.prompt("Enter your third Number")

largNum(firstNum,seconNum,thrdNum)