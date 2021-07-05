const Page = require('../pageobjects/page');

class YandexMarketPage {
    get refElektronika () { return $('//span[text()="Электроника"]/parent::a') }

    goToElektronika () {
        Page.pauseForCapcha();
        this.refElektronika.click();
    }
}

module.exports = new YandexMarketPage();