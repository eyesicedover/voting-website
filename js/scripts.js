$(document).ready(function(){
  $("#votingForm").submit(function(event){
    var voterAge = $("input#votingAge").val();

    if (voterAge >= 18) {
      $("#under18").hide();
      $("#over18").show();
    } else if (voterAge > 0){
      $("#over18").hide();
      $("#under18").show();
    }
    else {
      alert("Enter a valid age");
    }

    event.preventDefault();
  });
});
