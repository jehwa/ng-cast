angular.module('video-player')
  .component('search', {
    bindings: {
      searchResults: '<'
    },
  
    controller: function(youTube) {
      this.query = '';
      this.youTube = youTube.search;
    },
  
    template: `
    <div class="search-bar form-inline">
      <input ng-model="$ctrl.query" class="form-control" type="text" />
      <button ng-click="$ctrl.youTube($ctrl.searchResults, $ctrl.query)"class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>`
    
  });
