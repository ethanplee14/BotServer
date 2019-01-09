function registerAddAcc() {
    $('#add-form').submit(function (event) {
        event.preventDefault();
        $.post('account/create', $(this).serialize(), function(data) {
            if (data == 'success')
                location.reload();
            else
                alert("Error adding account");
        });
    })
}
