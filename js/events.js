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
    console.log(e.which);
    if(e.which === 71) {
      alert(`You're a real ${String.fromCharCode(e.which)}!!!`);
    }
  });
}

function submitIt() {
  $('form').submit(function(){
    alert('Your form is going to be submitted now.');
  });
}
$(document).ready(function(){
  pressIt();
// call functions here
});
