function handleErrors(error, req, res, next) {
	console.log(error);
	const status = error.status || 500;
	res.status(status).send(`<h1>Something is broken oops !! </h1>`);
}

module.exports = handleErrors;
