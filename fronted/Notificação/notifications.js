document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('notificationForm');
    const notificationList = document.getElementById('notificationList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const type = document.getElementById('notificationType').value;
        const date = document.getElementById('notificationDate').value;
        const description = document.getElementById('notificationDescription').value;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${type === 'payment' ? 'Pagamento' : 'Investimento'}: ${description} - Data: ${date}`;

        notificationList.appendChild(listItem);

        form.reset();
    });
});
