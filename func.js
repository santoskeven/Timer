let Timer = document.getElementsByClassName('timer');

for(let d=0; d <= 10; d++){
  let style = Timer[0].style;
  Timer[0].innerHTML += '<option value="'+d+'">'+d+'</option>';
  style.color = '#12243f';
  style.border = '0';
};

for(let h=0; h <= 24; h++){
  let style = Timer[1].style ;
  Timer[1].innerHTML += '<option value="'+h+'">'+h+'</option>';
  style.color = '#12243f';
  style.border = '0';
};

for(let m=0; m <= 59; m++){
  let style = Timer[2].style;
  Timer[2].innerHTML += '<option value="'+m+'">'+m+'</option>';
  style.color = '#12243f';
  style.border = '0';
};

for(let s=0; s <= 60; s++){
  let style = Timer[3].style;
  Timer[3].innerHTML += '<option value="'+s+'">'+s+'</option>';
  style.color = '#12243f';
  style.border = '0';
};

let btn = document.getElementsByClassName('but');
let al = document.getElementById('alarm');

btn[1].addEventListener('click', () => {
  location.reload();
})

btn[0].addEventListener('click', ()=>{

  for(let i = 0; i < Timer.length; i++){
    Timer[i].disabled = 'true';
  }
      
  this.interval = setInterval( () => {
    Timer[3].value--; 

    if(Timer[3].value <= 0){

      if(Timer[2].value > 0){
        Timer[2].value--;
        Timer[3].value = 59;
      };

      if(Timer[2].value <= 0 && Timer[1].value > 0){
        Timer[1].value--;
        Timer[2].value = 59;
      };

      if(Timer[1].value <= 0 && Timer[0].value > 0){     
        Timer[0].value--;
        Timer[1].value = 23;
      };

    };

      if(Timer[0].value <= 0 && Timer[1].value <= 0 && Timer[2].value <= 0 && Timer[3].value <= 0){
        al.play()
        clearInterval(this.interval);
        Timer[3].value = 1;
      };     

  }, 1000);

})