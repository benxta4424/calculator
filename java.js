    let elementPrim=''
    let elementSecund=''
    let operator=''
    let numberOFKeys=1
    const corpCalculator=document.querySelector('.butoane')

    const butttons = '789%456*123-0.+='
    
    

    for(numberOFKeys=0;numberOFKeys<16;numberOFKeys++)
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

    corpCalculator.addEventListener('click',(event)=>
    {

        const displayAfis=document.querySelector('.display')
        if(event.target.className==='butoaneAdaugare')
            {
                const value=event.target.name
                elementPrim=value
                console.log(value)
            }
        displayAfis.textContent=elementPrim
    })