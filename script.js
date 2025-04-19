document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    var chrId = document.getElementById('.squaremove');
    chrId.style.left = '0px'; 
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector('.icon1');
    const yi = document.querySelector('.yi');

    icon.addEventListener('mouseenter', () => {
      yi.classList.add('hovered');
    });

    icon.addEventListener('mouseleave', () => {
      yi.classList.remove('hovered');
    });
  });