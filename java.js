    let operator=''
    let elementPrim=''
    let elementSecund=''
    let emptyDiv=''
    let checkNumPrim=true
    const corpCalculator=document.querySelector('.butoane')

    const butttons = '789%456*123-0.+='

    const operators = ['+', '-', '*', '/', '%'];

    const numbers=['0','1','2','3','4','5','6','7','8','9']

    function checkOperators(str)
    {
        for(let i=0;i<str.length;i++)
            {
                if(operators.includes(str[i]))
                    {
                        console.log(str[i])
                        return true
                    }
            }
    }

    function removeResult()
    {
        return displayShow.textContent=null
    }

    function rezultat(rez)
    {
        rez=parseFloat(rez)
        return rez
    }

    function findTheComma(rez)
    {
        let index=0
        let countdown=0
        let lungime=rez.toString()
        let caracterCautat=lungime.split('')
        for(let i=0;i<caracterCautat.length-1;i++)
            {
                if(rez[i]===',')
                   { index=i
                    break
                   }
            }
        if(index===0)
            return true

        for(let i=caracterCautat-1;i>index;i--)
            {
                if(charAt(caracterCautat.length-1)==='0')
                   { rez.pop()
                    countdown++
                   }
                   else
                   {break}
            }
        return countdown
    }

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
            let value=event.target.name
            let result=0
        
                if(checkNumPrim)
                {
                    if(!checkOperators(value))
                        {
                            elementPrim+=value
                            displayShow.textContent=elementPrim
                        }
                    else
                    {
                        checkNumPrim=false
                        operator+=value
               
                    }
                }
                else
                {
                    elementSecund+=value
                    displayShow.textContent=elementSecund
                }

                if(value==='=')
                {
                    let result=parseFloat(rezultat)
                    let elementUnu=parseFloat(elementPrim)
                    let elementDoi=parseFloat(elementSecund)

                    switch(operator)
                    {
                        case '+':
                            result=add(elementUnu,elementDoi)
                        break

                        case '-':
                            result=substract(elementUnu,elementDoi)
                        break

                        case '*':
                            result=multiply(elementUnu,elementDoi)
                        break

                        case '%':
                            result=procent(elementUnu,elementDoi)
                        break
                    }
                    if(Math.floor(result)===result)
                        displayShow.textContent=result
                    else
                        displayShow.textContent=result.toFixed(findTheComma(result))
                }
        
                
        })
        
