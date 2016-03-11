angular.module('app.controllers', [])

.controller('situazioneCtrl',
  function($scope, RandomizeService) {
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A'];

 /*appoggio= RandomizeService.f;
  $scope.data = appoggio;
  console.log(appoggio)
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  }; */
   // RandomizeService.singleRand;
 // a = RandomizeService.singleRand();
    b=[];
    b= RandomizeService.multiRand();
    console.log(b);
    $scope.data= [b];

    $scope.refresh = function(){
      b= RandomizeService.multiRand();
      console.log(b);
      $scope.data= [b];
    }
})

.controller('stagionaleCtrl', function($scope) {

})
