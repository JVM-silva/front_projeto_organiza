document.addEventListener('DOMContentLoaded', () => {
    // Registro
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário
  
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
  
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Usuário registrado:', data);
        alert('Usuário registrado com sucesso!');
      })
      .catch(error => console.error('Erro:', error));
    });
  
    // Login (se você tiver uma funcionalidade para login)
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do formulário
  
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      // Exemplo de requisição POST para login (ajuste o endpoint conforme necessário)
      fetch('http://localhost:3000/login', { // Alterar o endpoint se necessário
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Usuário logado:', data);
        alert('Login realizado com sucesso!');
      })
      .catch(error => console.error('Erro:', error));
    });
  });
  