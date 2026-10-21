//devoleper adi hazzan , sharbel jadoun
//this code prints all the prime numbers below 237
function isprime(num)
{//this function receives a number and returns true if prime
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
{//this function calls the isprime function and prints all the prime numbers
    for(let i=2;i<237;i++)
    {
       if( isprime(i))
        {
            console.log(i);
        }
    }
}
checknum();
