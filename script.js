var plate=document.getElementById('plate')
var option=document.getElementsByClassName('color-option')

for(var i=0;i<option.length;i++){
    option[i].addEventListener('click',function(){
        var color=this.style.backgroundColor;
        document.body.style.backgroundColor=color;
        plate.style.backgroundColor=(color==='black')?'white':'black'
    })

}