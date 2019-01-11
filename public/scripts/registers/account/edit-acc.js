
function registerEditAcc() {
    $('#edit-btn').click(_editMode);
    _registerOnClose();
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
        $(this).serialize();
        $.ajax({
            type: 'PUT',
            url: `account/update/${$('#show-id').val()}`,
            data: $(this).serialize(),
            success: function(data) {
                if (data == 'success')
                    location.reload();
                else
                    alert("Error updating account");
            }
        });
    });
}

function _registerCancel() {

}

function _registerOnClose() {
    console.log("Registering close");
    $('#show-modal').modal({
        dismissible: true,
        complete: function() {alert('closed')}
    });
}