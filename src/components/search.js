angular.module('video-player')
  .component('search', {
    bindings: {
      searchResults: '<'
    },
  
    controller: function(youTube) {
      this.query = '';
      this.search = function () {
        youTube.search(this.searchResults, this.query);
        this.query = '';
      };
    },

    templateUrl: 'src/templates/search.html'
  });
