let progress_div=document.querySelector('.progress-div');
let counter_div=document.querySelector('.counter-div');
let spanAll=document.querySelectorAll('.progress-div .container .row div div b span');
let h3ALl=document.querySelectorAll('.counter-div .container .row div div h3');
let progress_bars=document.querySelectorAll('.progress-bar');
window.onscroll=()=>{
    let  check="once";
    if(progress_div.getAttribute('data-scroll')=='in' && check=="once"){
        progress_bars.forEach((element,index)=>{
            let precentage=element.getAttribute('aria-valuemax');
            element.style.width=`${precentage}%`;  
            // spanAll[index].innerHTML=`${precentage}`; 
            let holder_interval=setInterval(() => {
                let holder_contetn_span=Number(spanAll[index].innerHTML);
                if(holder_contetn_span<Number(precentage)){
                    spanAll[index].innerHTML=String((holder_contetn_span+1));
                }  
                else{
                    clearInterval(holder_interval);
                }
            },40);  
        });
        check="twos";
    }
    else{
        progress_bars.forEach((element,index)=>{
            element.style.width=`0%`;      
            spanAll[index].innerHTML=`0`;    

        });
        check="once";
    }
    if(counter_div.getAttribute('data-scroll')=='in'){
        h3ALl.forEach(element=>{
            let value_counter=Number(element.getAttribute('data-counter'));
            let holder_interval=setInterval(() => {
                if(Number(element.innerHTML)<value_counter){
                    element.innerHTML=Number(element.innerHTML)+1;
                }  
                else{
                    clearInterval(holder_interval);
                }
            },1000); 
        });
    }
    else{
        h3ALl.forEach(element=>{
            element.innerHTML="0";
            element.setAttribute('data-scroll',"0");
        });
    }
}
const myCarouselElement = document.querySelector('#carouselExampleCaptions')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: true
})

let filters_items=document.querySelectorAll('.list-group li'),
list_items=document.querySelectorAll('.filterd-items a');
filters_items.forEach(element=>{
    element.addEventListener('click',()=>{
        document.querySelector('.list-group li.active').classList.remove('active');
        element.classList.add('active');
        let name_fillter=element.getAttribute('data-filter');
        // console.log(name_fillter);
        list_items.forEach(element=>{
            if(element.classList.contains(name_fillter)){
                element.classList.remove('hidden');
                element.classList.add('active');
            }
            else{
                element.classList.remove('active');
                element.classList.add('hidden');
            }
        });
    });
});
AOS.init();
