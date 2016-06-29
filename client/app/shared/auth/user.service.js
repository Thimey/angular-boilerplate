const userService = ($http, $q, API) => {

	let user;

	const signup = (userDetails) => {
		return $http.post(`${API.url}/api/user`, userDetails)
			.then(({data}) => {
				user = data.user;
				console.log(user);
				return user;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	return {signup}
}

export {userService};