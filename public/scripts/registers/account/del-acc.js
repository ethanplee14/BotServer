
function registerDelAcc() {
    $('#del-acc').click(function() {
        let accountName = $('.sel-item').html();
        $.ajax({
            'url': '/account/delete',
            'type': 'DELETE',
            'data': {name: accountName},
            success: () => location.reload()
        })
    });
}