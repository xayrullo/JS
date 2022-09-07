console.log('a');                          // 1
let timmy = setTimeout(function() {
    console.log('b')                       // 3
}, 1)
let timothy = setTimeout(function() {
    console.log('c')                       // 5
}, 10)
let timer = setTimeout(function() {
    console.log('d')                       // 4
}, 0)
console.log('e')                           // 2

// what is the order of the output of the letters and why?
// harflarni chiqish tartibi qandey bo'ladi va nima uchun?
// каков порядок вывода букв и почему?
