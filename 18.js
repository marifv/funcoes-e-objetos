function clonarObjeto(objeto) {
    return Object.assign({}, objeto);
}

const originalObjeto = { a: 1, b: 2, c: 3 };
const clone = clonarObjeto(originalObjeto);
console.log(clone);