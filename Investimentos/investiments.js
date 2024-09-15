document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('investmentForm');
    const investmentList = document.getElementById('investmentList');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const type = document.getElementById('investmentType').value;
        const value = document.getElementById('investmentValue').value;
        const institution = document.getElementById('institution').value;

        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `Tipo: ${type} - Valor: R$ ${value} - Instituição: ${institution}`;

        investmentList.appendChild(listItem);

        form.reset();
    });

    // Inicializando gráfico com Chart.js
    var ctx = document.getElementById('investmentChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
            datasets: [{
                label: 'Valor do Investimento',
                data: [1000, 1050, 1100, 1150],
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true
            }]
        }
    });
});
