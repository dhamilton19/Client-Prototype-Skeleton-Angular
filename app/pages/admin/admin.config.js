(function() {
    'use strict';

    angular
        .module('app.pages.admin')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
            .state('app.admin', {
                url: '/',
                templateUrl: 'pages/admin/admin.tmpl.html',
                controller: 'AdminController',
                controllerAs: 'vm',
                params : {
                    title : "Admin"
                }
            })
    }
})();