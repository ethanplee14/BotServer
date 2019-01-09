
let _fieldsMapping = {
    'show-id': '_id',
    'show-name': 'name',
    'show-email': 'email',
    'show-password': 'password',
    'show-status': 'status',
    'show-pin': 'pin',
    'show-created': 'created',
    'show-memb': 'memb',
    'show-status-change': 'lastStatusChange',
    'show-break': 'breakUntil'
};

function updateShowModal() {
    let accName = $('.sel-item').html();
    $.get('/account/read', {name: accName}, populateShowModal);
}

function populateShowModal(acc) {
    for(const [key , val] of Object.entries(_fieldsMapping))
        $(`#${key}`).val(acc[val] || '');

    $('#show-stocked').attr('checked', acc['stocked']);

    M.updateTextFields();
}