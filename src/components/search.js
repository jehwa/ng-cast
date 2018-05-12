angular.module('video-player')
  .component('search', {
    bindings: {
      searchResults: '<'
    },
  
    controller: function(youTube) {
      this.query = '';
      this.youTube = function () {
        youTube.search(this.searchResults, this.query);
        this.query = '';
      };
    },

    templateUrl: 'src/templates/search.html'
  });
