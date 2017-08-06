$(function(){
  var $menu = $('.accordion-menu');
  var $panel = $menu.find('dd');
  var $toggle = $menu.find('#thesame');
  $panel.hide();
  $toggle.removeClass('is-open').addClass('is-close');
  $toggle.click(function(e){
    e.preventDefault();
    if($(this).hasClass('is-close')) {
      $(this).parent().next().slideDown();
      $(this).removeClass('is-close').addClass('is-open');
    } else {
      $(this).parent().next().slideUp();
      $(this).removeClass('is-open').addClass('is-close');
    }
  });
});