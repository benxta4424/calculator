    let operator=''
    let a=''
    let b=''
    let checkFirst=true
    let result=0

    const corpCalculator=document.querySelector('.butoane')

    const butttons = '789%456*123-0.+='

    const operators = ['+', '-', '*', '/', '%'];

    const numbers=['0','1','2','3','4','5','6','7','8','9']

    for(let numberOFKeys=0;numberOFKeys<butttons.length;numberOFKeys++)
        {
            const addKeys=document.createElement('button')
            addKeys.className='butoaneAdaugare'
            addKeys.name=butttons[numberOFKeys]
            addKeys.textContent=butttons[numberOFKeys]
            corpCalculator.appendChild(addKeys)
        }


    
    function add(a,b)
    {
        return a+b
    }

    function substract(a,b)
    {
        return a-b
    }

    function multiply(a,b)
    {
        return a*b
    }

    function procent(a,b)
    {
        return a%b
    }
    
   const displayShow=document.querySelector('.display')

   corpCalculator.addEventListener('click',(event)=>
{
    let alegeButon=event.target.name

   if(numbers.includes(alegeButon)||alegeButon.includes('.'))
    {
        if(checkFirst)
            {
                a+=alegeButon
                displayShow.textContent=a
            }
        else
        {
            b+=alegeButon
            displayShow.textContent=b
        }
    }
    else if(operators.includes(alegeButon))
        {
            checkFirst=false
            operator=alegeButon
        }

    else if(alegeButon==='=')
        {
        
        result=parseFloat(result)
        let elUnu=parseFloat(a)
        let elDoi=parseFloat(b)
        switch(operator)
         {
        case '+':
            result=add(elUnu,elDoi)
        break

        case '-':
            result=substract(elUnu,elDoi)
        break

        case '*':
            result=multiply(elUnu,elDoi)
        break

        case '%':
            result=procent(elUnu,elDoi)
        break
         }
         displayShow.textContent=result
         a=result
         b=''
         result=''
        }   

    
    
})
        
