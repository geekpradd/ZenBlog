var app = angular.module('myapp',['ngRoute']); //define that we are using ngRoute

var translate = function(xml) {
		 var x2js = new X2JS();
		 var json = x2js.xml_str2json( xml );
		 return json;
}

var replaceAll = function(find, replace, str) {
  		return str.replace(new RegExp(find, 'g'), replace);
}

app.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function(newVal, oldVal) {
        if (oldVal !== newVal) {
        	if ( $route.current.title!=null){
            document.title = $route.current.title; //Change title on routechange
        }
        }
    });
}]);

//URL settings
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
			
			templateUrl: 'pages/home.html',
			controller: 'mainController',
			resolve: mainResolve
		})
		.when('/post/:title',{
			title: 'Post',
			templateUrl: 'pages/post.html',
			controller: 'postController',
			resolve: mainResolve
		})
		.when('/:page',{
		 	templateUrl: function(params) {
        		return 'pages/' + params.page + '.html';
    		},
		 	controller: 'pageController'
			
		 });
	

});//URL Mappings

//----CONTROLLERS--
app.controller('mainController',function($scope, $http, postData){
	$scope.blogTitle = BLOG_NAME;
	$scope.blogMotto = BLOG_MOTTO;
	$scope.message = "Home";
	$scope.getData = function(js){

		js = translate(js).xml.post;
		if (js.constructor===Array){
			var a = 2;
		}
		else{
			js = [js];
		}
		console.log(js);
		for (var a in js){
			js[a].url = 'post/' + replaceAll(' ','-',js[a].title);
		}
		return js.reverse();
	}
	$scope.posts = $scope.getData(postData.data);
	$scope.setPosts = function(param1){
		for (var a in param1){
			param1[a].url = 'post/' + replaceAll(' ','-',param1[a].title);
		}
		$scope.posts = param1.reverse();
		console.log(param1);
	};
	
	
	
});
//Resolve to get XML before page is loaded
var mainResolve = {
    postData : function($q, $http) {
        return $http({
            method: 'GET', 
            url: 'posts.xml'
        });
    }
};
//---POST CONTROLLER
app.controller('postController', function($scope,$routeParams,$http,$sce, postData){
	$scope.blogTitle = BLOG_NAME;
	$scope.blogMotto = BLOG_MOTTO;
	$scope.title = replaceAll('-',' ',$routeParams.title);
	$scope.message = '';
	$scope.author = '';
	$scope.excerpt = '';
	$scope.date = '';
	$scope.safe = function(){
		return $sce.trustAsHtml($scope.message); //Make the message safe to be used as HTML
	};
	$scope.setTitle = function(){
		document.title = "Post: " + $scope.title;
	};
	$scope.setVars = function(){
		$scope.setTitle();
		var j = translate(postData.data).xml.post;
		var num = 0;
		if (j.constructor===Array){
			var a = 2;
		}
		else{
			j = [j];
		}
		for (var a in j){
			if (j[a].title==$scope.title){
				num = a;
				break;
			}
		}
		$scope.message = j[num].content.__cdata;
		$scope.author = j[num].author;
		$scope.excerpt = j[num].excerpt;
		$scope.date = j[num].date;
	}
	
	angular.element(document).ready(function(){
		$scope.setVars();
	});
	
});
//CUSTOM PAGE CONTROLLER
app.controller('pageController', function($scope){
	$scope.blogTitle = BLOG_NAME;
	$scope.blogMotto = BLOG_MOTTO;
	$scope.title = '';
	$scope.$watchCollection('title', function() {
		document.title = $scope.title;
	});
});
app.controller('configController',  function($scope){
	$scope.blogTitle = BLOG_NAME;
	$scope.blogMotto = BLOG_MOTTO;
});
