angular.module('PersonalSite.directive.education', [])
.directive('psEducation', function(){
  return {
    scope: {
      lines: '=data'
    },
    templateUrl: 'templates/education.html'
  };
});
