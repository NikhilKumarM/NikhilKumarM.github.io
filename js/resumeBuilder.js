/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$ ("#main").append("Nikhil Kumar");
 /*var lastname="Mengani";
 var age=23;
 var awesomethoughts ="I am Nikhil Kumar and I am awesome";
 var funthoughts= awesomethoughts.replace("awesome","fun");
 console.log(awesomethoughts); 
 console.log(funthoughts);*/
 /*var name= "Nikhil Kumar Mengani";
 var role="Software Engineer";
 var formattedName=HTMLheaderName.replace("%data%",name);
 var formattedRole=HTMLheaderRole.replace("%data%", role);
 
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);*/
//console.log("got stuck");
/*var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formatbioimage = HTMLbioPic .replace("%data%",bio.pictureURL);
var formatwelcomemsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var  formatskills =HTMLskills.replace("%data%", bio.skills);
var formatgenericcontact= HTMLcontactGeneric.replace("%contact%",bio.ContactInfo.Email).replace("%data%",bio.ContactInfo.Mobile);;

var formatemail= HTMLemail.replace("%data%",bio["ContactInfo"]["Email"]);
var formatmobile= HTMLmobile.replace("%data",bio["ContactInfo"]["Mobile"]);
var formatworktitle = HTMLworkTitle.replace("%data%", work["jobposition"]);
var formatSchoolName = HTMLschoolName.replace("%data%", education.MS.University);
console.log("got stuck");
$("#header").append(formattedName);
$("#header").append(formattedRole);
//$("#header").append(formatemail);
//$("#header").append(formatmobile);
$("#header").append(formatgenericcontact);
$("#header").append(formatbioimage);
$("#header").append(formatwelcomemsg);
$("#header").append(formatskills);
$("#header").append(formatSchoolName);
//$("#educaion").append(formatSchoolName);
$("#header").append(formatworktitle);

*/
function displayWork(){
var skills = ["Java"," python"," C"," Javascript"]

// bio

var bio={
	"name" : "Nikhil Kumar Mengani",
	"role" : "Looking for Software Engineering Internship",
	"contacts": {"Email": "mnikhil1@umbc.edu" ,
	             "Mobile" : "+1- 301- 675- 3754",
	              "location": "Baltimore County"} ,
	"pictureURL" : "images/myimage1.jpg ",
	"welcomeMessage" : "I create Unique life",
	"skills" : skills,
	"linkedin " : "https://www.linkedin.com/in/nikhil-kumar-mengani-11502a91",
	"github"    : "https://github.com/NikhilKumarM",
	"mywebsite"  : "https://nikhil497.wordpress.com/"
};

// work experience

var work= {
	"works":[
	{
    "jobtitle": "Software Engineer",
	"employer": "Capgemini",
	"period":"Aug. 2015 - Jun. 2016" ,
	"location" : "Bangalore, India",
	"description" :"Developed user friendly bus ticket booking website using Microsoft Visual Studio.\\n Designed the database to manage the data of customers and service providers."
    },
    {
     "jobtitle": "Graduate Research Assistant",
     "employer" : "University of Maryland Baltimore County",
     "period" : "Nov. 2016 - present",
     "location": "Baltimore, MD",
     "description": "Big data analysis of Phamacogenomics data and predict the relation between disease, drug and gene."
    }
    ]
};

// education

var education ={
	"schools" : [
	 {
                  "University" : "Universiy Of Maryland Baltimore County",
                  "period" : "Aug.2016 - May.2018",
                  "GPA": "",
                  "location" : "Baltimore, MD",
                  "degree" : "Master of Science ",
                  "major" : "Computer Science"},
      {
    	           "University": "VNR Vignana Jyothi Institute of Engineering and Technology",
    	           "degree": "Bachelor of Technology",
    	           "major" : "Electronics and Communcation Engineering",
    	           "period":"Aug.2011 - May.2015",
    	           "GPA": "3.9/4",
    	           "location" : "Hyderabad, India"
    }]
};


 
/*
var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
*/
//projects
var projects= {
	"project" : [
	{
  "projecttitle": "Enhancing Customer Retention Using Big Data Analysis" , 
  "projectdate" : "Fall 2016",
  "description" : "Created the service that can predict the customers who will repeat the purchases after incentives been given to them by the company." },

  {"projecttitle": "Bon Voyage",
  "projectdate" : "Fall 2015",
   "description": "Created a website, which can be used to book bus tickets online, using Microsoft Visual studio. It has the two types of users, Service providers who can add their service and the passengers who can book their bus ticket online"},

  {"projecttitle":"Haptic Proximity Module",
  "projectdate": "Spring 2015",
  "description"	: "Designed and programmed a reliable, affordable bionic leg for amputees, with dynamics simulating a natural leg. (https://www.youtube.com/watch?v=JXLE-WtjCfw)"}                                                              
]};

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formatbioimage = HTMLbioPic .replace("%data%",bio.pictureURL);
var formatwelcomemsg= HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formatemail= HTMLcontactGeneric.replace("%contact%","Email").replace("%data%",bio.contacts.Email);
var formatmobile= HTMLcontactGeneric.replace("%contact%","Mobile").replace("%data%",bio.contacts.Mobile);

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#header").append(formatemail).append(formatmobile);
$("#header").append(formatbioimage);
$("#header").append(formatwelcomemsg);

// skills
if(bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formatskill=  HTMLskills.replace("%data%",bio.skills[skill]);
		$("#header").append(formatskill);
		console.log(skill);
	}
}
//education
for (item in education.schools)
{

$("#education").append(HTMLschoolStart);
var school= education.schools[item];
var formatschool= HTMLschoolName.replace("%data%",school.University);
$(".education-entry:last").append(formatschool);
var formatdegree= HTMLschoolDegree.replace("%data%",school.degree);
$(".education-entry:last").append(formatdegree);
var formatperiod = HTMLschoolDates.replace("%data%",school.period);
$(".education-entry:last").append(formatperiod);
var formatlocation = HTMLschoolLocation.replace("%data%",school.location);
$(".education-entry:last").append(formatlocation);
var formatmajor=HTMLschoolMajor.replace("%data%",school.major);
$(".education-entry:last").append(formatmajor);
console.log(school.location);
}

//work

for (item in work.works)
{
//$("#workExperience").append(formatHTMLworkStart);
$("#workExperience").append(HTMLworkStart);
var workexp= work.works[item];
var formattitle= HTMLworkTitle.replace("%data%",workexp.jobtitle);
var formatemployer= HTMLworkEmployer.replace("%data%",workexp.employer);
$(".work-entry:last").append(formatemployer+""+formattitle);
//$("#workExperience").append(formattitle);

var formatperiod =HTMLworkDates.replace("%data%", workexp.period);
$(".work-entry:last").append(formatperiod);
var formatlocation = HTMLworkLocation.replace("%data%", workexp.location);
$(".work-entry:last").append(formatlocation);
var formatdescription= HTMLworkDescription.replace("%data%", workexp.description);
$(".work-entry:last").append(formatdescription);


}
projects.displayProjects= function(){
	var proj= projects.project;
	for(item in proj){
    $("#projects").append(HTMLprojectStart);
      
var formatprojecttitle= HTMLprojectTitle.replace("%data%",proj[item].projecttitle);
var formatdate= HTMLprojectDates.replace("%data%",proj[item].projectdate);
var formatprojectdescription= HTMLprojectDescription.replace("%data%",proj[item].description);
//var HTMLprojectImage = '<img src="%data%">';
$(".project-entry:last").append(formatprojecttitle);
$(".project-entry:last").append(formatdate);
$(".project-entry:last").append(formatprojectdescription);
console.log(formatprojecttitle);
	}
}
projects.displayProjects();
$("#mapDiv").append(googleMap);
}
displayWork();
