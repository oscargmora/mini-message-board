let express = require("express");
let router = express.Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
];

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

/* Form Section */
router.get("/new", function (req, res, next) {
	res.render("form", { title: "Form" });
});

router.post("/new", (req, res) => {
	let messageText = req.body.messageText;
	let messageUser = req.body.messageUser;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect("/");
});

module.exports = router;
