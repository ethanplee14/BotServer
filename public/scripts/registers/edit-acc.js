
function registerEditAcc() {
    $('#edit-btn').click(_editMode);
}

function _editMode() {
    _registerSubmit();
    $('#edit-btn').addClass('scale-out');
    $('#submit-row').addClass('scale-in');
    $("#update-form [disabled]:not('#show-id, #show-status-change')").removeAttr('disabled');
}

function _registerSubmit() {
    $('#update-form').submit(function (e) {
        e.preventDefault();
        $.post('account/update', $(this).serialize(), function(data) {
            if (data == 'success')
                location.reload();
            else
                alert("Error adding account");
        });
    });
}

function _registerCancel() {
    $()
}