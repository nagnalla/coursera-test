(function (){
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    //$scope.inputvalues="sampledata";
    $scope.perfomLunchCheck = function() {
      //$scope.inputvalues="see there";
      if(! $scope.inputvalues || 0 === $scope.inputValues){
        $scope.message = "Please Enter Data First !";
      }
      var splits = $scope.inputvalues.split(",");
      if(splits.length ==0){
        $scope.message ="Can't be empty !";
      }
      if(splits.length >0 && splits.length <= 3){
        $scope.message ="Enjoy !";
      }else{
        $scope.message ="Too Much !";
      }
    }
  }

})();
