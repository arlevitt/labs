import React from 'react';
import {shallow, mount, render} from 'enzyme';
var ReactTestUtils = require('react-dom/lib/ReactTestUtils')

import { store } from './setupTests';
import LabsInputForm from '../components/LabsInputForm';
import { labsInputs } from '../components/LabsInputForm';
import InputFieldUtils from '../utils/InputFieldUtils';
import { RangeClasses } from '../utils/InputFieldUtils';


const urlParams = {
    params: {
        labsId: 1
    }
};

const wrapper = mount(
    <LabsInputForm store={store}
                   isLoggedIn={true}
                   match={urlParams}
    />
);

var currentLabs = store.getState().labsReducer.currentLabs;
var formInputs = wrapper.find('form input.form-control');
wrapper.setProps({ currentLabs: currentLabs });

describe('Check LabsHistory inputs', () => {
    test('form contains proper number of input fields and initializes them with default values', () => {
        expect(formInputs.length).toBe(labsInputs.length);

        formInputs.forEach(function (formInput) {
            var propertyName = formInput.props().name;
            var fieldType = formInput.props().type;
            var formattedValue = InputFieldUtils.getFormattedValue(currentLabs[propertyName], fieldType);

            expect(formInput.props().value).toBe(formattedValue);
        });
    });

    test('test input-addon css classes', () => {
        var formInput = formInputs.find('[name="magnesium"]');

        testCssClass(formInput, '', RangeClasses.Blank);
        testCssClass(formInput, 1, RangeClasses.OutOfRangeLow);
        testCssClass(formInput, 2, RangeClasses.InRange);
        testCssClass(formInput, 5, RangeClasses.OutOfRangeHigh);
        testCssClass(formInput, 0, RangeClasses.OutOfRangeLow);
    });
});

test('form input shows zero instead of blank if existing value is 0', () => {
    var formInput = formInputs.find('[name="whitecount"]');
    expect(formInput.props().value).toBe(0);
});

function testCssClass(formInput, newValue, rangeClassConstant) {
    var magnesium = 'magnesium';
    var inputAddon = formInput.parent().find('div.input-group-addon');
    var rangeText = labsInputs.find(function (el) {
        return el.name === magnesium;
    }).range;

    ReactTestUtils.Simulate.change(formInput.node, {
        target: {
            name: magnesium,
            value: newValue
        }
    });

    expect(formInput.props().value).toBe(newValue);
    expect(formInput.node.value).toBe(newValue.toString());

    var rangeClass = InputFieldUtils.getCssClass(rangeText, formInput.node.value);
    expect(inputAddon.html().indexOf(rangeClass)).not.toBe(-1);
    expect(rangeClass).toBe(rangeClassConstant);
}

function typeOf (obj) {
    return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}