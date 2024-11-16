describe('Login Page', () => {
    it('should load the login page', () => {
      cy.visit('/');
      cy.contains('Login'); // Verifica se a página de login carregou
    });
  
    it('should allow user to login', () => {
      cy.get('input[type="email"]').type('user@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('button').click();
      cy.url().should('include', '/dashboard'); // Verifica redirecionamento
    });
  });
  