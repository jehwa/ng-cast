angular.module('video-player')
  .component('search', {
    bindings: {
      callback: '<'
    },
  
    controller: function() {
      this.query = '';
    },
  
    template: `
    <div class="search-bar form-inline">
      <input ng-model="$ctrl.query" class="form-control" type="text" />
      <button ng-click="$ctrl.callback($ctrl.query)"class="btn">
        <span class="glyphicon glyphicon-search"></span>
      </button>
    </div>`
    
  });
