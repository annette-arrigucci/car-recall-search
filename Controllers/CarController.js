app.controller('ctrAppCar', ['$scope', 'svcAppCar', function ($scope, svcAppCar) {
    var vm = this;

    $scope.selectedYear = '';
    $scope.selectedMake = '';
    $scope.selectedModel = '';
    $scope.selectedTrim = '';
    $scope.carImage = '';
    $scope.car = [];
    $scope.recallResults = [];
    $scope.recallMessage = '';

    $scope.years = [];
    $scope.makes = [];
    $scope.models = [];
    $scope.trims = [];
    $scope.showTrims = false;
    $scope.showButton = false;
    $scope.hasNoRecalls = false;
    // $scope.cars = 'Acura';


    $scope.getYears = function () {
        svcAppCar.HCLYears().then(function (data) {
            $scope.years = data;
        });
    };
    //This line pre fills the years dropdown
    $scope.getYears();

    $scope.getMakes = function () {
        $scope.makes.length = 0;
        svcAppCar.HCLMakes($scope.selectedYear).then(function (data) {
            $scope.makes = data;
        });
        $scope.models.length = 0;
        // $scope.getCars();
    };

    $scope.getModels = function () {
        svcAppCar.HCLModels($scope.selectedYear, $scope.selectedMake).then(function (data) {
            $scope.models = data;
        });
        $scope.trims.length = 0;
        $scope.showButton = true;
        //$scope.getCars();
    };

    $scope.getTrims = function () {
        svcAppCar.HCLTrims($scope.selectedYear, $scope.selectedMake, $scope.selectedModel).then(function (data) {
            $scope.trims = data;
            if($scope.trims.length > 1){
                $scope.showTrims = true;
            }
        });
    };

    $scope.getaCar = function () {
        svcAppCar.HCLCar($scope.selectedYear, $scope.selectedMake, $scope.selectedModel, $scope.selectedTrim).then(function (data) {
            $scope.car = data;
            $scope.recallResults = angular.fromJson(data.Recalls);
            if($scope.recallResults.Count == 0){
                $scope.hasNoRecalls = true;
            }
            // $scope.recallMessage = [angular.fromJson(data.Message)];
        });
    };

    $scope.getCarNoTrim = function () {
        svcAppCar.HCLCarNoTrim($scope.selectedYear, $scope.selectedMake, $scope.selectedModel).then(function (data) {
            $scope.car = data;
            $scope.recallResults = angular.fromJson(data.Recalls);
            if($scope.recallResults.Count == 0){
                $scope.hasNoRecalls = true;
            }
            // $scope.recallMessage = [angular.fromJson(data.Message)];
        });
    };

    $scope.reloadPage = function(){
        window.location.reload();
    }

    // $scope.getCars = function () {
    //     svcAppCar.HCLCars($scope.selectedYear, $scope.selectedMake, $scope.selectedModel, $scope.selectedTrim).then(function (data) {
    //         $scope.cars = data;
    //     });
    // };
}]);