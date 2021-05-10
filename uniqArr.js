function difference(arr1,arr2,uniqarr)
{
    let flag=0
    for(i=0;i<arr1.length;i++)
     {
        let flag=0
         for(j=0;j<arr2.length;j++)
         {
             if(arr1[i]===arr2[j])
             {
                 flag=1
                 arr2.splice(j,1)
                 j--
             }
             
         }        
            uniqarr.push(arr1[i])     
         
     }

     uniqarr.push(arr2)
     return uniqarr    

}


let arr1=[1,2,3]
let arr2=[00, 2, 1, 10]
let uniqarr=[]
console.log(difference(arr1,arr2,uniqarr).flat())