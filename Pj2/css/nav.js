$('.dot-navigation--item').on('click', function(){
  $this = $(this),
  $siblings = $this.siblings();

  $this.addClass('is-active');
  $siblings.removeClass('is-active');
})
