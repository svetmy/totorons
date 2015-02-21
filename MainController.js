(function() {

  var app = angular.module("comixViewer");

  var MainController = function($scope, $location) {

        $scope.comixes = [
            {image: 'images/comixes/totoro1.png', name: 'totoro1'},
            {image: 'images/comixes/totoro1.png', name: 'totoro2'},
            {image: 'images/comixes/totoro1.png', name: 'frozen1'},
        ];

    $scope.comixSortOrder = "-name";

    $scope.toComix = function(comixName) {      
      $location.path("/comix/" + comixName);      
    };

  };

  app.controller("MainController", MainController);

}());