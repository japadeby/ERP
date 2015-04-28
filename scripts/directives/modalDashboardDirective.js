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

app.directive('uploadForm', function(){
   return{
       restrict: 'A',
       link: function(scope, elem, attrs){

           $('#dropzone_ks').dropzone({url: 'Submit.aspx'});

       }

   };
});
