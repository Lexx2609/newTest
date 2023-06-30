let a = document.querySelector('#one')
let b = document.querySelector('.check')
function sum(a, b) {
    return a + b
}
b.onclick = function (){
    a.innerHTML = `<h1>${sum(10,2)}</h1>`
}
function res0(a, b) {
    return a + b
}
let q = document.querySelector('.plus')
q.onclick = function (){
    a.innerHTML = `<h1>${res0(10,2)}</h1>`
}
function res(a, b) {
    return a * b
}
let c = document.querySelector('.multi')
c.onclick = function (){
    a.innerHTML = `<h1>${res(10,2)}</h1>`
}
function res1(a, b) {
    return a / b
}
let d = document.querySelector('.division')
d.onclick = function (){
    a.innerHTML = `<h1>${res1(10,2)}</h1>`
}
function res2(a, b) {
    return a - b
}
let e = document.querySelector('.minus')
e.onclick = function (){
    a.innerHTML = `<h1>${res2(10,2)}</h1>`
}