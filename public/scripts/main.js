
$(function() {
    M.AutoInit();
    let routes = {
        'accountScript': accountScript,
        'loginScript': loginScript
    };
    let route = $('body').attr('id');

    if(route in routes)
        routes[route]();
});

