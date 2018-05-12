angular.module('video-player')
  .service('youTube', function($http) {
    this.getData = function(callback, query) {
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: `part=snippet, maxResults=5, q=${query}, videoEmbeddable=true, type=video, key=${window.YOUTUBE_API_KEY}`,
      }).success(function(data) {
        callback(data.items);
      });
    };
  });


// myApp.service('dataService', function($http) {
//     delete $http.defaults.headers.common['X-Requested-With'];
//     this.getData = function(callbackFunc) {
//         $http({
//             method: 'GET',
//             url: 'https://www.example.com/api/v1/page',
//             params: 'limit=10, sort_by=created:desc',
//             headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
//         }).success(function(data){
//             // With the data succesfully returned, call our callback
//             callbackFunc(data);
//         }).error(function(){
//             alert("error");
//         });
//      }
// });