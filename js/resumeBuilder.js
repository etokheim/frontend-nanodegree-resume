var bio = {
	"name": "Erling Tokheim",

	"role": "Graphic designer",

	"contacts": {
		"mobile": "+47 000 00 000",
		"email": "e@tokheim.no",
		"github": "http://github.com/etokheim",
		"twitter": "etokheim",
		"location": "Sandeid"
	},

	"welcomeMessage": "Welcome dear traveler!",

	"skills": [
		"Awesome",
		"Designer",
		"Web designer"
	],

	"biopic": "https://s-media-cache-ak0.pinimg.com/236x/5e/e6/95/5ee695e34856d22c2538a22133f3f4e8.jpg",

	"display": function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);

		var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedHeaderName);

		var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", this.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);

		// Concatenates the contact information
		var concatenatedContactInfo = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;

		$("#topContacts").append(concatenatedContactInfo);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		$("#header").append(HTMLskillsStart);

		this.skills.forEach(function(skill) {
			var formattedSkills = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkills);
		});

		$("#footerContacts").append(concatenatedContactInfo);
	}
}

var education = {
	"schools": [
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Generell studiekompetanse",
			"major": "None",
			"location": "Lundeneset vidaregåande skule",
			"dates": "2016"
		},
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Media and communication",
			"major": "None",
			"location": "Lundeneset vidaregåande skule",
			"dates": "2016"
		}
	],

	"onlineCourses": [
		{
			"title": "Front-end Web Developer",
			"school": "Udacity",
			"dates": "2016",
			"url": "udacity.com/front-end-web-developer"
		},

		{
			"title": "Typography",
			"school": "Lynda",
			"dates": "2016",
			"url": "lynda.com/typography"
		}
	],

	"display": function() {
		// Creates a new div with the education-entry class inside #education
		$("#education").append(HTMLschoolStart);

		// Loop to display school information
		this.schools.forEach(function(school) {
			var formattedName = HTMLschoolName.replace("%data%", school.name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry").append(formattedName + formattedDegree);

			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry").append(formattedDates);

			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry").append(formattedLocation);

			var formattedMajor = HTMLschoolMajor.replace("%data%", school.major);
			$(".education-entry").append(formattedMajor);
		});

		// Creates a new div with the education-entry class inside #education
		$("#education").append(HTMLschoolStart);

		// Appends the h3 (Online Classes)
		$(".education-entry:last").append(HTMLonlineClasses);

		this.onlineCourses.forEach(function(course) {
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			$(".education-entry:last").append(formattedTitle + formattedSchool);

			var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
			$(".education-entry:last").append(formattedDates);

			var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
			$(".education-entry:last").append(formattedUrl);
		});

	}
}

education.display();

var work = {
	"jobs": [
		{
			"employer": "Norske landbrukstenester",
			"title": "Avløysar",
			"dates": "2011-2012",
			"description": "J sdfj asdf sd jasdfjlas df asd fjljwel afs dlfjqwelj",
			"location": "Laupsa"
		},

		{
			"employer": "Coop Norway",
			"title": "Co worker",
			"dates": "2010-2010",
			"description": "J sdfj asdf sd jasdfjlas df asd fjljwel afs dlfjqwelj",
			"location": "Øystese"
		}
	],

	"display": function() {
		for(job in work.jobs) {
			// create new div for work experiences
			$("#workExperience").append(HTMLworkStart);

			// Concat employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var projects = {
	"projects": [
		{
			"title": "Web design project",
			"dates": "2016",
			"description": "This project was very cool!",
			"images": ["https://s-media-cache-ak0.pinimg.com/236x/5e/e6/95/5ee695e34856d22c2538a22133f3f4e8.jpg"]
		}
	],

	"display": function() {

	}
}


work.display();
bio.display();

$(document).click(function(loc) {
  logClicks(loc.clientX, loc.clientY);
});

function logClicks(x, y) {
	console.log(x, y);
}


function locationizer(workObj) {
	var arrayOfJobs = [];
	for (job in work.jobs) {
		arrayOfJobs.push(work.jobs[job].location);
	}

	return arrayOfJobs;
}

locationizer(work);

projects.display = function() {
	for(project in projects.projects) {
		// create new div for work experiences
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

// var location = ["Oslo", "Sidney", "Andorra"];
$("#mapDiv").append(googleMap);
initializeMap();

// pinPoster({"locations": ["Oslo", "Sidney", "Andorra"]});