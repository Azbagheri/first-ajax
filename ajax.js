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
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData){
      console.log(responseData);
      $('#step3456').append('<p>' + responseData + '</p>');
    }).fail(function(){
      console.log("failed");
      $('#step3456').append('<p> Sorry, we try harder next time!</p>');
    }).always(function(){
      console.log('Hey the request finished!');
    });
  });

});
