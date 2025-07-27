function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    if (sidebar.style.left === '0px') {
        sidebar.style.left = '-250px';
        overlay.style.width = '0';
    } else {
        sidebar.style.left = '0px';
        overlay.style.width = '100%';
    }
}