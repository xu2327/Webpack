// ES Moudule 模块引入方式
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

var Header = require('./header');
var Sidebar = require('./sidebar');
var Content = require('./content');

new Header();
new Sidebar();
new Content();
