function strip_tags(str)
{
    if((str===null )|| (str===""))
    {
        return false
    }
    else
    {
        str=str.toString()
        return str.replace(/<[^>]*>/g,'')
    }

}

let str='<p><strong><em>SkillSantaAssignments</em></strong></p>'
let reqStr=strip_tags(str)
console.log(reqStr)