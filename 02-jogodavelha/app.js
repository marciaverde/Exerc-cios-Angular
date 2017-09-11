var app = angular.module('velha', []);

app.controller('JogoController', function($scope){
  $scope.tabuleiro = [
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},
      {posicao: '', red: false},

  ];
  var controle = 0;
  $scope.selecionar = function(i){

    if ($scope.tabuleiro[i].posicao == '') {
      if (controle % 2 == 0) {
        $scope.tabuleiro[i].posicao = "O";
        $scope.tabuleiro[i].red = false;
        controle++;

      }
      else {
      $scope.tabuleiro[i].posicao = "X";
      $scope.tabuleiro[i].red = true;
      controle++;
      }
    }
  }
  $scope.limpar = function(){
    $scope.tabuleiro[0].posicao = '';
    $scope.tabuleiro[1].posicao = '';
    $scope.tabuleiro[2].posicao = '';
    $scope.tabuleiro[3].posicao = '';
    $scope.tabuleiro[4].posicao = '';
    $scope.tabuleiro[5].posicao = '';
    $scope.tabuleiro[6].posicao = '';
    $scope.tabuleiro[7].posicao = '';
    $scope.tabuleiro[8].posicao = '';
  }




});
