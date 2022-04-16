import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('Should be able to add', ()=>
  {
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const button1 = container.find('#number1');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');

  })

  it('Should be able to subtract', ()=>
  {
    const button4 = container.find('#number4');
    const buttonSub = container.find('#operator-subtract');
    const button7 = container.find('#number7');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    
    button7.simulate('click');
    buttonSub.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should be able to multiply', ()=>
  {
    const button3 = container.find('#number3');
    const buttonMult = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    buttonMult.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('Should be a ble to divide', ()=>
  {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttonDiv = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const buttonEquals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');

    button2.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('Should do chain operations', ()=>
  {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button3 = container.find('#number3');
    const button7 = container.find('#number7');
    const buttonAdd = container.find('#operator_add');
    const buttonDiv = container.find('#operator-divide');
    const buttonMult = container.find('#operator-multiply');
    const buttonSub = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    buttonAdd.simulate('click');
    button7.simulate('click');
    buttonSub.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button3.simulate('click');
    buttonMult.simulate('click');
    button2.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('6');
  })

  it('Should clear without affecting the running total', ()=>
  {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button3 = container.find('#number3');
    const button7 = container.find('#number7');
    const buttonAdd = container.find('#operator_add');
    const buttonDiv = container.find('#operator-divide');
    const buttonMult = container.find('#operator-multiply');
    const buttonSub = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const buttonClear = container.find('#clear')
    const runningTotal = container.find('#running-total');

    button3.simulate('click');
    buttonAdd.simulate('click');
    button7.simulate('click');
    buttonSub.simulate('click');
    button1.simulate('click');
    buttonDiv.simulate('click');
    button3.simulate('click');
    buttonAdd.simulate('click');
    button2.simulate('click');
    buttonClear.simulate('click');
    buttonAdd.simulate('click')
    button2.simulate('click')
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
})

})