const authInterceptor = ($injector, API) => {
	return {
		
		// on each request to api, attach token in auth header
		request: (config) => {
			var Auth = $injector.get('Auth');
			var token = Auth.getToken();
			if (config.url.indexOf(API.url) === 0 && token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		},

		// on each response from api, save token if present
		response: (res) => {
			var Auth = $injector.get('Auth');
			if(res.config.url.indexOf(API.url) === 0 && res.data.token) {
		    Auth.saveToken(res.data.token);
		  }
		  return res;
		}

	};
}

authInterceptor.$inject = ['$injector', 'API'];

export {authInterceptor};