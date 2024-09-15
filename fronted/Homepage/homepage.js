// Espera o DOM estar totalmente carregado antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    // Exemplo de redirecionamento de botões (se necessário)
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Previne o comportamento padrão do link
            const href = button.getAttribute('href');
            window.location.href = href; // Redireciona para a página correspondente
        });
    });

    // Se precisar adicionar mais funcionalidades específicas,
    // como validação de formulários ou manipulação de eventos, adicione aqui
});
