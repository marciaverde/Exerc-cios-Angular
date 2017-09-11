var app = angular.module('bugs', []);

app.controller('JogoController', function($scope){
    $scope.bugs = [
        {left: '100px', top: '500px'},
        {left: '200px', top: '300px'},
        {left: '500px', top: '100px'},
        {left: '100px', top: '320px'},
    ];

});
