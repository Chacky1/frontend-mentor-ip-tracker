import React, { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'
import { isValidIpAddress } from '../utils/isValidIpAddress'

type IpHeaderProps = {
  handleIpChange: Function
}

function IpHeader({ handleIpChange }: IpHeaderProps): ReactElement {
  const [ipAddress, setIpAddress] = useState('')
  const [error, setError] = useState('')

  const handleSubmitIpAddress = (): void => {
    if (isValidIpAddress(ipAddress)) {
      setError('')
      handleIpChange(ipAddress)
    } else {
      setError('The IP address entered is incorrect.')
    }
  }

  return (
    <header className="header">
      <h1>IP Address Tracker</h1>
      {error && <p className="header__error">{error}</p>}
      <div className="search-ip">
        <input
          type="text"
          onChange={(event) => setIpAddress(event.target.value)}
          value={ipAddress}
          placeholder="Search for any IP address or domain"
        />
        <div
          role="button"
          onClick={handleSubmitIpAddress}
          onKeyPress={handleSubmitIpAddress}
          tabIndex={0}
          className="search-ip__arrow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </div>
      </div>
    </header>
  )
}

IpHeader.propTypes = {
  handleIpChange: PropTypes.func.isRequired,
}

export default IpHeader
