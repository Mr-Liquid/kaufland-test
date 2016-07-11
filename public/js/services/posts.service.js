/**
 * Created by 1 on 07/07/2016.
 */
(function(){
    "use strict";

    angular
        .module('kaufland')
        .factory('postsService',function($http, $q){
            var
              store = null,
              length,
              i;

            return {
                getPosts: _getPosts,
                getPost: _getPost
            };
            function _getPost(id){
              for(var i = 0; i < store.posts.length; i++){
                if(store.posts[i].id === id){
                  return $q.when(store.posts[i]);
                }
              }
            }
            function _getPosts(){
              if(store !== null && typeof store.posts !== 'undefined'){
                  return $q.when(store.posts);
              }else {
                return $http.get('http://jsonplaceholder.typicode.com/posts')
                  .then(function(res){
                    store = {
                      posts:res.data
                    };
                    length = store.posts.length;
                    return res.data;
                  })
              }
            }
        })

})();