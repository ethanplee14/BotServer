
function loginScript() {
    $('#login-form').submit(function(e) {
        e.preventDefault();
        $.post('/verify-login', $(this).serialize(), function(res) {
            if (res == 'success')
                window.location.href = '../';
        }).fail(() => alert("Unable to authenticate"));
    })
}

