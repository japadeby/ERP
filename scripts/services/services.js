angular.module('ReportService', [])

.factory('Reports', function($http){
	var Reports = {

		getReports: function(){
			return $http.get("ERSPortalReport.json");
		},

		formatDate: function (reportdate, interval) {
		   var currentdate = new Date();
		   if (interval === "Updated Annually") {
		      var comparedate = new Date(currentdate);
		      comparedate.setFullYear(currentdate.getFullYear() - 1);
		      if (reportdate < comparedate)
		      {
		         var returndate = new Date(reportdate);
		         returndate.setFullYear(currentdate.getFullYear());
				 if (returndate > currentdate)
				 {
					returndate.setFullYear(returndate.getFullYear() - 1);
				 }
		         return returndate;
		      }
		      else
		      {
		         return reportdate;
		      }  
		   }
		   else if (interval === "Updated Quarterly") {
		      var comparedate = new Date(currentdate);
		      comparedate.setMonth(currentdate.getMonth() - 3);
		      if (reportdate < comparedate)
		      {
		         var monthtoadd = currentdate.getFullYear() * 12 + currentdate.getMonth() - reportdate.getFullYear() * 12 - reportdate.getMonth() - ((reportdate.getFullYear() * 12 + reportdate.getMonth()) % 4);
		         var returndate = new Date(reportdate);
		         returndate.setMonth(reportdate.getMonth() + monthtoadd);
				 if (returndate > currentdate)
				 {
					returndate.setMonth(reportdate.getMonth() - 3);
				 }
		         return returndate;
		      }
		      else
		      {
		         return reportdate;
		      }  
		   }
		   else if (interval === "monthly") {
		      var comparedate = new Date(currentdate);
		      comparedate.setMonth(currentdate.getMonth() - 1);
		      if (reportdate < comparedate)
		      {
		         var monthtoadd = currentdate.getFullYear() * 12 + currentdate.getMonth() - reportdate.getFullYear() * 12 - reportdate.getMonth();
		         var returndate = new Date(reportdate);
		         returndate.setMonth(reportdate.getMonth() + monthtoadd);
				 if (returndate > currentdate)
				 {
					returndate.setMonth(reportdate.getMonth() - 1);
				 }
		         return returndate;
		      }
		      else
		      {
		         return reportdate;
		      }  
		   }
		   else if (interval === "Updated Daily") {
		      return new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate());  
		   }
		   else return reportdate;
			}

			};

			return Reports
		});

var displayDate = function (reportdate, interval) {
   var currentdate = new Date();
   if (interval === "annually") {
      var comparedate = new Date(currentdate);
      comparedate.setFullYear(currentdate.getFullYear() - 1);
      if (reportdate < comparedate)
      {
         var returndate = new Date(reportdate);
         returndate.setFullYear(currentdate.getFullYear());
		 if (returndate > currentdate)
		 {
			returndate.setFullYear(returndate.getFullYear() - 1);
		 }
         return returndate;
      }
      else
      {
         return reportdate;
      }  
   }
   else if (interval === "quarterly") {
      var comparedate = new Date(currentdate);
      comparedate.setMonth(currentdate.getMonth() - 3);
      if (reportdate < comparedate)
      {
         var monthtoadd = currentdate.getFullYear() * 12 + currentdate.getMonth() - reportdate.getFullYear() * 12 - reportdate.getMonth() - ((reportdate.getFullYear() * 12 + reportdate.getMonth()) % 4);
         var returndate = new Date(reportdate);
         returndate.setMonth(reportdate.getMonth() + monthtoadd);
		 if (returndate > currentdate)
		 {
			returndate.setMonth(reportdate.getMonth() - 3);
		 }
         return returndate;
      }
      else
      {
         return reportdate;
      }  
   }
   else if (interval === "monthly") {
      var comparedate = new Date(currentdate);
      comparedate.setMonth(currentdate.getMonth() - 1);
      if (reportdate < comparedate)
      {
         var monthtoadd = currentdate.getFullYear() * 12 + currentdate.getMonth() - reportdate.getFullYear() * 12 - reportdate.getMonth();
         var returndate = new Date(reportdate);
         returndate.setMonth(reportdate.getMonth() + monthtoadd);
		 if (returndate > currentdate)
		 {
			returndate.setMonth(reportdate.getMonth() - 1);
		 }
         return returndate;
      }
      else
      {
         return reportdate;
      }  
   }
   else if (interval === "daily") {
	   //No date
      return new Date(currentdate.getFullYear(), currentdate.getMonth(), currentdate.getDate());  
   }
   else return reportdate;
}