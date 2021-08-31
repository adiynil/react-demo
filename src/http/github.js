import service from "./core";

const apis = {
	testAuth: () => service.get(`/notifications`),
	getRepos: id => service.get(`/users/${id}/repos`),
	getDetail: (id, repo, dir) =>
		service.get(`/repos/${id}/${repo}/contents/${dir}`),
};

export default apis;
