﻿/// <reference path="../../../assets/admin/libs/angular.js" />

//const { get } = require("jquery");

(function (app) {
    app.factory('apiService', apiService);

    apiService.$inject = ['$http', 'notificationService','authenticationService']
    function apiService($http, notificationService, authenticationService) {
        return {
            get: get,
            post: post,
            put: put,
            del: del
        }

        function post(url, data, success, failure) {
            authenticationService.setHeader();
            $http.post(url, data).then(function (result) {
                success(result);
            }, function (error) {
                console.log(error.status)
                if (error.status = 401) {
                    notificationService.displayError('Lỗi!!!');
                }
                else if(failure != null) {
                    failure(error);
                }
            });
        }

        function del(url, data, success, failure) {
            authenticationService.setHeader();
            $http.delete(url, data).then(function (result) {
                success(result);
            }, function (error) {
                console.log(error.status)
                if (error.status = 401) {
                    notificationService.displayError('Lỗi!!!');
                }
                else if (failure != null) {
                    failure(error);
                }
            });
        }

        function put(url, data, success, failure) {
            authenticationService.setHeader();
            $http.put(url, data).then(function (result) {
                success(result);
            }, function (error) {
                console.log(error.status)
                if (error.status = 401) {
                    notificationService.displayError('Lỗi!!!');
                }
                else if (failure != null) {
                    failure(error);
                }
            });
        }

        // bắt lỗi
        function get(url, params, success, failure) {
            authenticationService.setHeader();
            $http.get(url, params).then(function (result) {
                success(result);
            }, function (error) {
                failure(error);
            });
        }
    }
})(angular.module('fashionshop.common'));
