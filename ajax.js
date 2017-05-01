$(document).ready(function() {

  $('#ajax_request').on('click',function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });

  $('#step3456 button').on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step3456').append('<p>' + responseData + '</p>');
    });
  });

});
