var bio = {
	"name": "Erling Tokheim",

	"role": "Graphic designer",

	"contacts": {
		"mobile": "+47 000 00 000",
		"email": "e@tokheim.no",
		"github": "etokheim",
		"twitter": "@ErlingTokheim",
		"location": "Sandeid"
	},

	"welcomeMessage": "Welcome, dear traveler, to my awesome resume website!",

	"skills": [
		"Awesome",
		"Designer",
		"Web designer"
	],

	"biopic": "images/biopic.jpg",

	// Displays the object's content in it's appropriate places
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

		// Concatenates and displays the contact information
		var concatenatedContactInfo = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
		$("#topContacts").append(concatenatedContactInfo);
		$("#footerContacts").append(concatenatedContactInfo);

		var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedBioPic);

		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		$("#header").append(HTMLskillsStart);

		// Loops through and displays an array of skills
		this.skills.forEach(function(skill) {
			var formattedSkills = HTMLskills.replace("%data%", skill);
			$("#skills").append(formattedSkills);
		});
	}
}

var education = {
	"schools": [
		{
			"name": "Lundeneset High School",
			"city": "Ølensvåg",
			"degree": "Higher Education Entrance Qualification",
			"major": "None",
			"location": "Lundeneset High School",
			"dates": "2013 - 2014"
		},

		{
			"name": "Lundeneset High School",
			"city": "Ølensvåg",
			"degree": "Media and communication",
			"major": "Media and communication",
			"location": "Lundeneset vidaregåande skule",
			"dates": "2011 - 2013"
		},

		{
			"name": "Norwegian Armed Forces Media Centre",
			"city": "Oslo",
			"degree": "certificate of apprenticeship",
			"major": "Media Graphics Artist",
			"location": "Akershus festning",
			"dates": "2014 - 2016"
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

	// Displays the object's content in it's appropriate places
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

var work = {
	"jobs": [
		{
			"employer": "Norwegian Agriculture Service",
			"title": "Relief worker (farm)",
			"dates": "2011-2012",
			"description": "Hard work in a challenging landscape at a sheep farm. Never boring and ever challenging. The work included, but was not limited to maintenance, reparations, field work, feeding the animals and most importantly securing food for the animals during the winter.",
			"location": "Laupsa"
		},

		{
			"employer": "Coop Norway",
			"title": "Shop assistant",
			"dates": "2010-2010",
			"description": "As a shop assistant my job included customer relations, supplying merchandise and making sure everything ran smoothly.",
			"location": "Øystese"
		}
	],

	// Displays the object's content in it's appropriate places
	"display": function() {
		for(job in work.jobs) {
			// create new div for work experiences
			$("#workExperience").append(HTMLworkStart);

			// Concatenate employer and title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);

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
			"title": "Meme gathering project",
			"dates": "2016",
			"description": "I learned a lot from this project. It really took my meme understanding to a whole new level!",
			"images": ["images/meme1.jpg", "images/meme2.jpg", "images/meme3.jpg"]
		}
	],

	"display": function() {
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
}

// Runs the display functions to make the content appear.
work.display();
bio.display();
projects.display();
education.display();

// Creates the google map
$("#mapDiv").append(googleMap);
initializeMap();