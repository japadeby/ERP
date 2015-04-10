//Template for modal dashboard
app.directive('modalDashboard', function(){
    return {
        restrict: 'E',
        templateUrl: 'modals/modalDashboard.html',
        replace: true,
        scope:{
            url: "@",
            title: "@",
            image: "@",
            id: "@"
        }
    };
});

//Template for modal n
app.directive('modalNewReport', function(){
    return {
        restrict: 'E',
        templateUrl: 'modals/modalNewReport.html',
        replace: true
    };
});
