describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2');
    cy.get('#number1').click();
    cy.get('.display').should('contain', '21');
    cy.get('#clear').click();
    cy.get('#number7').click();
    cy.get('#number8').click();
    cy.get('#number4').click();
    cy.get('.display').should('contain', '784');
  })

  it('Should update the display with the result of an arithmetic operation', ()=>
  {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');
  })

  it('Should be able to chain multiple operations', ()=>
  {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5') .click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '15');
  })

  it('Should hae the correct uotput for decimals', ()=>
  {
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '2.7');
  })

  it ('Should have the correct output for negative numbers', ()=>
  {
    cy.get('#number7').click();
    cy.get('#operator-subtract').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1');
  })

  it ('Should have the correct output for large numbers', ()=>
  {
    cy.get('#clear').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#number7').click();
    cy.get('#operator-multiply').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '54444439');
})
  
  it('Should not let divide by 0', ()=>
  {
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5');
  })

})