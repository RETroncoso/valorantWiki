import styled from "styled-components";

export const WeaponCardContainer = styled.div`
	width: 250px;
	height: 200px;
	margin: 10px;
	border-radius: 10px;
	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.75);
	font-size: 16px;
	transition: all 0.5s ease;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
	transition: all 0.5s ease;
	position: relative;
	gap: 15px;
	&:hover {
		transform: scale(1.005);
		transition: all 0.25s ease;
		img {
			filter: brightness(1);
			transition: all 0.25s ease;
		}
	}
`;

export const CardImg = styled.img`
	width: 90%;
	max-height: 75%;
	object-fit: contain;
	background-position: cover;
	border-radius: 10px;
	transition: all 0.5s ease;
	filter: brightness(0.7);
`;

export const CardTitle = styled.h2`
	position: absolute;
	bottom: 5px;
	width: 100%;
	text-align: center;
	color: #fa4454;
	font-size: 28px;
	z-index: 2;
	text-transform: uppercase;
	letter-spacing: 2px;
	font-family: "VALORANT", sans-serif;
`;
