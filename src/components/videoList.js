angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<'
    },
  
    template: `
  <ul class="video-list">
    <video-list-entry ng-repeat="video in $ctrl.videos track by $index" ng-click="$ctrl.onClick(video)" video="video" />
  </ul>`

  });
