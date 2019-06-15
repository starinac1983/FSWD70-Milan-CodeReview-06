var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(locName, locAddress, locZipCode, locImage) {
        this.locName = locName;
        this.locAddress = locAddress;
        this.locZipCode = locZipCode;
        this.locImage = locImage;
    }
    Locations.prototype.display = function () {
        document.write("\n        <div class=\"col places\">\n            <p>" + this.locName + "</p>\n            <ul>\n              <li> " + this.locAddress + ", " + this.locZipCode + "</li>\n              <li> <img src=\"" + this.locImage + "\"></li>\n            <ul>\n       </div>   \n  ");
    };
    return Locations;
}());
var arcDe = new Locations("Arc De Triomphe", "Place Charles de Gaulle", "75008 Paris", "img/arc.jpg");
// arcDe.display();
var charles = new Locations("Charles bridge", "Karluv most 1", "110 00 Prague", "img/charles.jpg");
// charles.display();
//extended class
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(locName, locAddress, locZipCode, locImage, restaType, webAddress, restaPhone) {
        var _this = _super.call(this, locName, locAddress, locZipCode, locImage) || this;
        _this.restaType = restaType;
        _this.webAddress = webAddress;
        _this.restaPhone = restaPhone;
        return _this;
    }
    Restaurant.prototype.display = function () {
        document.write("\n        <div class=\"col food\">\n            <p>" + this.locName + "</p>\n            <ul>\n              <li> " + this.locAddress + ", " + this.locZipCode + ", " + this.restaPhone + "</li>\n              <li> " + this.webAddress + "</li>\n              <li> <img src=\"" + this.locImage + "\"></li>\n            <ul>\n       </div>  \n  ");
    };
    return Restaurant;
}(Locations));
var zlatnoBurence = new Restaurant("Zlatno Burence", "Geiselbergstraße 68", "1110 Vienna", "img/burence.jpg", "serbian", "www.burence.com", "+43 660 2304595");
// zlatnoBurence.display();
var figl = new Restaurant("Figlmuller", "Wollzeile 5", "1010 Vienna", "img/figlm.jpg", "austrian", "www.figlmueller.at", "+43 1 512 61 77");
// figl.display();
// extended class1
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(locName, locAddress, locZipCode, locImage, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, locName, locAddress, locZipCode, locImage) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        document.write("\n        <div class=\"col games\">\n            <p>" + this.locName + "</p>\n            <ul>\n              <li> " + this.eventDate + ", " + this.eventTime + "</li>\n              <li> " + this.locAddress + ", " + this.locZipCode + "</li>\n              <li> " + this.ticketPrice + "</li>\n              <li> <img src=\"" + this.locImage + "\"></li>\n            <ul>\n       </div>  \n  ");
    };
    return Events;
}(Locations));
var psgZvezda = new Events("PSG - FK Crvena Zvezda", "24 Rue du Commandant Guilbaud", "75781 Paris", "img/psg.jpg", "03.10.2018", "21:00", "€ 150");
// psgZvezda.display();
var trnava = new Events("FC Spartak- FK Crvena Zvezda", "Športová 1", "917 01 Trnava", "img/trnava.jpg", "14.08.2018", "21:00", "€ 50");
// trnava.display();
var boring = document.getElementsByClassName('row');
var locations = [arcDe, charles, zlatnoBurence, figl, psgZvezda, trnava];
function canItHappen() {
    var _loop_1 = function (i) {
        $(boring[i]).each(function () { locations[i].display(); });
    };
    for (var i = 0; i < 7; i++) {
        _loop_1(i);
    }
}
canItHappen();
