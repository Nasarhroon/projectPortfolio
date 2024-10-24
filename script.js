document.getElementById('logo').addEventListener('click', function() {
    alert('Logo clicked!'); // Check if this shows up
    const menu = document.getElementById('menu-links');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Show the navigation menu
    } else {
        menu.style.display = 'none'; // Hide the navigation menu
    }
});
