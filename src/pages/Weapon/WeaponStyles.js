import styled from "styled-components";

export const CoreDataContainer = styled.div`
	display: flex;
	width: 90%;
	height: 100%;
	justify-content: space-around;
	align-items: center;
	@media (max-width: 850px) {
		flex-direction: column;
		gap: 30px;
		margin-top: 20px;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 40%;
	img {
		width: 100%;
		filter: drop-shadow(0px 0px 14px #848484);
	}
	@media (max-width: 850px) {
		width: 75%;
	}
	@media (max-width: 600px) {
		width: 90%;
	}
`;

export const DataContainer = styled.div`
	height: 100%;
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 30px;
	h2 {
		font-size: 4rem;
	}
	h3 {
		font-size: 2rem;
	}
	p {
		font-size: 1.25rem;
	}
	@media (max-width: 850px) {
		width: 75%;
	}
`;

export const MiscDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60%;
	@media (max-width: 850px) {
		width: 95%;
	}
`;

export const DataRow = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid white;
	padding: 10px 30px;
	@media (max-width: 850px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 10px;
	}
`;

export const RowTitle = styled.span`
	font-weight: 800;
`;

export const RowData = styled.span``;

export const TableContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 25px;
	h3 {
		font-size: 2rem;
	}
`;
