const skipbutton = document.getElementById('skipbutton');
const mk = document.getElementById('mk');
const monkeyking = document.querySelector('.monkey-king');
const gas = document.getElementById('gas');
const gas2 = document.getElementById('gas2');
const contents = document.querySelectorAll('.content');
const startover = document.getElementById('startover');
var current = document.querySelector('.content.current');
gas.style.visibility = 'hidden';
gas2.style.visibility = 'hidden';
startover.style.visibility = 'hidden';

monkeyking.style.left = `${ current.offsetLeft-monkeyking.offsetWidth/2+current.offsetWidth/2}px`;

skipbutton.addEventListener('click',()=>{
    gas.style.visibility = 'visible';
    monkeyking.classList.add('skipping');
    mk.classList.add('skipping');
    skipbutton.style.visibility = 'hidden';
    gas.classList.add('skipping');
    if(current.nextElementSibling.classList.contains('content')){
        current = current.nextElementSibling;

        monkeyking.style.left = `${ current.offsetLeft-monkeyking.offsetWidth/2+current.offsetWidth/2}px`;
        setTimeout(()=>{
            gas2.classList.add('skipping');
            gas2.style.visibility = 'visible';
        },500)
        setTimeout(()=>{
            current.previousElementSibling.classList.remove('current');
            monkeyking.style.left = `${ current.offsetLeft-monkeyking.offsetWidth/2+current.offsetWidth-current.previousElementSibling.offsetWidth/2}px`;
            current.classList.add('current');
            
            monkeyking.classList.remove('skipping');
            if(current.nextElementSibling.classList.contains('content')){
                skipbutton.style.visibility = 'visible';
            }else{
                setTimeout(()=>{
                    startover.style.visibility = 'visible';
                },3000)
                
               
            }
            
            gas.classList.remove('skipping');
            mk.classList.remove('skipping');
            gas.style.visibility = 'hidden';
            gas2.classList.remove('skipping');
            gas2.style.visibility = 'hidden';
        },2000)
    }
   
});

startover.addEventListener('click',()=>{
    startover.style.visibility = 'hidden';
    var width = current.offsetWidth;
    current.classList.remove('current');
    current = contents[0];
    monkeyking.style.left = `${ current.offsetLeft-monkeyking.offsetWidth/2+current.offsetWidth/2}px`;
    monkeyking.classList.add('skipping');
    mk.classList.add('skipping2');
    setTimeout(()=>{
        current.classList.add('current');
        monkeyking.style.left = `${ current.offsetLeft-monkeyking.offsetWidth/2+width/2}px`;
        skipbutton.style.visibility = 'visible';
        monkeyking.classList.remove('skipping');
        mk.classList.remove('skipping2');
    },2000);
})
