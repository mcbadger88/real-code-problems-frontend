describe(
    'First end to end test' , () => {
        beforeEach(
            () => {
                cy.visit('/')
            }
                )
        it('can download code challenge docker file', () => {
                    cy.contains('Sign In').click();
                    cy.wait(2500)
                    cy.contains('Log in').click();
                    cy.wait(2500)
                    cy.visit('/')
        })
    }
)

