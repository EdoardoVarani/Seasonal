angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('RandomizeService', [function(){

  this.singleRand = function (){
    a=Math.floor((Math.random() * 100) + 1);
    console.log(a);
    return a;

  }

  this.multiRand= function(){
    a = [];
    for (i=0; i< 7; i++){
      a[i] = Math.floor((Math.random() * 100) + 1);
    }
    return a;
  }
  /*function f() {
    data = [45, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90];

  for (i=0; i<data.length; i++){
    data[i]=Math.floor((Math.random() * 100) + 1);
  }
    return data;
  } */
}])
