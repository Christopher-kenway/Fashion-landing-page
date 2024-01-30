$(document).ready(function() {

    $nav = $('.navbar__nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('navbar__links');
    })
});