import React from 'react';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { MemoryRouter } from 'react-router-dom';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import LabsHistory from '../components/LabsHistory';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

const data = [];

data.push({
    _id: '1',
    date: new Date(2017,4,7).toJSON()
});

data.push({
    _id: '2',
    date: new Date(2017,4,8).toJSON()
});

const store = mockStore(
    {
        labsReducer: {
            labsHistory: data
        }
    }
);

const wrapper = mount(
    <MemoryRouter>
        <LabsHistory store={store}
                     isLoggedIn={true}
                     labsHistory={data}/>
    </MemoryRouter>
);

test('LabsHistory contains div', () => {
    console.log(wrapper.html());
    var links = wrapper.find('a');

    expect(links.length).toBe(2);

    var i = 1;
    links.forEach(function(link) {
        var expectedHref = '/labs/edit/' + i
        expect(link.prop('href')).toBe(expectedHref);
        i++;
    });
});