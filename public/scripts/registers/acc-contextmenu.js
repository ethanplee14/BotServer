
function registerAccountContextMenu() {
    let menu = new ContextMenu($('.context-menu'), {
        'add': () => $('#add-modal').modal('open'),
        'del': () => $('#del-modal').modal('open'),
        'show': () => {
            updateShowModal();
            $('#show-modal').modal('open')
        }
    });
    menu.addHook(addSelName);
    $('#accounts-table>tbody>tr').contextmenu(menu.handler);
}

function addSelName(menu) {
    let rowName = $(this).find('td').first().html();
    $('.sel-item').html(rowName);
}