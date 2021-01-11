export default async (req, res) => {
	const headers = {
		Authorization: "Token " + process.env.GITHUB_KEY,
	};
	// ******** Header **********
	const response = await fetch(
		"https://api.github.com/users/ElGodzilla",
		{ headers: headers }
	);
	const json = await response.json();
	const name = json.login;
	const avatar = json.avatar_url;
	const gitUrl = json.html_url;

	return res.status(200).json({
		// Header
		avatar,
		name,
		gitUrl,
	});
};
