"use strict";
/*
 * © 2013 useairware.com Limited
 * License: MIT
 */

angular.module('directive.centerIn',[]).directive('centerIn', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
            attrs.$observe('centerIn', function(value) {
                if(value) {
                    $timeout(function () {
                        function center(con, item) {
                            con.scrollLeft = item.offsetLeft - con.offsetWidth/2 + item.offsetWidth;
                            con.scrollTop = item.offsetTop - con.offsetHeight/2 + item.offsetHeight;
                        }
                        var con = angular.element(document.getElementById(value));
                        center(con[0], element[0]);
                        con.bind('mouseenter mouseout', function() {
                            $timeout(function () {
                                center(con[0], element[0]);
                            }, 0, false);
                        });
                    }, 0, false);
                }
            });
        }
    };
}]);
