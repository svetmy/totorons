(function() {

    var app = angular.module("comixViewer");

    var ComixController = function($scope, $routeParams, $location) {

        var comixid = $routeParams.comixid;
      
        $scope.slides = [
            {image: 'images/totoro1/totoro1.jpg', comix: 'totoro1', description: 'There was once a Totoro...'},
            {image: 'images/totoro1/totoro2.jpg', comix: 'totoro1', description: '...He lived in a tree...a big tree'},
            {image: 'images/totoro1/totoro3.jpg', comix: 'totoro1', description: 'He had friends'},
            {image: 'images/totoro1/totoro4.jpg', comix: 'totoro1', description: 'One day Satski was lost'},
            {image: 'images/totoro1/totoro5.jpg', comix: 'totoro1', description: 'He called her to the top of the tree'},
            {image: 'images/totoro1/totoro6.jpg', comix: 'totoro1', escription: 'They flew through the fields'},
            {image: 'images/totoro1/totoro7.jpg', comix: 'totoro1', description: 'So, this is how a haunted house looks like'},
            {image: 'images/totoro1/totoro8.jpg', comix: 'totoro1', description: 'A few days later'},
            {image: 'images/totoro1/totoro9.jpg', comix: 'totoro1', description: 'The End...'},

            {image: 'images/totoro2/totoro2_1.png', comix: 'totoro2', description: 'Once upon a time there was a girl named May'},
            {image: 'images/totoro2/totoro2_2.png', comix: 'totoro2', description: 'She was running in a backyard collecting acorns'},
            {image: 'images/totoro2/totoro2_3.png', comix: 'totoro2', description: 'They led her to a tunnel in the bushes'},
            {image: 'images/totoro2/totoro2_4.png', comix: 'totoro2', description: 'When she was out of the tunnel she saw a big tree'},
            {image: 'images/totoro2/totoro2_5.png', comix: 'totoro2', description: 'Inside the black hole'},
            {image: 'images/totoro2/totoro2_6.png', comix: 'totoro2', description: 'When she saw the end there was a weird creature'},
            {image: 'images/totoro2/totoro2_7.png', comix: 'totoro2', description: 'The forest creature said that his name is Totoro'},
            {image: 'images/totoro2/totoro2_8.png', comix: 'totoro2', description: 'Satski came back from school and saw May is sleeping on the ground'},
            {image: 'images/totoro2/totoro2_9.png', comix: 'totoro2', description: 'When she woke up she said: "I saw Totoro"'},
            {image: 'images/totoro2/totoro2_10.png', comix: 'totoro2', description: 'And she did'},
            {image: 'images/totoro2/totoro2_10.png', comix: 'totoro2', description: 'The End...'},

            {image: 'images/frozen1/frozen1_1.png', comix: 'frozen1', description: 'Once upon a time there was a Kingdom named Arendale'},
            {image: 'images/frozen1/frozen1_2.png', comix: 'frozen1', description: 'there lived two girls: Elsa and Anna'},
            {image: 'images/frozen1/frozen1_3.png', comix: 'frozen1', description: 'Elsa - the older sister had magical powers'},
            {image: 'images/frozen1/frozen1_4.png', comix: 'frozen1', description: 'One time Elsa was playing with Anna and hit her face with ice'},
            {image: 'images/frozen1/frozen1_5.png', comix: 'frozen1', description: 'When the girls grew up they never played'},
            {image: 'images/frozen1/frozen1_6.png', comix: 'frozen1', description: 'One time Anna was taking a walk'},
            {image: 'images/frozen1/frozen1_7.png', comix: 'frozen1', description: 'And they played...'},


        ].filter(function(e) {
            return e.comix === comixid;
        });

        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.direction = 'left';
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.direction = 'right';
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
        };
    }

    var ComixAnimation = function () {
        return {
            beforeAddClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    var finishPoint = element.parent().width();
                    if(scope.direction !== 'right') {
                        finishPoint = -finishPoint;
                    }
                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                var scope = element.scope();

                if (className == 'ng-hide') {
                    element.removeClass('ng-hide');

                    var startPoint = element.parent().width();
                    if(scope.direction === 'right') {
                        startPoint = -startPoint;
                    }

                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
                }
                else {
                    done();
                }
            }
        };
    };

    app.controller("ComixController", ComixController).animation('.slide-animation', ComixAnimation);

}());