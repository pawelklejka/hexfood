import { VALID_PIZZA_INPUT, VALID_SANDWICH_INPUT, VALID_SOUP_INPUT, INVALID_PIZZA_INPUT, INVALID_SANDWICH_INPUT, INVALID_SOUP_INPUT } from '../constants';

describe("Form page", () => {
    beforeEach(() => {
        cy.visit('/form')
    })

    it("should be on form page", () => {
        cy.url().should("include", "/form")
    })

    it("should type in the form valid pizza input and sent post request", () => {
        cy.interceptRequest("POST").as("createPizzaDishType")
        cy.dataCy("order-form").get('input[name="name"').click().type(VALID_PIZZA_INPUT.name)
        cy.dataCy("order-form").get('input[name="preparation_time"').click().type(VALID_PIZZA_INPUT.preparation_time)
        cy.dataCy("order-form").get('select[name="type"]').select(VALID_PIZZA_INPUT.type)
        cy.dataCy("order-form").get('input[name="no_of_slices"').click().type(VALID_PIZZA_INPUT.no_of_slices.toString())
        cy.dataCy("order-form").get('input[name="diameter"').click().type(VALID_PIZZA_INPUT.diameter.toString())
        cy.dataCy("order-form").get('button[type="submit"').click()
        cy.wait('@createPizzaDishType').should(({response}) => {
            expect(response?.statusCode).to.eq(200)
            expect(response?.body.name).to.eq("pizza")
            expect(response?.body.preparation_time).to.eq("00:30:00")
            expect(response?.body.type).to.eq("pizza")
            expect(response?.body.no_of_slices).to.eq(2)
            expect(response?.body.diameter).to.eq(20)
        })
    })
})