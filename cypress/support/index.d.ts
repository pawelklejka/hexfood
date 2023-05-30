import './commands';

type Method = 'POST'

declare global {
  namespace Cypress {
    interface Chainable {
      dataCy(value: string): Chainable<Element>;
      interceptRequest(method: Method): Chainable<null>;
    }
  }
}