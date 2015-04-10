/**
 * Created by kshirley on 3/30/15.
 */
app.directive('disableOnType', function(){
    return{
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs){


            scope.$watch('search.title', function(newVal, oldVal){

                if(newVal !== undefined){
                    console.log(newVal);


                    if(newVal.length !== 0){
                        console.log(newVal);

                        //element.attr('disabled', true);
                        element.addClass('hidden');
                        console.log(element.text());
                    }
                    else{
                        element.removeClass('hidden');
                    }
                }
            });
        }
    };
});