// Explain the working and understanding of closures

function fn(){
    const myName = "Manas"
    function fn1(){
        console.log(myName)
    }
    fn1()
}
fn()