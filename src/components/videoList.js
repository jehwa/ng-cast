angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      clicking: '<'
    },
  
    // controller: function() {
    //   console.log('hi');
    // },
  
    template: `
  <ul class="video-list">
    <video-list-entry ng-repeat="video in $ctrl.videos track by $index" ng-click="$ctrl.clicking(video)" video="video" />
  </ul>`

  });
