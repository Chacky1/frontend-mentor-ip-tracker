/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

type IpInfoProps = {
  locationInfos: {
    ip: string
    location: {
      country: string
      region: string
      city: string
      lat: number
      lng: number
      postalCode: string
      timezone: string
      geonameId: number
    }
    domains: string[]
    as: {
      asn: number
      name: string
      route: string
      domain: string
      type: string
    }
    isp: string
  }
}

function IpInfo({ locationInfos }: IpInfoProps): ReactElement {
  return (
    <div className="search-result">
      <div className="search-result__info">
        <h3>IP ADDRESS</h3>
        <p>{locationInfos.ip}</p>
      </div>
      <div className="search-result__separation" />
      <div className="search-result__info">
        <h3>LOCATION</h3>
        <p>
          {locationInfos.location.city}, {locationInfos.location.country}{' '}
          {locationInfos.location.postalCode}
        </p>
      </div>
      <div className="search-result__separation search-result__separation--middle" />
      <div className="search-result__info">
        <h3>TIMEZONE</h3>
        <p>UTC {locationInfos.location.timezone}</p>
      </div>
      <div className="search-result__separation" />
      <div className="search-result__info">
        <h3>ISP</h3>
        <p>{locationInfos.isp}</p>
      </div>
    </div>
  )
}

IpInfo.propTypes = {
  locationInfos: PropTypes.shape({
    ip: PropTypes.string,
    location: PropTypes.shape({
      country: PropTypes.string,
      region: PropTypes.string,
      city: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number,
      postalCode: PropTypes.string,
      timezone: PropTypes.string,
      geonameId: PropTypes.number,
    }),
    domains: PropTypes.arrayOf(PropTypes.string),
    as: PropTypes.shape({
      asn: PropTypes.number,
      name: PropTypes.string,
      route: PropTypes.string,
      domain: PropTypes.string,
      type: PropTypes.string,
    }),
    isp: PropTypes.string,
  }).isRequired,
}

export default IpInfo
