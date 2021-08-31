import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.github.com",
	timeout: 5 * 1000,
	withCredentials: false,
	headers: { "Content-Type": "application/json;charset=UTF-8" },
});

instance.interceptors.request.use(
	config => {
		let token = localStorage.getItem("token");
		token && (config.headers["Authorization"] = token);
		return config;
	},
	error => Promise.reject(error)
);

instance.interceptors.response.use(
	response => response,
	error => Promise.reject(error)
);

export default instance;
