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
  $('form#typing').on('keydown', function(e){
    console.log(e.key);
    if(e.key === 'G') {
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
