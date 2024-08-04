const axiosInstance = require("../config/axios.instace");
const { PROBLEM_ADMIN_SERVICE_URL } = require('../config/server.config')
PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`
async function fetchProblemDetails(problemId) {
    try {
        const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log("API Response : ", response);
        return response;
    } catch (error) {
        console.log("Something went wrong..");
        console.log(error);
    }
}

module.exports = fetchProblemDetails;