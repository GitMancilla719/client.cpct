/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import ReactMapboxGl, { Popup, Marker } from 'react-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Coords from './helpers/coordinates'
import location from '../../../../utils/helpers/component-helpers/location-dropdown'
import CSDropdown from '../../../../components/dropdown'
import style from './styles.module.scss'
import Statcards from '../statcards/statcards'

import PIN from '../../../../assets/images/pin.png'
import geoJson from './helpers/geojson.json'

const Map = ({ selectedLocation, onLocationSelect, stats }) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYWtvc2llbWVtMTkiLCJhIjoiY2t2czJmMDJ5OHY3MjJ1cXdzbTdwc3k1eCJ9.OmwesObA5rJDph1tkqMvnQ'
  })

  const Loc = selectedLocation
    ? Coords.find(data => data.location === selectedLocation)
    : undefined

  // console.log('ualala', Loc)

  return (
    <div className={style.Container}>
      <div className={style.DropdownContainer}>
        <CSDropdown
          data={location}
          selectLoc={e => onLocationSelect(e)}
        />
      </div>

      <div className={style.Statcards}>
        <Statcards
          Confirmed={stats && stats.Confirmed}
          Recoveries={stats && stats.Recovered}
          Deaths={stats && stats.Deaths}
          LastUpdated={stats && stats.Date}
          Location={Loc && Loc.location}
        />
      </div>

      <div className={style.Map}>
        <Map
          style="mapbox://styles/akosiemem19/ckvsfnhlt0ocp14o5xjj821r8"
          // style="mapbox://styles/akosiemem19/ckg9k2scx14cy19mx7h24bzu2"
          zoom={[11]}
          center={Loc ? [Loc.lon, Loc.lat] : [120.8684, 14.2822]} // lon lat
          movingMethod="jumpTo"
          containerStyle={{
            height: '100%',
            width: '100%'
          }}
        >
          {Loc && (
            <Marker
              style={{ zIndex: '10' }}
              coordinates={[Loc.lon, Loc.lat]}
            >
              <img src={PIN} width="60px" />
            </Marker>
          )}
        </Map>
      </div>

      <div className={style.StatcardsMobile}>
        <Statcards
          Confirmed={stats && stats.Confirmed}
          Recoveries={stats && stats.Recovered}
          Deaths={stats && stats.Deaths}
          LastUpdated={stats && stats.Date}
          Location={Loc && Loc.location}
        />
      </div>
    </div>
  )
}

Map.propTypes = {
  selectedLocation: PropTypes.any,
  onLocationSelect: PropTypes.func,
  stats: PropTypes.any
}

export default Map
