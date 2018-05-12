angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<'
    },
    controller: function() {
      this.currentVideo = '';
    },
  
    templateUrl: 'src/templates/videoListEntry.html'
  });
