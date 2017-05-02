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