// console.log("hello world")




let element = document.getElementById('time')

element.innerHTML = time

setInterval(()=>{
    let date=new Date()
    // let hours= 
    // let minutes= 
    // let seconds=
    
    let time=`${date.getHours()}:${date.getMinutes()}:${ date.getSeconds()}`

    element.innerHTML = time

},1000)