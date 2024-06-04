
    let numberOFKeys=1
    const corpCalculator=document.querySelector('.butoane')

    const butttons = '789%456*123-0.+='
    

    for(numberOFKeys=0;numberOFKeys<16;numberOFKeys++)
        {
            const addKeys=document.createElement('button')
            addKeys.className='butoaneAdaugare'
            addKeys.textContent=butttons[numberOFKeys]
            corpCalculator.appendChild(addKeys)
        }
