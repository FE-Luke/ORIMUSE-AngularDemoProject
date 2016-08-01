/**
 * Created by liuzhichao on 16/6/27.
 */
orimuseApp.controller('IndexController',['$scope','$rootScope','network',
    function($scope,$rootScope,network){
        $rootScope.title = 'orimuse - 源自你的灵感';
        network.sendRequest({
            url:'data/index.json',
            requestTag:'indexPage',
            successCallback:function(data){
                $scope.data = data.result;
            }
        });
    }]);

orimuseApp.controller('TestController',['$scope','$rootScope','$location','network',
    function($scope,$rootScope,$location,network){
        $rootScope.title = 'DEMO - XHR,分页,路由和参数传递';
        network.sendRequest({
            url:'http://120.26.51.19/19/orimuse2/api/recommend/designer_v3?pageSize=10&pageNo=1',
            method:'get',
            requestTag:'test',
            successCallback:function(data){
                $scope.data = data.result;
            }
        });

        $scope.test = function(page){
            network.sendRequest({
                url:'http://120.26.51.19/19/orimuse2/api/recommend/designer_v3?pageSize=10&pageNo='+page,
                method:'get',
                requestTag:'test',
                successCallback:function(data){
                    $scope.data = data.result;
                    $location.search({page:$scope.data.page});
                }
            });
        }
    }]);