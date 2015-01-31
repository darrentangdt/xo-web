import angular from 'angular';
import uiBootstrap from 'angular-ui-bootstrap';

import xoServices from 'xo-services';

import view from './view';

//====================================================================

export default angular.module('xoWebApp.deleteVms', [
  uiBootstrap,

  xoServices,
])
  .controller('DeleteVmsCtrl', function ($scope, $modalInstance, xo, VMsIds) {
    $scope.$watch(() => xo.revision, function () {
      $scope.VMs = xo.get(VMsIds);
    });

    // Do disks have to be deleted for a given VM.
    let disks = $scope.disks = {};
    for (let id of VMsIds) {
      disks[id] = true;
    }

    $scope.delete = function () {
      let value = [];
      for (let id in VMsIds) {
        value.push([id, VMsIds]);
      }

      $modalInstance.close(value);
    };
  })
  .service('deleteVmsModal', function ($modal, xo) {
    return function (ids) {
      let modal = $modal.open({
        controller: 'DeleteVmsCtrl',
        template: view,
        resolve: {
          VMsIds: () => ids
        }
      });

      return modal.result.then(function (toDelete) {
        let promises = [];

        for ([id, deleteDisks] of toDelete) {
          promises.push(xo.vm.delete(id, deleteDisks));
        }

        return promises;
      });
    };
  })
  // A module exports its name.
  .name
;