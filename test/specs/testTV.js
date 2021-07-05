const Page = require('../pageobjects/page');
const YandexMarketPage = require('../pageobjects/yandexMarket.page');
const CatalogElektronikaPage = require('../pageobjects/catalogElektronika.page');
const CatalogTelevizoryPage = require('../pageobjects/catalogTelevizory.page');
const ProductTelevizorPage = require ('../pageobjects/productTelevizor.page');
const assert = require('chai').assert;
const testTVParams = require ('../params/testTVParams');

describe('Тестирование поиска телевизора по параметрам:', () => {

    const param_1 = testTVParams.param_1;
    const param_2 = testTVParams.param_2;

    it('Цена от ' + param_1[1] + ', Производитель - ' + param_2[1], () => {
        Page.open('https://market.yandex.ru/');
        YandexMarketPage.goToElektronika();
        CatalogElektronikaPage.goToTV();

        CatalogTelevizoryPage.inputPriceFrom(param_1[1]);
        CatalogTelevizoryPage.setFlagMaker(param_2[1]);
        CatalogTelevizoryPage.goToFirstItem();

        assert.isAtLeast(ProductTelevizorPage.getPrice(), param_1[1], "Цена найденного телевизора не соответствует условию поиска");
        assert.include(param_2[1], ProductTelevizorPage.getMaker(), "Производитель найденного телевизора не соответствует условию поиска");
    });

    it('Цена от ' + param_1[2] + ', Производитель - ' + param_2[2], () => {
        Page.open('https://market.yandex.ru/');
        YandexMarketPage.goToElektronika();
        CatalogElektronikaPage.goToTV();

        CatalogTelevizoryPage.inputPriceFrom(param_1[2]);
        CatalogTelevizoryPage.setFlagMaker(param_2[2]);
        CatalogTelevizoryPage.goToFirstItem();

        assert.isAtLeast(ProductTelevizorPage.getPrice(), param_1[2], "Цена найденного телевизора не соответствует условию поиска");
        assert.include(param_2[2], ProductTelevizorPage.getMaker(), "Производитель найденного телевизора не соответствует условию поиска");
    });

    it('Цена от ' + param_1[3] + ', Производитель - ' + param_2[3], () => {
        Page.open('https://market.yandex.ru/');
        YandexMarketPage.goToElektronika();
        CatalogElektronikaPage.goToTV();

        CatalogTelevizoryPage.inputPriceFrom(param_1[3]);
        CatalogTelevizoryPage.setFlagMaker(param_2[3]);
        CatalogTelevizoryPage.goToFirstItem();

        assert.isAtLeast(ProductTelevizorPage.getPrice(), param_1[3], "Цена найденного телевизора не соответствует условию поиска");
        assert.include(param_2[3], ProductTelevizorPage.getMaker(), "Производитель найденного телевизора не соответствует условию поиска");
    });
});