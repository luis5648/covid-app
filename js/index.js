//here goes the angular code
console.log("working!")

app = angular.module('COVapp', []);
app.controller('infoCTRL', function($scope, $http){
    //$scope.pais = 'mexico'
    $scope.escribe = function(){

        $http.get('https://covid19.mathdro.id/api/countries/'+$scope.pais)
        .then(function(response){
            $scope.conf = response.data.confirmed.value;
            $scope.rec = response.data.recovered.value;
            $scope.death = response.data.deaths.value;
        console.log(response.data);
        });
    }
});
