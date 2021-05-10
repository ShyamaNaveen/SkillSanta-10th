function vowels(msg)
{
    msg=msg.toUpperCase()
    let vowel_list = 'AEIOU';
 for(i=0;i<vowel_list.length;i++) 
   {
       let vcount=0;
    for(j=0;j<msg.length;j++)
    {
        if(vowel_list[i]==msg[j])
          {
               vcount+=1;
          }
    }
    console.log(vowel_list[i] +" : "+vcount);

  }
}

vowels("Hey This is Skillsanta JS Training");