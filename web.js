var app = angular.module('myApp', ['ui.bootstrap']);

app.controller('matrixEditorController', function($scope) {
    $scope.width = "4";
    $scope.height = "4";
    $scope.a = [
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1]
    ];
    $scope.$watchGroup(
        ["width", "height"],
        function(newVal, oldVal) {
            if (newVal[0] != "" && newVal[1] != "") {
                console.log(newVal[0], newVal[1]);
                $scope.a = initArray(parseInt(newVal[0]), parseInt(newVal[1]));
                $scope.aaaa = JSON.stringify($scope.a).replace(RegExp("\,\g"), "\n");
            }
        });
});

function initArray(width, height) {
    var hoge = new Array(height);
    for (var i = 0; i < hoge.length; i++) {
        hoge[i] = new Array(width);
        for (var j = 0; j < hoge[i].length; j++) {
            hoge[i][j] = 1;
        }
    }
    return hoge;
}
