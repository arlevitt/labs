import moment from 'moment';

var baseClassName = 'input-group-addon glyphicon ';

export const RangeClasses = {
    OutOfRangeLow: baseClassName + 'glyphicon-triangle-bottom icon-out-of-range',
    OutOfRangeHigh: baseClassName + 'glyphicon-triangle-top icon-out-of-range',
    InRange: baseClassName + 'glyphicon-sunglasses icon-in-range',
    Blank: baseClassName + 'glyphicon-sunglasses icon-transparent'
};

export default class InputFieldUtils {
    static getFieldValue(event) {
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

    static getFormattedValue(value, fieldType) {
        if (fieldType === 'date' && value) {
            value = moment(value).format('YYYY-MM-DD');
        } else {
            if (value === 0) {
                value = 0;
            } else if (value === undefined) {
                value = '';
            }
        }

        return value;
    }

    static getCssClass(rangeText, value) {
        if (!rangeText || value === '') {
            return baseClassName + 'glyphicon-sunglasses icon-transparent';
        }

        var parts = rangeText.split('-');
        var min = parseFloat(parts[0]);
        var max = parseFloat(parts[1]);

        if (value < min) {
            return RangeClasses.OutOfRangeLow;
        } else if (value > max) {
            return RangeClasses.OutOfRangeHigh;
        } else if ((value >= min) && (value <= max)) {
            return RangeClasses.InRange
        } else {
            return RangeClasses.Blank
        }
    }
};