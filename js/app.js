/**
 * Created by liuzhichao on 16/6/27.
 */
var orimuseApp = angular.module('orimuseApp',['ngAnimate','ui.router','ngSweetAlert','me-lazyimg','angular-toasty','bw.paging','angular-loading-bar']);

orimuseApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.title = 'Orimuse Demo Application';
});


//configuration for angular-toasty
orimuseApp.config(['toastyConfigProvider', function(toastyConfigProvider) {
    toastyConfigProvider.setConfig({
        sound: false,
        limit:1,
        position:'top-center',
        theme:'bootstrap'
    });
}]);

//configuration for angular-loading-bar
orimuseApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}]);


//configuration for ui.router
orimuseApp.config(['$stateProvider','$urlRouterProvider','$compileProvider',
    function ($stateProvider,$urlRouterProvider,$compileProvider) {
        // $compileProvider.debugInfoEnabled(false);
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index', {
                url: '/index',
                views: {
                    '': {
                        templateUrl: 'templates/index/index.html'
                    },
                    'header@index': {
                        templateUrl: 'templates/header/header.html'
                    },
                    'main@index': {
                        templateUrl: 'templates/index/main.html',
                        controller:'IndexController'
                    },
                    'footer@index': {
                        templateUrl: 'templates/footer/footer.html'
                    }
                }
            }).state('app', {
                url:'/app',
                views: {
                    '': {
                        templateUrl: 'templates/app/index.html'
                    }
                }
            }).state('test', {
                url:'/test?page=',
                views: {
                    '':{
                        templateUrl:'templates/test.html'
                    }
                },
                reloadOnSearch: false
            });
    }]);

// orimuseApp.config(function($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/index');
//     $stateProvider
//         .state('index', {
//             url: '/index',
//             views: {
//                 '': {
//                     templateUrl: 'templates/index/index.html'
//                 },
//                 'header@index': {
//                     templateUrl: 'templates/header/header.html'
//                 },
//                 'main@index': {
//                     templateUrl: 'templates/index/main.html'
//                 },
//                 'footer@index': {
//                     templateUrl: 'templates/footer/footer.html'
//                 }
//             }
//         });
//         // .state('tag', {
//         //     url: '/tag/:id}',
//         //     views: { //注意这里的写法，当一个页面上带有多个ui-view的时候如何进行命名和视图模板的加载动作
//         //         '': {
//         //             templateUrl: 'tpls/bookList.html'
//         //         },
//         //         'booktype@booklist': {
//         //             templateUrl: 'tpls/bookType.html'
//         //         },
//         //         'bookgrid@booklist': {
//         //             templateUrl: 'tpls/bookGrid.html'
//         //         }
//         //     }
//         // })
//         // .state('design', {
//         //     url: '/design/:Id',
//         //     templateUrl: 'tpls/addBookForm.html'
//         // })
//         // .state('designer', {
//         //     url: '/designer/:Id',
//         //     templateUrl: 'tpls/bookDetail.html'
//         // })
//         // .state('search', {
//         //     url: '/search/:keyword',
//         //     templateUrl: 'tpls/bookDetail.html'
//         // })
//         // .state('center', {
//         //     url: '/center',
//         //     templateUrl: 'tpls/bookDetail.html'
//         // })
//         // .state('login', {
//         //     url: '/login',
//         //     templateUrl: 'tpls/bookDetail.html'
//         // })
//         // .state('register', {
//         //     url: '/register',
//         //     templateUrl: 'tpls/bookDetail.html'
//         // })
// });