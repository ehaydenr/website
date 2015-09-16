var app = angular.module('PersonalSite', [
  'ngMaterial',
  'PersonalSite.directive.education',
  'PersonalSite.directive.resume_card',
  'PersonalSite.directive.titled_list',
])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('green');
})
.controller('ResumeCtrl', function($scope) {
  $.extend($scope, data);
});
