angular.module('PersonalSite.directive.resume_card', [])
.directive('psResumeCard', function(){
  return {
    transclude: true,
    scope: {
      title: "=heading"
    },
    templateUrl: 'templates/resume_card.html'
  };
});
