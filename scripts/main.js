//Angular module that handles the filtering and presentation of the JSON data
var app = angular.module('ERS', ['ui.bootstrap', 'ReportService', 'dibari.angular-ellipsis', 'ngCookies']);

/* Global variable for the type of report the link will use */
var linkTypeOfReport = "";

/* Send the Reqeust a Report info */
function sendthereport()
{

	var reportStandard = "";
	reportStandard += "I would like to request changes to the information in an existing report (e.g. add new data fields).\n";
	reportStandard += "Name: " + document.getElementById("report-standard11").value + "\n";
	reportStandard += "Describe: " + document.getElementById("report-standard12").value + "\n";
	reportStandard += "Provide Details: " + document.getElementById("report-standard13").value + "\n\n";

	var reportStandard2 = "";
	reportStandard2 += "I would like to request that additional graphics or analysis be added to an existing report.\n";
	reportStandard2 += "Name: " + document.getElementById("report-standard21").value + "\n";
	reportStandard2 += "Describe: " + document.getElementById("report-standard22").value + "\n";
	reportStandard2 += "How will this additional analysis be used?: " + document.getElementById("report-standard23").value + "\n";
	reportStandard2 += "Provide: " + document.getElementById("report-standard24").value + "\n\n";

	var reportStandard3 = "";
	reportStandard3 += "I would like to request clarification of fields and/or amounts in an existing standard report.\n";
	reportStandard3 += "Name: " + document.getElementById("report-standard31").value + "\n";
	reportStandard3 += "Describe: " + document.getElementById("report-standard32").value + "\n";
	reportStandard3 += "Provide: " + document.getElementById("report-standard33").value + "\n\n";

	var oneTimeAdHoc = "";
	oneTimeAdHoc += "You selected a one-time ad-hoc report or information pull.\n";
	oneTimeAdHoc += "Have you requested this information before? If yes, please explain: " + document.getElementById("one-time-ad-hoc1").value + "\n";
	oneTimeAdHoc += "Describe the business question to be answered: " + document.getElementById("one-time-ad-hoc2").value + "\n";
	oneTimeAdHoc += "What type of information will the report contain?: " + document.getElementById("one-time-ad-hoc3").value + "\n";
	oneTimeAdHoc += "What specific data fields must be included? Include as much detail as possible: " + document.getElementById("one-time-ad-hoc4").value + "\n";
	oneTimeAdHoc += "When is this report needed?: " + document.getElementById("one-time-ad-hoc5").value + "\n";
	oneTimeAdHoc += "Please provide any additional relevant information: " + document.getElementById("one-time-ad-hoc6").value + "\n\n";

	var reportOngoing = "";
	reportOngoing += "You selected a report needed on an on-going basis.\n";
	reportOngoing += "Internal Reporting?: " + document.getElementById("report-ongoing3").checked + "\n";
	reportOngoing += "External Reporting?: " + document.getElementById("report-ongoing4").checked + "\n";
	reportOngoing += "Other Type of Reporting?: " + document.getElementById("report-ongoing5").checked + "\n";
	reportOngoing += "Type of Reporting Description: " + document.getElementById("report-ongoing6").value + "\n";
	reportOngoing += "Describe the business question to be answered: " + document.getElementById("report-ongoing1").value + "\n";
	reportOngoing += "Describe the user audience: " + document.getElementById("report-ongoing2").value + "\n";
	reportOngoing += "What type of information will the report contain?: " + document.getElementById("report-ongoing7").value + "\n";
	reportOngoing += "What specific data fields must be included?: " + document.getElementById("report-ongoing8").value + "\n";
	reportOngoing += "Are any graphics or analysis needed?: " + document.getElementById("report-ongoing9").value + "\n";
	reportOngoing += "Please provide any additional relevant information: " + document.getElementById("report-ongoing10").value + "\n\n";

	var reportDetailed = "";
	reportDetailed += "You selected a detailed analysis of a complex business question.\n";
	reportDetailed += "Describe, in as much detail as possible, the business question to be answered: " + document.getElementById("report-detailed1").value + "\n";
	reportDetailed += "Describe the desired deliverable, including type of analysis to be conducted, format, and requested charts or graphics: " + document.getElementById("report-detailed2").value + "\n";
	reportDetailed += "Identify any existing data sources and/or attempts to address this question: " + document.getElementById("report-detailed3").value + "\n";
	reportDetailed += "Who is the intended audience?: " + document.getElementById("report-detailed4").value + "\n";
	reportDetailed += "Is this report needed to prepare for a specific event? If yes, describe the event and the timeframe: " + document.getElementById("report-detailed5").value + "\n";
	reportDetailed += "Which offices and/or individuals will collaborate on the production of this report?: " + document.getElementById("report-detailed6").value + "\n";
	reportDetailed += "Please provide any additional relevant information: " + document.getElementById("report-detailed7").value + "\n\n";

	var reportNoCategory = "";
	reportNoCategory += "Your request does not fall into any of these categories.\n";
	reportNoCategory += "Describe your request in as much detail as possible: " + document.getElementById("report-nocategory1").value + "\n\n";

	var forErsTeam = "";
	forErsTeam += "Please provide the following information for follow up by the ERS team.\n";
	forErsTeam += "Name: " + document.getElementById("for-ers-team1").value + "\n";
	forErsTeam += "Title: " + document.getElementById("for-ers-team2").value + "\n";
	forErsTeam += "Office: " + document.getElementById("for-ers-team3").value + "\n";
	forErsTeam += "Phone: " + document.getElementById("for-ers-team4").value + "\n";
	forErsTeam += "Email: " + document.getElementById("for-ers-team5").value + "\n";
	forErsTeam += "Other - Name: " + document.getElementById("for-ers-team6").value + "\n";
	forErsTeam += "Other - Title and Office: " + document.getElementById("for-ers-team7").value + "\n";
	forErsTeam += "Miscellaneous Questions\nWhich offices and/or individuals will collaborate on the production of this report? List in as much detail as possible: " + document.getElementById("for-ers-team8").value + "\n";
	forErsTeam += "Provide any additional information on desired timeframe: " + document.getElementById("for-ers-team9").value + "\n";
	forErsTeam += "Other Questions: " + document.getElementById("for-ers-team10").value + "\n\n";


	if (document.getElementById("eisting-report-yes1").checked == true)
	{
		console.log(reportStandard);
	}
	if (document.getElementById("existing-report-yes2").checked == true)
	{
		console.log(reportStandard2);
	}
	if (document.getElementById("existing-report-yes3").checked == true)
	{
		console.log(reportStandard3);
	}
	if (linkTypeOfReport == "ad-hoc")
	{
		console.log(oneTimeAdHoc);
	}
	if (linkTypeOfReport == "report-ongoing")
	{
		console.log(reportOngoing);
	}
	if (linkTypeOfReport == "report-detailed")
	{
		console.log(reportDetailed);
	}
	if (linkTypeOfReport == "no-category")
	{
		console.log(reportNoCategory);
	}
	console.log(forErsTeam);


	// ReportStandard
	for (var i = 1; i <= 3; i++) {
		varname = "report-standard1" + i;
		document.getElementById(varname).value = "";
	}

	// ReportStandard2
	for (var i = 1; i <= 4; i++) {
		varname = "report-standard2" + i;
		document.getElementById(varname).value = "";
	}

	// ReportStandard3
	for (var i = 1; i <= 3; i++) {
		varname = "report-standard3" + i;
		document.getElementById(varname).value = "";
	}


	// oneTimeAdHoc
	for (var i = 1; i <= 6; i++) {
		varname = "one-time-ad-hoc" + i;
		document.getElementById(varname).value = "";
	}

	document.getElementById("report-ongoing1").value = "";
	document.getElementById("report-ongoing2").value = "";
	document.getElementById("report-ongoing6").value = "";
	document.getElementById("report-ongoing7").value = "";
	document.getElementById("report-ongoing8").value = "";
	document.getElementById("report-ongoing9").value = "";
	document.getElementById("report-ongoing10").value = "";


	// reportDetailed
	for (var i = 1; i <= 7; i++) {
		varname = "report-detailed" + i;
		document.getElementById(varname).value = "";
	}

	// reportNoCategory
	document.getElementById("report-nocategory1").value = "";

	// forErsTeam
	for (var i = 1; i <= 10; i++) {
		varname = "for-ers-team" + i;
		document.getElementById(varname).value = "";
	}


	document.getElementById('selection-selected').innerHTML = 'Select one of the following';
	document.getElementById('report-options-seeking').style.display = 'none';
	document.getElementById('existing-report-no-form').reset();
	linkTypeOfReport = "";

	// ************************************************
	// *** To do: Enter sent email service function ***
	// ************************************************
	
}

function sendthevalidatereport()
{


	var modalValidateReport1 = "";
	modalValidateReport1 += "description=" + encodeURIComponent(document.getElementById("modal-validate-report11").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report11").value);
	modalValidateReport1 += "&name=" + encodeURIComponent(document.getElementById("modal-validate-report12").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report12").value);
	modalValidateReport1 += "&title=" + encodeURIComponent(document.getElementById("modal-validate-report13").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report13").value);
	modalValidateReport1 += "&office=" + encodeURIComponent(document.getElementById("modal-validate-report14").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report14").value);
	modalValidateReport1 += "&email=" + encodeURIComponent(document.getElementById("modal-validate-report15").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report15").value);
	modalValidateReport1 += "&phone=" + encodeURIComponent(document.getElementById("modal-validate-report16").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report16").value);

	var modalValidateReport2 = "";
	modalValidateReport2 += "&describereportdata=" + encodeURIComponent(document.getElementById("modal-validate-report21").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report21").value);
	modalValidateReport2 += "&describevalidation=" + encodeURIComponent(document.getElementById("modal-validate-report22").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report22").value);
	modalValidateReport2 += "&reportintext=" + encodeURIComponent(document.getElementById("modal-validate-report23").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report23").value);
	modalValidateReport2 += "&specificevent=" + encodeURIComponent(document.getElementById("modal-validate-report24").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report24").value);
	modalValidateReport2 += "&addinformation=" + encodeURIComponent(document.getElementById("modal-validate-report25").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report25").value);
	modalValidateReport2 += "&othercomments=" + encodeURIComponent(document.getElementById("modal-validate-report26").getAttribute("placeholder")) + "%3A" + encodeURIComponent(document.getElementById("modal-validate-report26").value);


	modalValidateReport1 = modalValidateReport1.replace(/\./g,"%2E");
	modalValidateReport2 = modalValidateReport2.replace(/\./g,"%2E");


	// modalValidateReport1
	for (i = 1; i <= 6; i++) {
		varname = "modal-validate-report1" + i;
		document.getElementById(varname).value = "";
	}

	// modalValidateReport2
	for (i = 1; i <= 6; i++) {
		varname = "modal-validate-report2" + i;
		document.getElementById(varname).value = "";
	}

	$.ajax({
		type: "POST",
		url: "submit.aspx",
		dataType: "text",
		data: modalValidateReport1 + modalValidateReport2,
		success: function(data){
			alert(data)	;
		}
		/* data: 'test=test&a=Hello World!&description=James is awesome' */
	});
}
//This is how you merge two objects. This will come in handy when merging the
//(function(){
//  var test = {Hey:"Guy", Thois:"Here"};
//  var test1 = {Yo:"Man", There:"Here"};
//  console.log($.extend({}, test, test1));
//
//})();