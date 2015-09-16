angular.module('PersonalSite.directive.titled_list', [])
.directive('psTitledList', function(){
  return {
    scope: {
      data: '=data'
    },
    templateUrl: 'templates/titledlist.html',
    controller: function($scope, $element) {
      $scope.titles = $scope.data.titles;
      $scope.list = $scope.data.list;
    }
  };
});
