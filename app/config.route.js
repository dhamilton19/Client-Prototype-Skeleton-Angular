(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $urlRouterProvider.when('/', '/');

        $urlRouterProvider.otherwise('/');
    }
})();