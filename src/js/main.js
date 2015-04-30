/* global require, console */
require.config({
    paths: {
        'almond': '../bower_components/almond/almond',
        'jquery': '../bower_components/jquery/dist/jquery'
    }
});

require(['jquery'], function ($) {
    'use strict';
    console.log($.fn.jquery);
    console.log('Find A Way!');
});
