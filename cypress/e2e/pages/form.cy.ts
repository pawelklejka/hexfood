import { VALID_PIZZA_INPUT, VALID_SANDWICH_INPUT, VALID_SOUP_INPUT, INVALID_PIZZA_INPUT, INVALID_SANDWICH_INPUT, INVALID_SOUP_INPUT } from '../constants';

describe("Form page", () => {
    beforeEach(() => {
        cy.visit('/form')
    })

    it("should be on form page", () => {
        cy.url().should("include", "/form")
    })

    it("should type in the form with valid pizza input and sent post request", () => {
        cy.interceptRequest("POST").as("createPizzaDishType")
        cy.dataCy("order-form").get('input[name="name"]').click().type(VALID_PIZZA_INPUT.name)
        cy.dataCy("order-form").get('input[name="preparation_time"]').click().type(VALID_PIZZA_INPUT.preparation_time)
        cy.dataCy("order-form").get('select[name="type"]').select(VALID_PIZZA_INPUT.type)
        cy.dataCy("order-form").get('input[name="no_of_slices"]').click().type(VALID_PIZZA_INPUT.no_of_slices.toString())
        cy.dataCy("order-form").get('input[name="diameter"]').click().type(VALID_PIZZA_INPUT.diameter.toString())
        cy.dataCy("order-form").get('button[type="submit"]').click()
        cy.wait('@createPizzaDishType').should(({response}) => {
            expect(response?.statusCode).to.eq(200)
            expect(response?.body.name).to.eq(VALID_PIZZA_INPUT.name)
            expect(response?.body.preparation_time).to.eq(VALID_PIZZA_INPUT.preparation_time)
            expect(response?.body.type).to.eq(VALID_PIZZA_INPUT.type)
            expect(response?.body.no_of_slices).to.eq(VALID_PIZZA_INPUT.no_of_slices)
            expect(response?.body.diameter).to.eq(VALID_PIZZA_INPUT.diameter)
        })
    })

    it("should type in the form with valid soup input and sent post request", () => {
        cy.interceptRequest("POST").as("createSoupDishType")
        cy.dataCy("order-form").get('input[name="name"]').click().type(VALID_SOUP_INPUT.name)
        cy.dataCy("order-form").get('input[name="preparation_time"]').click().type(VALID_SOUP_INPUT.preparation_time)
        cy.dataCy("order-form").get('select[name="type"]').select(VALID_SOUP_INPUT.type)
        cy.dataCy("order-form").get('input[name="spiciness_scale"]').click().type(VALID_SOUP_INPUT.spiciness_scale.toString())
        cy.dataCy("order-form").get('button[type="submit"]').click()
        cy.wait('@createSoupDishType').should(({response}) => {
            expect(response?.statusCode).to.eq(200)
            expect(response?.body.name).to.eq(VALID_SOUP_INPUT.name)
            expect(response?.body.preparation_time).to.eq(VALID_SOUP_INPUT.preparation_time)
            expect(response?.body.type).to.eq(VALID_SOUP_INPUT.type)
            expect(response?.body.spiciness_scale).to.eq(VALID_SOUP_INPUT.spiciness_scale)
        })
    })

    it("should type in the form with valid sandwich input and sent post request", () => {
        cy.interceptRequest("POST").as("createSandwichDishType")
        cy.dataCy("order-form").get('input[name="name"]').click().type(VALID_SANDWICH_INPUT.name)
        cy.dataCy("order-form").get('input[name="preparation_time"]').click().type(VALID_SANDWICH_INPUT.preparation_time)
        cy.dataCy("order-form").get('select[name="type"]').select(VALID_SANDWICH_INPUT.type)
        cy.dataCy("order-form").get('input[name="slices_of_bread"]').click().type(VALID_SANDWICH_INPUT.slices_of_bread.toString())
        cy.dataCy("order-form").get('button[type="submit"]').click()
        cy.wait('@createSandwichDishType').should(({response}) => {
            expect(response?.statusCode).to.eq(200)
            expect(response?.body.name).to.eq(VALID_SANDWICH_INPUT.name)
            expect(response?.body.preparation_time).to.eq(VALID_SANDWICH_INPUT.preparation_time)
            expect(response?.body.type).to.eq(VALID_SANDWICH_INPUT.type)
            expect(response?.body.slices_of_bread).to.eq(VALID_SANDWICH_INPUT.slices_of_bread)
        })
    })
})