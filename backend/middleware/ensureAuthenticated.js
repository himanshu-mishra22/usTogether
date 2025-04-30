export async function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated && req.isAuthenticated()) {
		return next();
	}
	
	// Redirect to login or send 401 for APIs
	if (req.accepts('html')) {
		res.redirect(process.env.CLIENT_BASE_URL + "/login");
	} else {
		res.status(401).json({ message: "Unauthorized" });
	}
}
