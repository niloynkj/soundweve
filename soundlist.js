 var config = {
    apiKey: "AIzaSyB819GtBu2CjDJckUdDXynL7BVDl1gwdUc",
  authDomain: "effort-admin.firebaseapp.com",
  databaseURL: "https://effort-admin-default-rtdb.firebaseio.com",
  projectId: "effort-admin",
  storageBucket: "effort-admin.appspot.com",
  messagingSenderId: "967287089194",
  appId: "1:967287089194:web:09e6a5bdbcdb412e9f7b53",
  measurementId: "G-YTBDD5FBLJ"};
firebase.initializeApp(config);




(function() {
  
  var myapp = angular.module('myapp', [ "firebase"]);

myapp.controller('Maincontoller', ["$scope", "$firebaseArray", "$interval", function ($scope, $firebaseArray, $interval) {

  
 $scope.showData = function( ){

 $scope.itemsPerPage = 8;
 $scope.currentPage = 0;
 
var ref = firebase.database().ref().child("Soundwebebd");

	$scope.pages = $firebaseArray(ref);
     $scope.range = function() {
    var rangeSize = 4;
    var ps = [];
    var begin;

    begin = $scope.currentPage;
    if ( begin > $scope.pageCount()-rangeSize ) {
      begin = $scope.pageCount()-rangeSize+1;
    }

    for (var i=begin; i<begin+rangeSize; i++) {
      ps.push(i);
    }
    return ps;
  };

  $scope.prevPage = function() {
    if ($scope.currentPage > 0) {
      $scope.currentPage--;
    }
  };

  $scope.DisablePrevPage = function() {
    return $scope.currentPage === 0 ? "disabled" : "";
  };

  $scope.pageCount = function() {
    return Math.ceil($scope.pages.length/$scope.itemsPerPage)-1;
  };

  $scope.nextPage = function() {
    if ($scope.currentPage < $scope.pageCount()) {
      $scope.currentPage++;
    }
  };

  $scope.DisableNextPage = function() {
    return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
  };

  $scope.setPage = function(n) {
    $scope.currentPage = n;
  };
         
}

}]);

angular.module('myapp').filter('pagination', function(){
  return function(input, begin) {
    begin = parseInt(begin, 10);
    return input.slice(begin);
  };
});

  
})();








 
 
