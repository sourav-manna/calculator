var numOfbuttons = document.querySelectorAll("button").length;
console.log(numOfbuttons);

for(var i = 0;i< numOfbuttons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        console.log(this.innerHTML);
        if(this.innerHTML == 'AC'){
            document.getElementById("scr").value = 0;    
        }
        else if(this.innerHTML === '='){
            console.log(eval(document.getElementById("scr").value))
            document.getElementById("scr").value = eval(document.getElementById("scr").value);
        }
        else if(document.getElementById("scr").value === '0'){
            document.getElementById("scr").value = this.innerHTML;
        }
        else{
            document.getElementById("scr").value += this.innerHTML;
        }
    })
}