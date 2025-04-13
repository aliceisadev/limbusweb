document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    var chrId = document.getElementById('.squaremove');
    chrId.style.left = '0px'; 
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});
