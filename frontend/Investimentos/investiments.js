document.getElementById('investmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const investmentType = document.getElementById('investmentType').value;
    const investmentValue = document.getElementById('investmentValue').value;
    const institution = document.getElementById('institution').value;

    fetch('http://localhost:3000/investments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            type: investmentType,
            value: investmentValue,
            institution: institution
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Atualizar a lista de investimentos
        updateInvestmentList();
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

function updateInvestmentList() {
    fetch('http://localhost:3000/investments')
    .then(response => response.json())
    .then(data => {
        const investmentList = document.getElementById('investmentList');
        investmentList.innerHTML = '';

        data.forEach(investment => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${investment.type} - R$ ${investment.value} - ${investment.institution}`;
            investmentList.appendChild(li);
        });
    })
    .catch((error) => {
        console.error('Error fetching investments:', error);
    });
}

// Carregar investimentos ao iniciar
updateInvestmentList();
