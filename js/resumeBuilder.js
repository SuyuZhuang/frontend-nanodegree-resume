//$("#main").append("susu");

// [string].replace([old],[new])
//var email = "susu@udacity.com";
//var newEmail = email.replace("udacity","gmail");
//console.log(email);
//console.log(newEmail);

//var awesomeThoughts = "I am susu and I am AWESOME!!";
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

//---简历上的名字和职位---
//var name = "SuyuZhuang";
//var role = "Data Analyst";
//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

//---Array Manipulation---
//var sampleArray = [0,0,7];
//var last = sampleArray.pop()+1
//newArray = sampleArray.push(last)    
//console.log('sampleArray = ',sampleArray,' ;last =  ',last,' ; newArray =  ',newArray);

//---String Manipulation---
//var name = "AlbERt EINstEiN";
//var arr = name.split(" ");
//arr[0] = arr[0].toLowerCase();
//arr[1] = arr[1].toUpperCase();
//var fir = arr[0];
//var fir_l = fir.slice(0,1);
//var fir_r = fir.slice(1);
//fir_l = fir_l.toUpperCase();
//arr[0] = fir_l+fir_r;
//console.log(arr, name);

//---bio Object---
var bio = {
	"name" : "Suyu Zhuang",
	"role" : "Data Analyst",
	"contacts" : {
		"mobile":1317890765,
		"email":"ABC@123.com",
		"github" : "SuyuZhuang",
		"location":"Waterloo,ON,CA"},
	"welcomeMessage" : "Welcome to my resume page",
	"skills" : ["Python","Java","Hadoop","web"],
	"picture" : "images/fry.jpg"
};
//$("#main").prepend(bio.skills);

//---work object---
//var work = {};
//work.position = "Course Developer";
//work.employer = "Udacity";
//work.years = 0.3;
//var educatioon = {};
//educatioon["name"] = "University of Waterloo"
//educatioon["years"] = "2015-2017"
//education["city"] = "Waterloo,ON,CA"

//---JSON---
//http://jsonlint.com/
var education = {
	"schools":[
	{
		"name":"Huazhong University of Science and Technology",
		"graduated":2015,
		"location":"Wuhan, Huber, China",
		"degree":"BA",
		"majors":"Civel Enginering",
		"url":"http://example.com"
	},
	{
		"name":"University of Waterloo",
		"graduated":2017,
		"location":"Waterloo , ON, Canada",
		"degree":"Masters",
		"majors":"MSCI",
		"url":"http://example.com"
	}]
};

var work = {
	"jobs":[
	{
		"employer":"Full Wisdom",
		"title":"Infomation Analyst",
		"dates":"Apr-Aug 2016",
		"location":"Zhejiang,China",
		"description":"Developing and implementing databases, data collection systems, data analytics and other strategies that optimize statistical efficiency and quality"
	}]
};

var projects = {
	"projects":[
	{
		"title":"ONgov",
		"dates":"2016",
		"description":"A real-time project to help ON government building data analysis system",
		"images":["http://m.ps123.net/photoshop/UploadSoftPic/201407/2014072807274675.jpg"]
	},
	{
		"title":"Super market Data Analyst",
		"dates":"2016",
		"description":"Using MNL model to optimize superstore's assortments",
		"images":["http://ww3.sinaimg.cn/large/a74eed94jw1dtcy9naiosj.jpg"]
	}]
};


//--bio---
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//$("#header").append(HTMLcontactGeneric);
//var mobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
//formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
};

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
//	$("#footerContacts").append(formattedContactInfo[i]);
}

//---displayWork function---
function displayWork(){

for(i in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
	var result = formattedEmployer+formattedTitle
	$(".work-entry:last").append(result);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
	var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[i].description);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDesc);
};
};

displayWork();

//---Internationaliza Names---
$("#main").append(internationalizeButton);
function inName(){
	var arrName = bio.name.trim().split(" ");
	var first =  arrName[0];
	var last = arrName[1].toUpperCase();
	result = first+" "+last;
	return result;
}


//---encapsulation: projects---
projects.display = function(){
	for(var i=0;i<projects.projects.length;i++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
		//console.log(projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[i].dates);
		var formattedDesc = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDesc);
		

		if (projects.projects[i].images.length>0){
			for (image in projects.projects[i].images){
				var formattedImg = HTMLprojectImage.replace("%data%",projects.projects[i].images[image]);
				//console.log(projects.projects[i].images[image]);
				$(".project-entry:last").append(formattedImg);
			}
		}
};
};

projects.display();

//---customize the Portfolio--
$("#mapDiv").append(googleMap);

//---education---
education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].graduated);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();