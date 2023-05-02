var options = {
  valueNames: [ 'name', 'born' , 'image', "El", "Suv", "M"]
};

var userList = new List('users', options);



$('.filterm').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().M == $text);
    });
    $(this).addClass('selected');
  }
});


$('.filterel').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().El == $text);
    });
    $(this).addClass('selected');
  }
});

$('.filtersuv').on('click', function(){
  var $text = $(this).text();
  if($(this).hasClass('selected')){
    userList.filter();
    $(this).removeClass('selected');
  } else {
    userList.filter(function(item) {
      return (item.values().Suv == $text);
    });
    $(this).addClass('selected');
  }
});

