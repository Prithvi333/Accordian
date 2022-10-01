const cont=document.getElementsByClassName('content-container')
console.log(cont)

for (let index = 0; index < cont.length; index++) {

    cont[index].addEventListener('click',function(){
    this.classList.toggle('active')
    })
    
}