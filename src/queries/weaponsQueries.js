import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const getAllWeapons = async () => {
	try {
		const { data } = await axios.get(`${BASE_URL}/weapons`);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};
