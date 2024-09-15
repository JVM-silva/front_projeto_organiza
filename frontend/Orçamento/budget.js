document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('budgetForm');
    const budgetList = document.getElementById('budgetList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const category = document.getElementById('category').value;
        const budgetAmount = document.getElementById('budgetAmount').value;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Categoria: ${category} - R$ ${budgetAmount}`;

        budgetList.appendChild(listItem);

        form.reset();
    });

    // Inicializando gráfico com Chart.js
    var ctx = document.getElementById('budgetChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Alimentação', 'Transporte', 'Lazer', 'Saúde'],
            datasets: [{
                data: [500, 200, 150, 100],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
            }]
        }
    });
});
