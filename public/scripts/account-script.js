
function accountScript() {
    styleMaterialize();
    $('.datepicker').datepicker({
        container: 'body'
    });
    registerAccountContextMenu();
    registerAddAcc();
    registerDelAcc();
}
