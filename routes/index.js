var path = require('path');
var url = require('url');

exports.index = function(req, res){

	res.render('index', {view: "index"});
}

exports.submit = function(req, res){

	res.render('submit', {view: "submit"});
}

exports.sendmail = function(req, res){

	var nodemailer = require('nodemailer');
	var sgTransport = require('nodemailer-sendgrid-transport');

	var options = {
	    auth: {
	        api_user: process.env.SENDGRID_USERNAME,
	        api_key: process.env.SENDGRID_PASSWORD
	    }
	}

	var mailer = nodemailer.createTransport(sgTransport(options));

	var email = {
	    to: 'chrismeyers94@gmail.com',
	    from: {
	    	name: req.query.member,
	    	address: req.query.email
	    },
	    subject: 'ELEVATE BLUE: ',
	    text: "Hello",
			html: 	"<table border=1><tr><td>Members:</td><td>"+req.query.member+"</td></tr><tr><td>Partners:</td><td>"+req.query.partner+"</td></tr><tr><td>Email:</td><td>"+req.query.email+"</td></tr><tr><td>Phone:</td><td>"+req.query.phone+"</td></tr><tr><td>Problem:</td><td>"+req.query.problem+"</td></tr><tr><td>Customers:</td><td>"+req.query.cust+"</td></tr><tr><td>Unique Value Proposition:</td><td>"+req.query.val+"</td></tr><tr><td>Solutions:</td><td>"+req.query.solution+"</td></tr><tr><td>Channels:</td><td>"+req.query.channels+"</td></tr><tr><td>Revenue:</td><td>"+req.query.revenue+"</td></tr><tr><td>Costs:</td><td>"+req.query.cost+"</td></tr><tr><td>Metrics:</td><td>"+req.query.metrics+"</td></tr><tr><td>Advantage:</td><td>"+req.query.advantage+"</td></tr></table>"
	};

	mailer.sendMail(email, function(err, res) {
	    if (err) {
	        console.log(err)
	    }
	    console.log(res);

	});

	res.send('sent');

}
