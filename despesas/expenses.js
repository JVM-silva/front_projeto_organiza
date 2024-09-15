document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const expenseChartCtx = document.getElementById('expenseChart').getContext('2d');

    // Inicializar o gráfico
    let expenseData = {
        labels: [],
        datasets: [{
            label: 'Despesas',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    let expenseChart = new Chart(expenseChartCtx, {
        type: 'bar',
        data: expenseData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Adiciona uma nova receita/despesa
    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const type = document.getElementById('type').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const description = document.getElementById('description').value;

        if (amount > 0 && description.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            listItem.innerHTML = `
                ${description} - R$${amount.toFixed(2)}
                <button class="btn btn-danger btn-sm float-right" onclick="removeItem(this)">Excluir</button>
            `;

            expenseList.appendChild(listItem);

            // Atualiza o gráfico se for uma despesa
            if (type === 'expense') {
                updateChart(description, amount);
            }

            // Limpa os campos do formulário
            expenseForm.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Função para atualizar o gráfico
    function updateChart(label, value) {
        const index = expenseData.labels.indexOf(label);

        if (index === -1) {
            // Adiciona um novo label e valor
            expenseData.labels.push(label);
            expenseData.datasets[0].data.push(value);
        } else {
            // Atualiza um label existente
            expenseData.datasets[0].data[index] = value;
        }

        // Atualiza o gráfico com os novos dados
        expenseChart.update();
    }

    // Função para remover itens da lista
    window.removeItem = function (button) {
        const item = button.parentElement;
        const description = item.innerText.split(' - ')[0];
        const amount = parseFloat(item.innerText.split(' - R$')[1].split(' Excluir')[0]);

        item.remove();

        // Remove o item do gráfico
        const index = expenseData.labels.indexOf(description);
        if (index !== -1) {
            expenseData.labels.splice(index, 1);
            expenseData.datasets[0].data.splice(index, 1);
            expenseChart.update();
        }
    };
});
