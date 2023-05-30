describe("Main page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("should click order now and goes to form page", () => {
        cy.dataCy("order-now-button").click()
        cy.url().should("include", "/form")
    })
})