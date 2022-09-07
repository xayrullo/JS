let num = 0;
async function increment() {
    num += await 2;
    console.log(num);
}
increment();
num += 1;
console.log(num);

/* 
    * What is the resulting output?
    * Qanday natija chiqadi?
    * Каков результат?

    * 2, 3 *    x
    * 1, 3 *    x  
    * 1, 2 *    √
    * 2, 1 *    x
*/
