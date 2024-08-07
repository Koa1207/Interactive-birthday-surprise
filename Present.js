const click=document.querySelector('.click');
const giftBox= document.querySelector('.gift-box');
const Container= document.querySelector('.gift-container');
const text= document.querySelector('.text');

click.addEventListener('click',()=>{

    if(click.className==="click"){
        click.classList.add('active')
        giftBox.classList.add('active')
        Container.classList.add('active');
        text.classList.add('active')
        text.classList.remove('active2')
    }
    else{
        click.classlist.remove('active')
        giftBox.classlist.remove('active')
        Container.classList.remove('active')
        text.classList.remove('active')
        text.classList.add('active2')
    }
})