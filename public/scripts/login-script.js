
function loginScript() {
    $('#login-form').submit(function(e) {
        e.preventDefault();
        $.post('/verify-login', $(this).serialize(), function(res) {
            alert("Authorized: " + res);
            document.cookie = `token=${res}`
        }).fail(() => alert("Unable to authenticate"));
    })
}

