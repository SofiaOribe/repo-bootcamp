const FactorialWhile = () => {
    let f = 1;
    let i=1;
    while(i<=10) {
        f = f*i;
        i++;
    }

    console.log(`El factorial de 10 es: ${f}`);
}

FactorialWhile();