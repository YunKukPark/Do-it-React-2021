import React from 'react';
import { shallow } from 'enzyme';

import Input from '../../03/Input';

describe('<Input>', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Input name="test_name" />);
    }).not.toThrow();
  });
});

describe('contains <input>', () => {
  //TODO: 1. find() 함수로 엘리먼트 출력 검사하기
  it('renders one input', () => {
    const wrapper = shallow(<Input name="test_name" />);
    expect(wrapper.find('input')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(1);
  });

  //TODO: 2. prop(), porps() 함수로 프로퍼티에 전달된 값 검증하기
  it('assigns the props value and type', () => {
    const expectedValue = '123';
    const wrapper = shallow(<Input name="test_name" value={expectedValue} />);

    // 1. prop() 함수 사용해서 value 프로퍼티값이랑 컴포넌트 전달된 값(expectedValue) 검증
    expect(wrapper.find('input').prop('value')).toBe(expectedValue);

    // 2. 객체 추출식 사용해서 필요한 프로퍼티 항목 추출
    const { type, value } = wrapper.find('input').props();

    // 3. props() 함수에서 추출한 value, type 의 프로퍼티 (애트리뷰트) 값 검증하기
    expect(value).toBe(expectedValue);
    expect(type).toBe('text');
  });

  //TODO: 3. setProps() 함수로 변경된 프로퍼티값 전달하기
  it('renders errorMessage', () => {
    const wrapper = shallow(<Input name="test_name" />);
    // 1. error 스타일을 포함한 오류 메시지가 존재하는지 검사합니다.
    expect(wrapper.find('.error')).toHaveLength(0);
    const expectedErrorMessage = '옳지 못한 값이 입력되었습니다.';

    // 2. setProps() 함수로 errorMessage 프로퍼티의 값을 변경합니다.
    wrapper.setProps({ errorMessage: expectedErrorMessage });
    expect(wrapper.find('span').prop('className')).toBe('error');

    // 3. errorMessage 프로퍼티가 추가되었기 때문에 error 스타일을 포함한 오류 메시지 1개가 정상적으로 포함된 것을 확인합니다.
    expect(wrapper.find('.error')).toHaveLength(1);

    // 4. html() 함수를 사용하여 출력된 HTML에서 실제 오류 메시지가 정상적으로 출력되었는지 검증합니다.
    expect(wrapper.html()).toContain(expectedErrorMessage);
  });

  //TODO: 4. simulate() 함수로 가상의 이벤트 검사하기
  it('call back onChange on input change', () => {
    // 1. jest에서 감시함수(fn())를 제공하여 생성된 함수의 호출을 감시하는 방법을 제공합니다.
    const changeStub = jest.fn();
    // 2. 생성된 감시 함수롤 입력 컴포넌트의 onChange 프로퍼티에 할당합니다.
    const wrapper = shallow(<Input name="test_name" onChange={changeStub} />);
    // 3. 이벤트 재현 시점을 기준으로 이벤트 실행 이전에는 콜백 함수가 호출되지 않은 상태를 expect() 함수의 호출 검증 메소드 toHaveBeenCalled() 로 검증합니다.
    expect(changeStub).not.toHaveBeenCalled();

    const expectedTargetValue = 'updated input';
    // 4. enzyme의ㅣ 이벤트 재현 메소드를 사용하여 input값이 변경되는 이벤트(onChange)를 재현.
    //    재현을 위해 실제 브라우저에서 전달할 값을 전달해야 합니다. target.value에 값이 전달되므로 객체형으로 가상의 입력값을 전달하였습니다.
    wrapper.find('input').simulate('change', { target: { value: expectedTargetValue } });

    // 5. fn() 함수로 반환된 콜백 함수를 expect() 함수의 호출 검증 메소드 (toHaveBeenCalledTimes, toHaveBeenCalledWith)로 호출 함수와 호출 인자들을 검사합니다.
    expect(changeStub).toHaveBeenCalledTimes(1);
    expect(changeStub).toHaveBeenCalledWith('test_name', expectedTargetValue);
  });
});
