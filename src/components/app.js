angular.module('video-player')

  .component('app', {
  
    templateUrl: 'src/templates/app.html',
  
    controller: function(youTube) {
      this.$onInit = function() {
        youTube.search(this.searchResults, 'dogs');
      };
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      this.selectVideo = function(video) {
        this.currentVideo = video;
      }.bind(this);
      this.searchResults = function(videos) {
        this.videos = videos;
        this.currentVideo = videos[0];
      }.bind(this);
    
    }
  });
