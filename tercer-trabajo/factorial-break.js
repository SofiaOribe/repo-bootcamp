const FactorialBreak = () => {
    let f = 1;
    let i=1;
    while(i<=10) {
        if(i===10){
            break;
        }
        f = f*i;
        i++;
    }

    console.log(`El factorial de 10 es: ${f}`);

}

FactorialBreak();