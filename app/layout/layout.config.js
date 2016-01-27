(function() {
    'use strict';

    angular
        .module('app.layout')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
            .state('app', {
                abstract: true,
                views: {
                    '':{
                        templateUrl: 'layout/layout.tmpl.html'
                    },
                    'toolbar@app': {
                        templateUrl: 'layout/toolbar.layout.tmpl.html',
                        controller: 'ToolbarController',
                        controllerAs: 'vm'
                    },
                    'content@app': {
                        template: '<div ui-view></div>'
                    }
                },
                params : {
                    title : ""
                }
            })
    }
})();