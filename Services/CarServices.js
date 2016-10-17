var baseUrl = 'http://aarrigucci-carfinder.azurewebsites.net';

app.service('svcAppCar', ['$http', function ($http) {
    this.HCLYears = function () {
        return $http.get(baseUrl + '/api/Car/Years')
            .then(function (response) { return response.data; });
    };

    this.HCLMakes = function (year) {
        // var options = { params: { year: year } };
        return $http.get(baseUrl + '/api/Car/' + year + '/Makes')
            .then(function (response) { return response.data; });
    };

    this.HCLModels = function (year, make) {
        //var options = { params: { year: year, make: make } };
        return $http.get(baseUrl + '/api/Car/' + year + '/' + make + '/Models')
            .then(function (response) { return response.data; });
    };

    this.HCLTrims = function (year, make, model) {
        //var options = { params: { year: year, make: make, model: model } };
        return $http.get(baseUrl + '/api/Car/' + year + '/' + make + '/' + model + '/Trims')
            .then(function (response) { return response.data; });
    };

    // this.HCLCars = function (year, make, model, trim) {
    //     var options = { params: { year: year, make: make, model: model, trim: trim } };
    //     return $http.get(baseUrl + '/api/Cars/Car', options)
    //         .then(function (response) {
    //             return response.data;
    //         });
    // };

    this.HCLCar = function (year, make, model, trim) {
        var options = { params: { year: year, make: make, model: model, trim: trim } };
        return $http.get(baseUrl + '/api/Car/getCar', options)
            .then(function (response) {
                return response.data;
            });
    };

    this.HCLCarNoTrim = function (year, make, model) {
        var options = { params: { year: year, make: make, model: model } };
        return $http.get(baseUrl + '/api/Car/getCarNoTrim', options)
            .then(function (response) {
                return response.data;
            });
    };

}]);