import Carousel from "react-material-ui-carousel";
import styled from "styled-components";

export const MapWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
	gap: 30px;
	max-width: 1200px;
	@media (max-width: 1000px) {
		flex-direction: column;
		padding: 5px;
	}
`;

export const CarouselStyled = styled(Carousel)`
	min-width: 600px;
	@media (max-width: 800px) {
		min-width: 300px;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
`;

export const MapDataContainer = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 20px;
	h2 {
		font-size: 4rem;
		color: crimson;
		font-family: valorant;
	}
	p {
		font-size: 1.25rem;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;
