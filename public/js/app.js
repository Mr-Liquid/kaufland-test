/**
 * Created by 1 on 07/07/2016.
 */
(function(global){
    "use strict";
    angular
        .module('kaufland',  ['ui.bootstrap'])
        .controller('kauflandCtrl',function(postsService){
            var vm = this;
            postsService.getPosts().then(function(data){
                vm.selectData = data;
            })

        });

})(this);