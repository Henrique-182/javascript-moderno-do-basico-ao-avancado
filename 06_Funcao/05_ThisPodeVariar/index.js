
// Browser
function f1() {
    console.log(this === window)
}

f1()

const f3 = () => console.log(this === window)
document.getElementsByTagName('body')[0].onclick= f3
