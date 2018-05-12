angular.module('video-player')

  .component('app', {
  
    template: `
  <div id="app container">
    <nav class="navbar">
      <div class="col-md-6 col-md-offset-3">
        <search callback="$ctrl.callback" />
      </div>
    </nav>
    <div class="row">
      <div class="col-md-7">
        <video-player playing="$ctrl.playing"/>
      </div>
      <div class="col-md-5">
        <video-list clicking="$ctrl.clicking" videos="$ctrl.videos"/>

      </div>
    <div>
  </div>`,
  
    controller: function() {
      this.videos = window.exampleVideoData;
      this.playing = window.exampleVideoData[0];
      this.clicking = function(video) {
        this.playing = video;
        console.log(video);
      }.bind(this);
      this.callback = function(videos) {
        this.videos = videos;
        console.log(videos);
      }.bind(this);
    
    }
  });
