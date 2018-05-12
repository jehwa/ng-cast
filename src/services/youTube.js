angular.module('video-player')
  .service('youTube', function($http) {
    this.getData = function(callback, query) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          part: 'snippet', 
          maxResults: 5,
          q: query,
          videoEmbeddable: true,
          type: 'video',
          key: window.YOUTUBE_API_KEY
        },
      }).then(function(data) {
        callback(data.data.items);
      });
    };
  });