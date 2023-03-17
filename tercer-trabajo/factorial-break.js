const FactorialBreak = () => {
    let f = 1;
    let i=10;
    while(true) {
        f*=i;
        i--;
        if(i===1){
            break;
        }

    }

    console.log(`El factorial de 10 es: ${f}`);

}

FactorialBreak();