angular.module('video-player')

  .component('app', {
  
    template: `
  <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search search-results="$ctrl.searchResults" />
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player current-video="$ctrl.currentVideo"/>
      </div>
      <div class="col-md-5">
        <video-list on-click="$ctrl.selectVideo" videos="$ctrl.videos"/>

      </div>
    <div>
  </div>`,
  
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
