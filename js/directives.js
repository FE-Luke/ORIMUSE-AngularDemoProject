/**
 * Created by liuzhichao on 16/6/27.
 */
orimuseApp.directive('banner',['$interval','$location',
    function($interval,$location){
        return{
            restrict:'E',
            templateUrl:'/templates/index/banner.html',
            replace:true,
            link:function($scope){
                $scope.bannerHref = function(bannerObj){
                    var type = bannerObj.type;
                    console.log(type);
                    $location.path('/app');
                };
                $scope.ceil = function(num){
                    return Math.ceil(num);
                };
                $scope.nowBanner = 0;
                $scope.setBanner = function(value){
                    $scope.nowBanner = value;
                };
                $scope.prevBanner = function(){
                    var bannerLength = $scope.data.ports.length - 1;
                    if($scope.nowBanner>0){
                        $scope.setBanner($scope.nowBanner-1);
                    }else{
                        $scope.setBanner(bannerLength);
                    }
                };
                $scope.nextBanner = function(){
                    var bannerLength = $scope.data.ports.length - 1;
                    if($scope.nowBanner<bannerLength){
                        $scope.setBanner($scope.nowBanner+1);
                    }else{
                        $scope.setBanner(0);
                    }
                };
                $interval(function(){
                    var bannerLength = $scope.data.ports.length - 1;
                    if($scope.nowBanner<bannerLength){
                        $scope.setBanner($scope.nowBanner+1);
                    }else{
                        $scope.setBanner(0);
                    }
                },8000);
            }
        }
    }]);

orimuseApp.directive('intro',
    function(){
        return{
            restrict:'E',
            templateUrl:'/templates/index/intro.html',
            replace:true
        }
    });

orimuseApp.directive('recommendDesigner',['$timeout',
    function($timeout){
        return{
            restrict:'E',
            templateUrl:'/templates/index/recommendDesigner.html',
            replace:true,
            link:function(scope){

                scope.nowDesignerList=0;
                scope.setDesignerList = function(value){
                    scope.nowDesignerList = value;
                };

                scope.nextList = function(){
                    var totalList = scope.data.topmanrecommend.length-5;
                    if(scope.nowDesignerList < totalList){
                        scope.setDesignerList(scope.nowDesignerList+1);
                    }else{
                        scope.setDesignerList(scope.nowDesignerList+0.25);
                        $timeout(function(){
                            scope.setDesignerList(scope.nowDesignerList-0.25);
                        },200);
                    }
                };

                scope.prevList = function(){
                    if(scope.nowDesignerList > 0){
                        scope.setDesignerList(scope.nowDesignerList-1);
                    }else{
                        scope.setDesignerList(scope.nowDesignerList-0.25);
                        $timeout(function(){
                            scope.setDesignerList(scope.nowDesignerList+0.25);
                        },200);
                    }
                }
            }
        }
    }]);

orimuseApp.directive('recommendDesign',['$timeout',
    function($timeout){
        return{
            restrict:'E',
            templateUrl:'/templates/index/recommendDesign.html',
            replace:true,
            link:function(scope){
                
                scope.nowDesignList=0;
                scope.setDesignList = function(value){
                    scope.nowDesignList = value;
                };

                scope.nextDesignList = function(){
                    var totalList = scope.data.designrecommend.length-5;
                    if(scope.nowDesignList < totalList){
                        scope.setDesignList(scope.nowDesignList+1);
                    }else{
                        scope.setDesignList(scope.nowDesignList+0.25);
                        $timeout(function(){
                            scope.setDesignList(scope.nowDesignList-0.25);
                        },200);
                    }
                };

                scope.prevDesignList = function(){
                    if(scope.nowDesignList > 0){
                        scope.setDesignList(scope.nowDesignList-1);
                    }else{
                        scope.setDesignList(scope.nowDesignList-0.25);
                        $timeout(function(){
                            scope.setDesignList(scope.nowDesignList+0.25);
                        },200);
                    }
                }
            }
        }
    }]);

orimuseApp.directive('recommendTag',
    function(){
        return{
            restrict:'E',
            templateUrl:'/templates/index/recommendTag.html',
            replace:true
        }
    });
