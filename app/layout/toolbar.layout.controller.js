(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('ToolbarController', ToolbarController);

    /* @ngInject */
    function ToolbarController($stateParams, $state) {
        var vm = this;

        vm.title = $stateParams.title;

        var links = [{
                "name": "Admin",
                "state": 'app.admin'
            }];


        vm.links = links.filter(function (link) {
            return link.name !== $stateParams.title;
        });

        vm.clickLink = clickLink;

        function clickLink(link) {
            $state.go(link.state, {title: link.name}, {reload: true})
        }


    }

})();