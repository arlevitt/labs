import React from 'react';
import {shallow, mount, render} from 'enzyme';

import { store } from './setupTests';
import LabsInputForm from '../components/LabsInputForm';
import { labsInputs } from '../components/LabsInputForm';
import * as inputFieldUtils from '../utils/InputFieldUtils';


const urlParams = {
    params: {
        labsId: 1
    }
};

var currentLabs = store.getState().labsReducer.currentLabs;

const wrapper = mount(
    <LabsInputForm store={store}
                   isLoggedIn={true}
                   match={urlParams}
    />
);

wrapper.setProps({ currentLabs: currentLabs });

test('LabsHistory contains div', () => {
    //console.log(wrapper.html());
    var inputs = wrapper.find('form input.form-control');
    expect(inputs.length).toBe(labsInputs.length);

    //console.log(currentLabs);

    inputs.forEach(function(input) {
        var propertyName = input.props().name;
        var fieldType = input.props().type;
        var formattedValue = inputFieldUtils.getFormattedValue(currentLabs[propertyName], fieldType);

        expect(input.props().value).toBe(formattedValue);
    });
});