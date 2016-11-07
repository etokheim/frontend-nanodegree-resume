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

	"biopic": "",

	"display": function() {
		var formattedHeaderName = HTMLheaderName.replace("%data%", this.name);
		$("#header").append(formattedHeaderName);

		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").append(formattedRole);

		var formattedMobile = HTMLcontactGeneric.replace("%contact%", "Mobile");
		formattedMobile = formattedMobile.replace("%data%", this.contacts.mobile);
		$("#topContacts").append(formattedMobile);

		var formattedEmail = HTMLcontactGeneric.replace("%contact%", "e-mail");
		formattedEmail = formattedEmail.replace("%data%", this.contacts.email);
		$("#topContacts").append(formattedEmail);

		var formattedGithub = HTMLcontactGeneric.replace("%contact%", "GitHub");
		formattedGithub = formattedGithub.replace("%data%", this.contacts.github);
		$("#topContacts").append(formattedGithub);

		var formattedTwitter = HTMLcontactGeneric.replace("%contact%", "Twitter");
		formattedTwitter = formattedTwitter.replace("%data%", this.contacts.twitter);
		$("#topContacts").append(formattedTwitter);

		var formattedLocation = HTMLcontactGeneric.replace("%contact%", "Location");
		formattedLocation = formattedLocation.replace("%data%", this.contacts.location);
		$("#topContacts").append(formattedLocation);
	}
}

var education = {
	"schools": [
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Generell studiekompetanse",
			"major": "None",
			"location": "Lundeneset vidaregåande skule"
		},
		{
			"name": "Lundeneset vidaregåande skule",
			"city": "Ølensvåg",
			"degree": "Media and communication",
			"major": "None",
			"location": "Lundeneset vidaregåande skule"
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
	]
}

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
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
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