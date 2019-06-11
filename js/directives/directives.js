angular.module('directives', [])
    .directive('upload', function () {
        var ddo = {};
        ddo.restric = "AE";

        ddo.scope = {
            title: '@title' 
        };

        ddo.transclude = true;

        ddo.templateUrl = "upload.html";

        return ddo;
    });