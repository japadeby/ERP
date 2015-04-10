//Functionality that handles Click state for filter buttons and adding active and inactive class
app.directive('filterButton', function($cookieStore){
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs){

            element.bind('click', function(){

                //Gets the inner text from button tag.
                var text = attrs.category;

                //This selector adds the first-active class on the element. This is necessary for
                var firstSelected = $(element).closest('a').siblings().find('li.active').addClass("first-active")

                if(element.hasClass('active'))
                {
                    //Reset the categories
                    element.removeClass('active');

                    //Update model in the controller
                    scope.$apply(function(){
                        //scope.category.category = '';
                        //scope.category.category = '';
                        scope.chooseCategory('');
                    });
                }
                else
                {
                    //Add active class to the element that was clicked
                    element.addClass('active');

                    //
                    if(firstSelected.hasClass('first-active'))
                    {
                        //Handles styling
                        firstSelected.removeClass('active first-active');

                        scope.$apply(function(){
                            scope.chooseCategory('');
                        });
                    }

                    //Update model in the controller
                    scope.$apply(function(){

                        //scope.category.category = text;
                        //console.log(scope.totalItems);
                        scope.chooseCategory(text);
                    });
                }
                return false;
            });
        }
    };
});
