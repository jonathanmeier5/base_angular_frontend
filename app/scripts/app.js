'use strict';

/**
 * @ngdoc overview
 * @name elasticbuilderApp
 * @description
 * # elasticbuilderApp
 *
 * Main module of the application.
 */
var elasticbuilderApp = angular
  .module('elasticbuilderApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);


elasticbuilderApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('index', {
        url: '/',
        templateURL: 'elasticbuilder/static/partials/index.html'
    })
    .state('test', {
        url:'/test',
        templateURL: 'elasticbuilder/static/js/test.html'
    })
    .state('about', {
        url: '/about',
        templateURL: 'elasticbuilder/static/partials/about.html'
    });
});