'use strict';

const handlebars = require('handlebars');
const layout = require('./views/layout.hbs');

const hotels = [{
	"name": "Sofitel",
	"adress": "8 Duke Street",
	"phone": "+64 3 450 0045",
	"website": "http://www.sofitel.com/gb/hotel-5688-sofitel-queenstown-hotel-and-spa/index.shtml"
}, {
	"name": "Novotel Queenstown Lakeside",
	"adress": "Corner Earl St and Marine Parade",
	"phone": "+64 3 442 7750",
	"website": "http://www.novotel.com/gb/hotel-5308-novotel-queenstown-lakeside/index.shtml"
}, {
	"name": "Copthorne Hotel and Resort",
	"adress": "27 Frankton Rd",
	"phone": "+64 3 450 0260",
	"website": "https://www.millenniumhotels.com/en/queenstown/copthorne-hotel-and-resort-lakefront-queenstown/"
}, {
	"name": "Oaks Club Resort",
	"adress": "171 – 179 Frankton Road",
	"phone": "+64 3 450 2700",
	"website": "http://www.minorhotels.com/en/oaks/oaks-club-resort"
}, {
	"name": "The Rees Hotel",
	"adress": "377 Frankton Road",
	"phone": "+64 3 450 1100",
	"website": "http://www.therees.co.nz/"
}, {
	"name": "Mecure Queenstown",
	"adress": "Sainsbury Road",
	"phone": "+64 3 442 6600",
	"website": "http://www.mercure.com/en/hotel-1994-mercure-queenstown-resort/index.shtml"
}, {
	"name": "The Dairy",
	"adress": "10 Isle Street (corner of Brecon St and Isle St)",
	"phone": "+64 3 442 5164",
	"website": "http://thedairy.co.nz/"
}];

const template = layout.$(#template).html();

console.log('the template is ' template);

const templateScript = handlebars.compile(template);
$("body").append( template({objects: hotels}) );
