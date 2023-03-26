import styled from "styled-components";

export const HorizontalCardContainer = styled.div`
	width: 350px;
	height: 250px;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.75);
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
		transform: scale(1.1);
		transition: all 0.5s ease;
		img {
			filter: brightness(0.5);
			transition: all 0.5s ease;
		}
	}
`;

export const CardImg = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -1;
	transition: all 0.5s ease;
	filter: brightness(0.25);
`;

export const CardTitle = styled.h2`
	width: 100%;
	text-align: center;
	color: #fa4454;
	font-size: 32px;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-family: "VALORANT", sans-serif;
`;
