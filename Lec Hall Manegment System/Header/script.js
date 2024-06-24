document.addEventListener('DOMContentLoaded', (event) => {
    const notificationIcon = document.querySelector('.notification-icon');
    const notificationDropdown = document.querySelector('.notification-dropdown');
    const userIcon = document.querySelector('.user-icon');
    const dropdownContent = document.querySelector('.dropdown-content');

    notificationIcon.addEventListener('click', (e) => {
        e.preventDefault();
        notificationDropdown.classList.toggle('show');
        dropdownContent.classList.remove('show'); // Close user dropdown if open
    });

    userIcon.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownContent.classList.toggle('show');
        notificationDropdown.classList.remove('show'); // Close notification dropdown if open
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (e) => {
        if (!notificationIcon.contains(e.target) && !notificationDropdown.contains(e.target)) {
            notificationDropdown.classList.remove('show');
        }
        if (!userIcon.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
}
