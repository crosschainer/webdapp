const dApp = {
    initData      : Telegram.WebApp.initData || '',
    initDataUnsafe: Telegram.WebApp.initDataUnsafe || {},
    MainButton    : Telegram.WebApp.MainButton,

    init(options) {
        document.body.style.visibility = '';
        Telegram.WebApp.ready();
        Telegram.WebApp.MainButton.setParams({
            text      : 'Close',
            is_visible: true
        }).onClick(dApp.close);
    },
    close() {
        Telegram.WebApp.close();
    },
    expand() {
        Telegram.WebApp.expand();
    },
    showAlert(message) {
        Telegram.WebApp.showAlert(message);
    },
    showConfirm(message) {
        Telegram.WebApp.showConfirm(message);
    },
};