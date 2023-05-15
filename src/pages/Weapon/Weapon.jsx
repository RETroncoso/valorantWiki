import React from 'react'
import { useLocation } from 'react-router-dom'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { CoreDataContainer, DataContainer, DataRow, ImgContainer, MiscDataContainer, RowData, RowTitle, TableContainer } from './WeaponStyles'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

const Weapon = () => {
    const {bullets, damage, description, equipSpeed, fireRate, img, name, penetration, price, reloadSpeed, shotType, type} = useLocation().state;

    const tableCellStyles = {
      textAlign: "center",
      color: "white",
      maxWidth: "60px"
    };



    return (
      <SectionWrapper style={{gap: "50px"}}>
        <CoreDataContainer>
          <ImgContainer>
            <img src={img} alt={name} />
          </ImgContainer>
          <DataContainer>
            <h2>{name}</h2>
            <h3>{type}</h3>
            <p>{description}</p>
          </DataContainer>
        </CoreDataContainer>
        <MiscDataContainer>
          <DataRow>
            <RowTitle>Precio</RowTitle>
            <RowData>{price} créditos</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Cargador</RowTitle>
            <RowData>{bullets} balas</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Velocidad de equipamiento</RowTitle>
            <RowData>{equipSpeed} seg</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Cadencia de disparo</RowTitle>
            <RowData>{fireRate} balas/seg</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Penetracion</RowTitle>
            <RowData>{penetration}</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Velocidad de recarga</RowTitle>
            <RowData>{reloadSpeed} segs</RowData>
          </DataRow>
          <DataRow>
            <RowTitle>Tipo de Disparo</RowTitle>
            <RowData>{shotType}</RowData>
          </DataRow>
        </MiscDataContainer>
        <TableContainer>
          <h3>Daño:</h3>
          <Table sx={{ width: "90%"}}>
          <TableHead>
            <TableRow sx={{backgroundColor:"#474646"}}>
              <TableCell sx={tableCellStyles}>Parte del cuerpo</TableCell>
              <TableCell sx={tableCellStyles}>0 a 10 mts</TableCell>
              <TableCell sx={tableCellStyles}>10 a 15 mts</TableCell>
              <TableCell sx={tableCellStyles}>15 a 30 mts</TableCell>
              <TableCell sx={tableCellStyles}>30 a 60 mts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {damage.map((row) => (
              <TableRow
                key={row.bodyPart}
              >
                <TableCell sx={tableCellStyles} component="th" scope="row">
                  {row.bodyPart}
                </TableCell>
                <TableCell sx={tableCellStyles}>{row.damage[0].damage}</TableCell>
                <TableCell sx={tableCellStyles}>{row.damage[1].damage}</TableCell>
                <TableCell sx={tableCellStyles}>{row.damage[2].damage}</TableCell>
                <TableCell sx={tableCellStyles}>{row.damage[3].damage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </TableContainer>
        
      </SectionWrapper>
    )
}

export default Weapon