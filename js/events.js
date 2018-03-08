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
    if(e.key === 'g') {
      alert(`You're a ${e.key}!!!`);
    }
  });
}

$(document).ready(function(){

// call functions here
  pressIt();
});
