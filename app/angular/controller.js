(function(angular) {
  'use strict';

  angular
  .module('camera')
  .controller('cameraController', controller);

  controller.$inject = ['$scope', '$rootScope'];

  function controller($scope, $rootScope) {
    /* jshint validthis: true */
    MediaStreamTrack.getSources(function(media_sources) {
      _.forEach(media_sources, function(value, key){
        if(value.facing == 'environment'){
          $scope.camera_id = value.id;
          $scope.facing = value.facing
        }
      });

      $scope.con = {
        mandatory: {},
        optional: [{sourceId: $scope.camera_id }]
      };

      $scope.$broadcast('ready_devices', $scope.con);
    });

    var vm = this;
    vm.picture = false; // Initial state
  }

})(angular);
