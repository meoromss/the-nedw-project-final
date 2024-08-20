document.getElementById('menu-icon').addEventListener('click', function() {
    const dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
});

// Cela permet de basculer le menu lorsque l'icône est cliquée
