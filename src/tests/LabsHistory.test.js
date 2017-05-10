import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {shallow, mount, render} from 'enzyme';
import { data, store } from './setupTests';

import LabsHistory from '../components/LabsHistory';

const wrapper = mount(
    <MemoryRouter>
        <LabsHistory store={store}
                     isLoggedIn={true}
                     labsHistory={data} />
    </MemoryRouter>
);

test('LabsHistory contains div', () => {
    //console.log(wrapper.html());
    var links = wrapper.find('a');

    expect(links.length).toBe(2);

    var i = 1;
    links.forEach(function(link) {
        var expectedHref = '/labs/edit/' + i
        expect(link.prop('href')).toBe(expectedHref);
        i++;
    });
});