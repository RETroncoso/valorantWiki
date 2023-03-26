import styled from "styled-components";

export const AgentCardContainer = styled.div`
	width: 250px;
	height: 350px;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.6);
	background-color: #000;
	font-size: 16px;
	transition: all 0.5s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: all 0.5s ease;
	position: relative;
	&:hover {
		transition: all 0.5s ease;
		img {
			filter: brightness(0.75) opacity(1);
			transition: all 0.5s ease;
			transform: scale(1.1);
			translate: 0px -20px;
		}
		h2 {
			filter: brightness(1);
			z-index: 3;
			transition: all 0.5s ease;
		}
	}
`;

export const CardImg = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 2;
	transition: all 0.5s ease;
	filter: brightness(0.5) opacity(0.7);
`;

export const CardTitle = styled.h2`
	width: 100%;
	text-align: center;
	color: #fa4454;
	font-size: 32px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-family: "VALORANT", sans-serif;
	filter: brightness(0.75);
	transition: all 0.5s ease;
`;
