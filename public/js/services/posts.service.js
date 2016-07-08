/**
 * Created by 1 on 07/07/2016.
 */
(function(){
    "use strict";

    angular
        .module('kaufland')
        .factory('postsService',function($http){
            return {
                getPosts: _getPosts
            };

            function _getPosts(){
               return $http.get('http://jsonplaceholder.typicode.com/posts')
                   .then(function(res){
                       return res.data;
                   })
            }
        })

})();