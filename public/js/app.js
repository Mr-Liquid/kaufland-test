/**
 * Created by 1 on 07/07/2016.
 */
(function(global){
    "use strict";
    angular
        .module('kaufland',  ['ui.bootstrap'])
        .controller('kauflandCtrl',function($scope, postsService, $uibModal){
            var vm = this;

            postsService.getPosts().then(function(data){
                vm.selectData = data;
                vm.selected = data[0].id;
            });
            $scope.$watch('kauf.selected',function(newVal,oldVal){
              if(typeof newVal !== 'undefined' ){
                postsService.getPost(newVal).then(function(data){
                  vm.selectDataItem = data;
                });
              }
            });
          vm.open = function() {
            $uibModal.open({
              templateUrl: '/js/templates/modal.html',
              controller: function($scope){
                $scope.close = function(){
                  this.$close();
                };
              },
              scope: $scope,
              size: 'md'
            });
          }


        });

})(this);