'use strict';

var bind = require('function-bind');
var $apply = require('./functionApply');
var actualApply = require('./actualApply');

module.exports = function applyBind() {
	return actualApply(bind, $apply, arguments);
};
