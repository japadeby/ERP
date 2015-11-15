app.directive('ellipsisDirective', function($timeout){
     return{
         restrict: 'A',
         link: function(scope, element, attrs){
             //element.on('load', function(){
             //    //$('.js-dotdotdot').dotdotdot();
             //    $(element).dotdotdot();
             //
             //    $(element).on('click', function(e){
             //        console.log(e);
             //    });
             //});
             //
             //element.on('click', function(){
             //    console.log(this.text);
             //});
             //
             ////$('.js-dotdotdot').dotdotdot();
             //
             //if(scope.$last === true)
             //   $timeout(function(){
             //       $('.js-dotdotdot').dotdotdot();
             //   });

             element.on('mouseenter', function(e){
                console.log();
             });
         },
         scope: true
     };
});