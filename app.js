(function() {

  var app = angular.module("comixViewer", ["ngRoute", "ngAnimate", "ngTouch"]);

  app.config(function($routeProvider) {

    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/comix/:comixid", {
        templateUrl: "comix.html",
        controller: "ComixController"
      })
      .when("/comix/:username/:comixid", {
        templateUrl: "user.html",
        controller: "UserController"
      })
      .otherwise({redirectTo:"/main"});
      
  });

}());