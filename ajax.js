$(document).ready(function() {

  $('#ajax_request').on('click',function(){

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    });
  });


});
