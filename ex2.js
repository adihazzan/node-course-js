let num = 237;
let flag =true;
for(let i=2;i<237;i++)
{
    flag=true;
    if(num%i==0)
        flag=false;
        for(let j=2;j<237;j++)
        {
            if(flag)
                console.log(j);
        }
        
}