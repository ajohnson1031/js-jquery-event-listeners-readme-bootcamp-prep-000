//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $(this).addClass('tasty');
  })
}

function pressIt() {
  $('input[id=typing]').on('keydown', function(e){
    console.log(e.key);
    if(e.which === 71) {
      alert(`You're a ${e.key}!!!`);
    }
  });
}

function submitIt() {
  $('form').submit(function(){
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){

// call functions here
});
