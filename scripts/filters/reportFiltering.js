/**
 * Created by kshirley on 11/5/14.
 */
app.filter('categoryFilter', function () {
    return function (input, category) {
        var filtered = [];
        if(!angular.equals(category, ''))
        {
            angular.forEach(input, function(val){

                if(angular.equals(val.category, category)){
                    filtered.push(val)
                }
            });
            return filtered;
        }

        return input;
    };
})
.filter('reportTypeFilter', function () {
    return function (input, type) {
        var filtered = [];

        if(!angular.equals(type, ''))
        {
            angular.forEach(input, function(val){

                if(angular.equals(val.type, type)){
                    filtered.push(val)
                }
            });
            return filtered;
        }
        return input;
    };
})
.filter('categoryAndSearch', function(){
        return function (input, vals) {
            var filtered = [];

            var searchTitle = vals[0];
            var category = vals[1];

            if(!angular.equals(category, ''))
            {
                angular.forEach(input, function(val){

                    if(angular.equals(val.category, category)){
                        filtered.push(val)
                    }
                });
                return filtered;
            }

            return input;
        };
});
