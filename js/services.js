/**
 * Created by liuzhichao on 16/7/1.
 */
orimuseApp.factory('util',['network',function(network){
    return {

    }
}]);

orimuseApp.factory('network',['$http','$timeout','toasty','cfpLoadingBar',function($http,$timeout,toasty,cfpLoadingBar){
    var requestList = {};
    return {
        sendRequest:function(args){
            var url = args.url;
            var method = args.method || 'GET';
            var data = args.param || '';
            var requestTag = args.requestTag;
            cfpLoadingBar.start();
            var that = this;
            if(!that.checkLockStatus(requestTag)){
                that.setRequestLocked(requestTag);
                $http({
                    url:url,
                    method:method,
                    data:data
                }).success(function(data){
                    cfpLoadingBar.complete();
                    switch (data.status){
                        case 200:
                            args.successCallback(data);
                            break;
                        default :
                            if(args.failureCallback){
                                args.failureCallback();
                             }else{
                                that.utilErrCallback('请求失败');
                            }
                    }
                    that.setRequestUnlocked(requestTag);
                }).error(function(){
                    cfpLoadingBar.complete();
                    that.utilErrCallback('请求失败');
                    that.setRequestUnlocked(requestTag);
                });
            }else{
                that.utilErrCallback('不能重复请求~');
            }
        },
        checkLockStatus:function(requestTag){
            if(requestList[requestTag]){
                return true;
            }
            return false;
        },
        setRequestLocked:function(requestTag){
            requestList[requestTag] = true;
        },
        setRequestUnlocked:function(requestTag){
            delete requestList[requestTag];
        },
        utilErrCallback:function(msg){
            toasty.error({
                msg:msg
            });
        }
    }
}]);