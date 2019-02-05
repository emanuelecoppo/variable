$('.font').attr({
  contenteditable: true,
  spellcheck: false
});

$('#Muybridge').attr({
  contenteditable: false,
});

$('.font').each(function() {
  $(this).css( 'font-family', $(this).attr('id') );
  $(this).css( 'animation-name', $(this).attr('id') );
});

$('#pause').click(function() {
    $('.font').toggleClass('running paused');
});
