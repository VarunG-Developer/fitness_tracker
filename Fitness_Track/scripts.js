document.getElementById('logForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const duration = document.getElementById('duration').value;
    const date = document.getElementById('date').value;

    const formData = new FormData();
    formData.append('type', type);
    formData.append('duration', duration);
    formData.append('date', date);

    fetch('log_activity.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        loadActivities();
    })
    .catch(error => console.error('Error:', error));
});

function loadActivities() {
    fetch('get_activities.php')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#activitiesTable tbody');
        tableBody.innerHTML = '';
        data.forEach(activity => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${activity.type}</td><td>${activity.duration}</td><td>${activity.date}</td>`;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    loadActivities();
});
