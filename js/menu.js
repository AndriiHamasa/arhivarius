document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var menuIcon = document.getElementById('menuIcon');
    var sidebar = document.getElementById('sidebar');
    var closeButton = document.getElementById('closeButton');

    toggleButton.addEventListener('click', function () {
        sidebar.style.width = sidebar.style.width === '320px' ? '0' : '320px';
        menuIcon.classList.toggle('open');
    });

    closeButton.addEventListener('click', function () {
        sidebar.style.width = '0';
        menuIcon.classList.remove('open');
    });
});
