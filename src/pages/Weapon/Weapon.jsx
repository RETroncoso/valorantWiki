import React from 'react'
import { useLocation } from 'react-router-dom'
import { SectionWrapper } from '../../components/SectionWrapper/SectionWrapper'
import { CoreDataContainer, DataContainer, DataRow, ImgContainer, MiscDataContainer, RowData, RowTitle } from './WeaponStyles'

const Weapon = () => {
    const {bullets, damage, description, equipSpeed, fireRate, img, name, penetration, price, reloadSpeed, shotType, type} = useLocation().state;

  console.log(damage);

    return (
      <SectionWrapper>
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
      </SectionWrapper>
    )
}

export default Weapon