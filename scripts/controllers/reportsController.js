app.controller('Reports', function($scope, $http, $filter, Reports, $timeout, $cookieStore){

    //Initialize elements to hold items from JSON file
    $scope.elements = [];
    $scope.filtered = [];

    var catFilteredLength;


    //Make Ajax request to receive JSON from server. //This needs to be a service
    Reports.getReports().then(function(response){

        //Populate elements object
        $scope.elements = response.data.elements;
        $scope.type='standard';

        //This defaults dataset to standard report types
        $scope.filtered = $filter('reportTypeFilter')($scope.elements, $scope.type);

        //Pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.filtered.length;
        $scope.numPerPage = 12;
        $scope.numPages = Math.ceil($scope.elements.length / $scope.numPerPage);

    });

    //Resets list of reports based on report type
    $scope.resetFilter = function () {
        switch($scope.type)
        {
            case 'standard':
                return $scope.filtered = $filter('reportTypeFilter')($scope.elements, 'standard');
            case 'custom':
                return $scope.filtered = $filter('reportTypeFilter')($scope.elements, 'custom');
        }
    };

    //Dynamically update the number of reports shown per page.
    $scope.getNumPerPage = function(){
        if($scope.all === true){
            return 'All';
        }
        else{
            return $scope.numPerPage;
        }
    };

    $scope.formatDate = function(date, interval)
    {
        Reports.formatDate(date, interval);
    };

    $scope.chooseCategory = function(category){

        $scope.category = category;
    };

    //Method that changes the number of reports being displayed
    $scope.reportsDisplayed = function(val){

        //If value of parameter is a number then, pass that data to number per page.
        if(typeof val === 'number'){
            if(val > 0) {
                $scope.all = false;
                $scope.numPerPage = val;
            }
            else{
                $scope.all = false;
                $scope.numPerPage = 12;
            }
        }
        else{
            $scope.numPerPage = $scope.totalItems;
            $scope.all = true;
        }
    };

    $scope.$watch('search.title', function(newVal){
        $scope.filtered = $filter('filter')($scope.elements, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
        $scope.currentPage = 1;
    }, true);

    //Updates the categories based on the filter
    $scope.$watch('category', function (newVal) {
        if(!angular.equals(newVal, '')) {
            $scope.filtered = $filter('categoryFilter')($scope.filtered, newVal);
            //catFilteredLength = $scope.filtered.length;
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
            $scope.currentPage = 1;
        }
        else
        {
            $scope.filtered = $scope.resetFilter();
            $scope.totalItems = $scope.filtered.length;
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
            $scope.currentPage = 1;
        }

    }, true);

    //Updates pagination based on filter for report types
    $scope.$watch('type', function(newVal, oldVal) {
        $scope.filtered = $filter('reportTypeFilter')($scope.elements, newVal);
        $scope.totalItems = $scope.filtered.length;
        $scope.numPerPage = 12;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
        $scope.currentPage = 1;
    }, true);

    $scope.$watch('filtered', function () {
        $scope.totalItems = $scope.filtered.length;
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
        $scope.currentPage = 1;
    });

    //Function that watches to see if the numbers per page value has changed and updates the number
    //$scope.$watch('numPerPage', function(value) {
    //
    //    //if($scope.type === 'standard'){
    //    //    if(!(value > 0))
    //    //        $scope.numPerPage = 12;
    //    //    else
    //    //        $scope.numPerPage = value;
    //    //}
    //    //else{
    //    //    if(!(value > 0))
    //    //        $scope.numPerPage = $scope.totalItems;
    //    //    else
    //    //        $scope.numPerPage = value;
    //    //}
    //});

    //This watches for a
    //$scope.$watchGroup(['search.title', 'category'], function(newVals){
    //
    //    //if(newVals[1] !== '' || !undefined){
    //    //    $scope.filtered = $filter('categoryFilter')($scope.elements, newVals[1]);
    //    //    $scope.totalItems = $scope.filtered.length;
    //    //    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //    //    $scope.currentPage = 1;
    //    //}
    //    //else if(newVals[0] !== '' || !undefined){
    //    //    $scope.filtered = $filter('filter')($scope.elements, newVals[0]);
    //    //    $scope.totalItems = $scope.filtered.length;
    //    //    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //    //    $scope.currentPage = 1;
    //    //}
    //
    //    var category = newVals[1];
    //    var search = newVals[0];
    //
    //    //If category isn't blank or undefined, then filter on category
    //    if(typeof category !==  "undefined"){
    //        $scope.filtered = $filter('categoryFilter')($scope.elements, newVals[1]);
    //
    //        //If search.title isn't blank or undefined, then filter on search.title too
    //        if(typeof search !== "undefined"){
    //            $scope.filtered = $filter('filter')($scope.filtered, search);
    //            $scope.totalItems = $scope.filtered.length;
    //            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //            $scope.currentPage = 1;
    //        }
    //        else{
    //            $scope.totalItems = $scope.filtered.length;
    //            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //            $scope.currentPage = 1;
    //        }
    //    }
    //    //If search.title isn't blank or undefined, then filter on search.title
    //    else if(typeof search !== "undefined"){
    //        $scope.filtered = $filter('filter')($scope.elements, search);
    //
    //        if(typeof category !== 'undefined'){
    //            $scope.filtered = $filter('categoryFilter')($scope.filtered, category);
    //            $scope.totalItems = $scope.filtered.length;
    //            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //            $scope.currentPage = 1;
    //        }
    //        else{
    //            $scope.totalItems = $scope.filtered.length;
    //            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //            $scope.currentPage = 1;
    //        }
    //    }
    //
    //    //If category isn't blank or undefined, then filter on category
    //        //If search.title isn't blank or undefined, then filter on search.title too
    //        //Else if search.title is blank or undefined, then no filter
    //    //Else if category is blank or undefined
    //        //
    //    //If search.title isn't blank or undefined, then filter on search.title
    //        //If category isn't blank or undefined, then filter on category
    //});

    //$scope.$watch('filtered', function(newVal, oldVal){
    //    console.dir(newVal);
    //}, true);

    //$scope.$watch('filteredT', function(newVal){
    //    $scope.filteredT = newVal;
    //    $scope.totalItems = $scope.filteredT.length;
    //    $scope.noOfPages = Math.ceil($scope.totalItems / $scope.numPerPage);
    //    $scope.currentPage = 1;
    //}, true);

    var html = '<div>\n    <input type="text"/>\n    \n</div>'

    //Function that matches category with their respective class
    $scope.categories = function (category)
    {
        switch(category)
        {
            case 'planning':
                return 'cat-planning';
            case 'budget':
                return 'cat-budget';
            case 'obligation':
                return 'cat-obligation';
            case 'performance':
                return 'cat-special';
            case 'vendor':
                return 'cat-vendor';
            case 'other':
                return 'cat-other';
        }
    };
});