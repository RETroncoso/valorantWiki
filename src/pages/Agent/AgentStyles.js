import styled from "styled-components";

export const AgentWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 40px;
	gap: 20px;
	max-width: 1200px;
	@media (max-width: 768px) {
		flex-direction: column;
		padding: 5px;
	}
`;

export const ImageContainerStyled = styled.div`
	width: 40%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		height: 500px;
	}
	@media (max-width: 768px) {
		padding-top: 15px;
		width: 95%;
		img {
			height: 400px;
		}
	}
`;

export const DataContainerStyled = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 20px;
	h2 {
		font-size: 4rem;
	}
	h3 {
		font-size: 2rem;
	}
	p {
		font-size: 1.25rem;
	}
	@media (max-width: 768px) {
		width: 95%;
	}
`;
