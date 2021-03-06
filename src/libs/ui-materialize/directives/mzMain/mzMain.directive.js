;(function() {

    'use strict';

    angular
        .module('ui.materialize')
        .directive('mzMain', mzMain);

    /* @inject */
    function mzMain() {
        return {
            template: '<main data-ng-transclude></main>',
            restrict: 'E',
            scope: true,
            transclude: true,
            replace: true,
            link: link
        };

        ////////////////

        function link(scope, element, attrs) {

            ///////////////////////////////

            /**
             *      toggle
             *      @description
             *      @param  {Object}        description
             *      @return {Object}        description
             */
            function toggle (param) {}

        }
    }

}).call(this);
