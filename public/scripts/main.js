
$(function() {
    M.AutoInit();
    let route = $('body').attr('id');

    if(route in window)
        window[route]();
});

