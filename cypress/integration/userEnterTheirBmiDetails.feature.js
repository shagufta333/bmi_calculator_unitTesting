



describe('user that provide their height and weight details', () => {

    describe('with all necessary information', () => {

        
  
          before(() => {
         cy.visit('/')
         cy.get('input[name=height]').type('160')
         cy.get('input[name=weight]').type('56')
         cy.get('button[id=btn]').click()
      
         });
      
         it('is expected to see the BMI classfication & value', () => {
      
          cy.get('div[id=result]').should('contain.text','21.87').should('contain.text', 'Normal Weight')
          
         });
        
    }); 
});