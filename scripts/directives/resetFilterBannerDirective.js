app.directive('resetFilterBanner', function(){
    return {

        restrict: 'A',
        link: function(scope, element, attrs){

            element.on('click', function(){

                var categoryButton = $('ul.report--categories > a li');

                if(categoryButton.hasClass('active'))
                    categoryButton.removeClass('active');

                scope.$apply(function(){
                    //scope.resetFilter();
                    scope.chooseCategory('');
                });

            });
        }
    };
});