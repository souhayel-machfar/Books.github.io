$(function(){
  // Les variables
  var addButton = $('input[type="submit"]');
  var textInput = $('input[type="text"]');
  var placeHolder = $('label');
  var menu = $('ul');

  // input trick
  textInput.on('click', function(){
    if(!(textInput.hasClass('label-trick'))){
      placeHolder.addClass('label-trick'); 
    }
  });

  // Adding a book in the list
  addButton.on('click', function(e){
    e.preventDefault();
    var newLi = document.createElement('li');
    var newSpan = document.createElement('span');
    var newBtn = document.createElement('button');

    if(textInput.val() != false){
      placeHolder.removeClass('label-trick');
      $(newSpan).text(textInput.val());
      $(newSpan).addClass('text');
      $(newBtn).text('Delete');
      $(newBtn).addClass('delete');
      $(newLi).append(newSpan);
      $(newLi).append(newBtn);
      menu.prepend(newLi);
      localStorage.setItem(localStorage.length, textInput.val());
      textInput.val('');
      $(textInput).blur();
    } else {
      alert('Field empty !');
    }
  });

  // Removing a book from the list
  menu.on('click', function(e){
    e.preventDefault();
    if(e.target.className == 'delete') {
      if(confirm('Are you sure ?')){
        var liDel = e.target.parentElement;
        liDel.remove();
      for(i = 0; i < localStorage.length; i++)
        if( (localStorage.getItem(localStorage.key(i))) == (liDel.firstChild.innerHTML)){
           localStorage.removeItem(localStorage.key(i));
        }
      }
    }
  });

  // Recovering data from the local storage
      for(i = 0; i < localStorage.length; i++){
        if(localStorage.getItem(localStorage.key(i)) != null){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        var newBtn = document.createElement('button');

        $(newSpan).text(localStorage.getItem(localStorage.key(i)));
        $(newSpan).addClass('text');
        $(newBtn).text('Delete');
        $(newBtn).addClass('delete');
        $(newLi).append(newSpan);
        $(newLi).append(newBtn);
        menu.prepend(newLi);
      }
    }

});



