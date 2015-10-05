global.document.selection = true;

jest.autoMockOff();
jest.mock('field-kit');

import React from 'react/addons';
const TextField = require('../src/TextField.jsx');
const TestUtils = React.addons.TestUtils;

function getCallsFor(field, method) {
  return field.field[method].mock.calls;
}

describe('TextField', () => {
  it('with no params', () => {
    var textField = TestUtils.renderIntoDocument(
      <TextField />
    );

    expect(getCallsFor(textField, 'setValue')).toEqual( [ [ undefined ] ] );
  });

  describe('with params', () => {
    it('with value', () => {
      var textField = TestUtils.renderIntoDocument(
        <TextField value='Wolverine' />
      );

      expect(getCallsFor(textField, 'setValue')).toEqual( [ [ 'Wolverine' ] ] );
    });

    describe('placeholders', () => {
      it('with placeholder', () => {
        var textField = TestUtils.renderIntoDocument(
          <TextField placeholder='Daredevil' />
        );

        expect(getCallsFor(textField, 'setUnfocusedPlaceholder')).toEqual( [ [ 'Daredevil' ] ] );
      });

      it('with unfocusedPlaceholder', () => {
        var textField = TestUtils.renderIntoDocument(
          <TextField unfocusedPlaceholder='Storm' />
        );

        expect(getCallsFor(textField, 'setUnfocusedPlaceholder')).toEqual( [ [ 'Storm' ] ] );
      });

      it('with focusedPlaceholder', () => {
        var textField = TestUtils.renderIntoDocument(
          <TextField focusedPlaceholder='Hulk' />
        );

        expect(getCallsFor(textField, 'setFocusedPlaceholder')).toEqual( [ [ 'Hulk' ] ] );
      });
    });

    it('with onChange', () => {
      var onChange = jest.genMockFn();
      var textField = TestUtils.renderIntoDocument(
        <TextField onChange={onChange} />
      );

      expect(onChange.mock.calls.length).toBe(0);

      textField.onChange(textField.field);
      jest.runAllTimers();

      expect(onChange.mock.calls.length).toBe(1);
    });
  });
});
