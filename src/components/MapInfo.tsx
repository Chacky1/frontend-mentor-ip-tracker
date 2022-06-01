/* eslint-disable import/no-unresolved */
/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import { Icon } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import PropTypes from 'prop-types'

const iconLocation = new Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [40, 50],
})

type MapInfoProps = {
  latitude: number
  longitude: number
}

function MapInfo({ latitude, longitude }: MapInfoProps): ReactElement {
  return (
    <MapContainer
      className="map-info"
      center={{ lat: latitude, lng: longitude }}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={{ lat: latitude, lng: longitude }} icon={iconLocation}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

MapInfo.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
}

MapInfo.defaultProps = {
  latitude: 51.505,
  longitude: -0.09,
}

export default MapInfo
