//devoleper adi hazzan , sharbel jadoun

function isprime(num)
{
    if(num<2)
        return false;
for(let i=2;i<num;i++)
{
    if(num%i==0)
        return false;
}
return true;
}
//
function checknum()
{
    for(let i=2;i<237;i++)
    {
       if( isprime(i))
        {
            console.log(i);
        }
    }
}
//
checknum();