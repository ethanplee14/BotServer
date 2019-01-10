function registerAddAcc() {
    $('#add-form').submit(function (e) {
        e.preventDefault();
        $.post('account/create', $(this).serialize(), function(data) {
            if (data == 'success')
                location.reload();
            else
                alert("Error adding account");
        });
    })
}
