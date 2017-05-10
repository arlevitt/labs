import moment from 'moment';

export function getFieldValue(event) {
    const target = event.target;

    let value = null;
    switch (target.type) {
        case ('checkbox'):
            value = target.checked;
            break;
        case ('number'):
            value = parseFloat(target.value);
            break;
        default:
            value = target.value;
    }

    return value;
}

export function getFormattedValue(value, fieldType) {
    if (fieldType === 'date' && value) {
        value = moment(value).format('YYYY-MM-DD');
    } else {
        if (value === undefined) {
            value = '';
        }
    }

    return value;
}