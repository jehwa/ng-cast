angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      playing: '<'
    },
  
    template: `
  <div class="video-player">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" src="{{'https://www.youtube.com/embed/' + $ctrl.playing.id.videoId}}" allowFullScreen></iframe>
    </div>
    <div class="video-player-details">
      <h3>{{$ctrl.playing.snippet.title}}</h3>
      <div>{{$ctrl.playing.snippet.description}}</div>
    </div>
  </div>`
  });