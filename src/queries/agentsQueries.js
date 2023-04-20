import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllAgents = async () => {
	try {
		const { data } = await axios.get(`${BASE_URL}/agents`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};
