 let addition = document.getElementById('add');
 let subtraction = document.getElementById('remove');
 let int = document.getElementById('number');
 let integer = 0;


 addition.addEventListener('click', function() {
     integer+=1;
     int.innerHTML = integer;
     
 })

 subtraction.addEventListener('click', function() {
    integer-=1;
    int.innerHTML = integer;
    
})