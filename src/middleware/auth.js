function checkBasicAuth(req, res, next) {
	const { username, password } = req.cookies;
	if (username === "admin" && password === "password") return next();
	else res.send("not authorised");
}

function setCookie(req, res, next) {
	const { username, password } = req.body;
	if (username === "admin" && password === "password") {
		res
			.cookie("username", req.body.username)
			.cookie("password", req.body.password);
		res.status(200).send("loggedin");
	} else res.send("wrong credentials");
}
module.exports = { checkBasicAuth, setCookie };
