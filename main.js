const form = document.getElementById('add-contact');
const contactList = [];
const phoneNumbersList = [];
const nicknameList = [];
const successMessage = document.getElementById('success-message')

let lines = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    successMessage.style.display = 'none';
    addLine();
    updateTable();
});

function addLine() {
    const inputNameContact = document.getElementById('name-contact');
    const inputPhoneContact = document.getElementById('phone-contact');
    const inputNickname = document.getElementById('nickname')
    const successMessage = document.getElementById('success-message')

    if (contactList.includes(inputNameContact.value)) {
        alert(`${inputNameContact.value} is already on the list`)
    } else if (phoneNumbersList.includes(inputPhoneContact.value)) {
        alert(`${inputPhoneContact.value} is already on the list`)
    } else {
        contactList.push(inputNameContact.value);
        phoneNumbersList.push(inputPhoneContact.value);
        nicknameList.push(inputNickname.value);


        let line = '<tr>';
        line += `<td>${inputNameContact.value}</td>`;
        line += `<td>${inputPhoneContact.value}</td>`;
        line += `<td>${inputNickname.value}</td>`;
        line += '</tr>';

        lines += line;

        successMessage.style.display = 'block';
    }

    inputNameContact.value = '';
    inputPhoneContact.value = '';
    inputNickname.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}