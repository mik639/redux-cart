import * as React from 'react';
import renderer from 'react-test-renderer';
import { QtySwitcher } from './qtySwitcher';

describe('QtySwitcher', () => {
  let props;
  beforeEach(() => {
    props = {
      value: 3,
      onIncrease: jest.fn(),
      onDecrease: jest.fn()
    };
  });

  it('should renders correctly', () => {
    const tree = renderer.create(<QtySwitcher {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('decreaseHandler method', () => {
    it('should call onDecrease prop if current value more than minimum allowed', () => {
      const wrapper = renderer.create(
        <QtySwitcher {...props} value={2} min={1} />
      );

      expect(props.onDecrease).not.toHaveBeenCalled();
      wrapper.getInstance().decreaseHandler();
      expect(props.onDecrease).toHaveBeenCalled();
    });

    it('should NOT call onDecrease prop if current value is minimum allowed', () => {
      const wrapper = renderer.create(
        <QtySwitcher {...props} value={1} min={1} />
      );

      expect(props.onDecrease).not.toHaveBeenCalled();
      wrapper.getInstance().decreaseHandler();
      expect(props.onDecrease).not.toHaveBeenCalled();
    })
  });
});
