// generate a random color

const randomcolor= function (){
    const hex=' 0123456789ABCDEF';
    let color='#';

    for(let i=0 ; i<=6; i++){
        color+= hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let intervalId;// it is accesible to all

const startchangingcolor=function(){
     intervalId=setinterval(changecolor,1000)
    function changecolor(){
        document.body.style.background=randomcolor()};
}

const stopchangingcolor=function(){
    clearInterval(intervalId);
};





document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);


