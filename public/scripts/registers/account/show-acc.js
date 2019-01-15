
const fieldsMapping = {
    'show-id': '_id',
    'show-name': 'name',
    'show-email': 'email',
    'show-password': 'password',
    'show-status': 'status',
    'show-pin': 'pin',
    'show-created': {
        prop: 'created',
        parse: formatDate
    },
    'show-memb': {
        prop: 'memb',
        parse: formatDate
    },
    'show-status-change': {
        prop: 'lastStatusChange',
        parse: formatDateTime
    },
    'show-break': {
        prop: 'breakUntil',
        parse: formatDateTime
    }
};

function updateShowModal() {
    let accName = $('.sel-item').html();
    $.get('/account/read', {name: accName}, populateShowModal);
}

function populateShowModal(acc) {
    for(const [key , val] of Object.entries(fieldsMapping)) {
        let newVal;
        if (val instanceof Object && acc[val['prop']] && val.parse !== undefined)
            newVal = val.parse(acc[val['prop']]);
        $(`#${key}`).val(newVal || acc[val] || acc[val['prop']] || '');
    }
    M.updateTextFields();
    $('#show-stocked').attr('checked', acc['stocked']);
}
