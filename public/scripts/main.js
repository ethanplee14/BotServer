
$(function() {
    M.AutoInit();
    let routes = {
        'accountScript': accountScript
    };
    let route = $('body').attr('id');

    if(route in routes)
        routes[route]();
});