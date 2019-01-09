
function ContextMenu(contextMenu, options) {
    let menuOpenHooks = [];
    registerCloseHandler();
    registerOptions();

    this.addHook = function(hook) {
        menuOpenHooks.push(hook);
    };

    this.handler = function(e) {
        e.preventDefault();
        for (let hook of menuOpenHooks) hook.bind(this)();

        contextMenu.toggle().css({
            top: e.pageY-15 + 'px',
            left: e.pageX + 'px'
        });
    };

    function registerCloseHandler() {
        $(document).mousedown(function (e) {
            if (!$.contains(contextMenu[0], $(e.target)[0]))
                $(".context-menu").hide();
        });
    }

    function registerOptions() {
        contextMenu.children('li').click(function() {
            let action = $(this).attr('data-action');
            options[action].call(this);
            contextMenu.hide();
        });
    }
}
