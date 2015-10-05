global.document.selection = true;

jest.autoMockOff();
jest.mock('field-kit');

import React from 'react/addons';
const CreditCardField = require('../src/CreditCardField.jsx');
const TestUtils = React.addons.TestUtils;

function getCallsFor(field, method) {
  return field.field[method].mock.calls;
}

describe('CreditCardField', () => {
  it('with no params', () => {
    var cardField = TestUtils.renderIntoDocument(
      <CreditCardField />
    );

    expect(getCallsFor(cardField, 'setCardMaskStrategy').length).toBe(0);
    expect(getCallsFor(cardField, 'cardType').length).toBe(1);
  });

  it('with cardMaskStrategy', () => {
    var cardField = TestUtils.renderIntoDocument(
      <CreditCardField cardMaskStrategy={true}/>
    );

    expect(getCallsFor(cardField, 'setCardMaskStrategy')).toEqual( [ [ 'DoneEditing' ] ] );
  });

  it('with cardTypeDidChange', () => {
    var cardTypeDidChange = jest.genMockFn();
    var cardField = TestUtils.renderIntoDocument(
      <CreditCardField cardTypeDidChange={cardTypeDidChange} />
    );

    expect(cardTypeDidChange.mock.calls.length).toBe(0);

    cardField.state.cardType = 'Visa';
    cardField.onChange(cardField.field);
    jest.runAllTimers();

    expect(cardTypeDidChange.mock.calls.length).toBe(1);
  });
});
