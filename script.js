document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    var chrId = document.getElementById('.squaremove');
    chrId.style.left = '0px'; 
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});
$(function() {
    $('.icon2').hover(function() {
    $('#b').css('background-color', 'yellow');
    }, function() {
    // on mouseout, reset the background colour
    $('#b').css('background-color', '');
});
});
