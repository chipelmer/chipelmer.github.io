
function showNumber() {
    var result = '000-000-0000';
    result = stringCharacterReplace(result, 6, '7');
    result = stringCharacterReplace(result, 4, '8');
    result = stringCharacterReplace(result, 8, '9');
    result = stringCharacterReplace(result, 2, '5');
    result = stringCharacterReplace(result, 0, '2');
    result = stringCharacterReplace(result, 10, '6');
    result = stringCharacterReplace(result, 0, '2');
    result = stringCharacterReplace(result, 11, '3');
    var contactTarget = document.getElementById('contact-target');
    contactTarget.innerText = result;

    if (contactTarget.style.opacity == 0) {
        contactTarget.style.opacity = 1;
    }
    else {
        contactTarget.style.opacity = 0;
    }
}

function stringCharacterReplace(str, index, chr) {
    return str.substring(0, index) + chr + str.substring(index + 1);
}
