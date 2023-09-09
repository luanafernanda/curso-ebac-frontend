/// <reference types="cypress"/>

describe("Testes para de candidatura", () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Inclusão de contato', () => {
    cy.get('input[placeholder="Nome"]').type('Luana Fernanda');
    cy.get('input[placeholder="E-mail"]').type('luana@email.com');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('button.adicionar').click();

    cy.contains('Luana Fernanda').should('exist');
  })
  
  it('Alteração de Contatos', ()=> {
    cy.get('.sc-iAEyYk').children().last().find('.edit').click()
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Luana Gomes')
    cy.get('[type="text"]').should('have.value', 'Luana Gomes')
    cy.get('.alterar').click()
    
  })

  it ('Remoção de contato', () => {
    cy.get('.sc-iAEyYk').children().last().find('.delete').click();
    cy.contains('Luana Gomes').should('not.exist');
  })
})