var inputValue = document.getElementById('inp');
var newtask = document.querySelector('.taskList');

function valControl(){
    if(inputValue.value==''){
        alert("Please enter some text");
    }
    else{
        let newelement = document.createElement('ul');
        newelement.innerHTML = inputValue.value + '<i class="fa fa-check" aria-hidden="true"></i>' + '<i class= "fa fa-trash-o" aria-hidden="true"></i> ';
        newtask.appendChild(newelement);
        inputValue.value='';
        
       
        newelement.querySelector('.fa-trash-o').addEventListener("click",remove);
        function remove(){
            newelement.remove();
     
            
        }

        newelement.querySelector('.fa-check').addEventListener("click",overline);
        function overline(){
            newelement.style.textDecoration="line-through";
  
        }
        
       
    }
   

   
}

