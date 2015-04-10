app.directive('ellipsisDirective', function($timeout){
     return{
         restrict: 'A',
         link: function(scope, element, attrs){
             element.on('load', function(){
                 $('.js-dotdotdot').dotdotdot();
                 $(element).dotdotdot();
             });

             //$('.js-dotdotdot').dotdotdot();

             if(scope.$last === true)
                $timeout(function(){
                    $('.js-dotdotdot').dotdotdot();
                });
         },
         scope: true
     };
});