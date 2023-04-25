import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllMaps = async () => {
	try {
		const { data } = await axios.get(`${BASE_URL}/maps`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};
