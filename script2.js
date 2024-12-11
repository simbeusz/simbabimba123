document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('content').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#f0f8ff';
    });
    document.getElementById('content').addEventListener('mouseout', function() {
        this.style.backgroundColor = '#fff';
    });
});
x