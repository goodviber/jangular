angular.module('FreezerMagnet')
.controller('MainCtrl',[
'$scope',
'posts',
function($scope, posts){

	$scope.posts = posts.posts;
	
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === '') { return; }
		else{
	  $scope.posts.push({
	  	title: $scope.title,
	  	link: $scope.link,
	  	 upvotes: 0,
	  	 comments: [
	  	 {author: 'Joe', body: 'Cool post!', upvotes:0},
	  	 {author: 'Bob', body: 'another cool post', upvotes: 0}
	  	 ]
	  	});
	  $scope.title = '';
	  $scope.link = '';
	  }
	};

	$scope.incrementUpvotes = function(post) {
	  post.upvotes += 1;
	};

	$scope.decrementUpvotes = function(post) {
		if(post.upvotes > 0){
	  post.upvotes -= 1;
	}
	};

}]);