const actualFieldKit = require.requireActual('field-kit');
const fakeFieldKit = {};

class FakeTextField {
  constructor() {
    this.setValue = jest.genMockFn();
    this.value = jest.genMockFn();
    this.setDelegate = jest.genMockFn();
    this.setUnfocusedPlaceholder = jest.genMockFn();
    this.setFocusedPlaceholder = jest.genMockFn();
  }
}

class FakeCreditCaredField extends FakeTextField {
  constructor() {
    super();
    this.cardType = jest.genMockFn();
    this.setCardMaskStrategy = jest.genMockFn();
  }

  static get CardMaskStrategy() {
    return {
      DoneEditing: 'DoneEditing'
    }
  }
}

Object.keys(actualFieldKit).forEach(moduleKey => {
  if(moduleKey === 'CardTextField') {
    fakeFieldKit[moduleKey] = FakeCreditCaredField;
  } else {
    fakeFieldKit[moduleKey] = FakeTextField;
  }
});

module.exports = fakeFieldKit;
