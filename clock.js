const clock=document.querySelector('#clock')

setinterval(function(){// this used to run time in per second..
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
