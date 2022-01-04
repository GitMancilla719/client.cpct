/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Map from './map/map'
import { useSelector, useDispatch } from 'react-redux'

import { getLocRecords } from '../../../redux/thunk/records'

import style from './styles.module.scss'
import Charts from './charts/charts'
import Facilities from './facilities/facilities'
import { getFacilities } from '../../../redux/thunk/facilities'
import Vaccine from './vaccine'
import Rankings from './rankings'

const Statistics = () => {
  const dispatch = useDispatch()

  const records = useSelector(state => state.records)
  const facilities = useSelector(state => state.facilities)
  // console.log(facilities.facilities)

  useEffect(() => {
    dispatch(getFacilities())
  }, [])

  const record = records.loc_records
    ? records.loc_records.records
    : null

  const [selectedLoc, setSelectedLoc] = useState()
  const [selectedLocFacilities, setSelectedLocFacilities] =
    useState()

  const onLocationSelect = e => {
    setSelectedLoc(e)
    dispatch(getLocRecords(e))

    const cityFacilities =
      facilities &&
      facilities.facilities.filter(data =>
        data.city.includes(e.toUpperCase())
      )
    setSelectedLocFacilities(cityFacilities)
  }
  return (
    <div className={style.Container}>
      <div className={style.panel1}>
        <Map
          selectedLocation={selectedLoc}
          onLocationSelect={onLocationSelect}
          stats={record && record.at(-1)}
        />
      </div>

      {record && (
        <div className={style.panel2}>
          <Charts
            data={record && record}
            selectedLocation={selectedLoc}
          />
        </div>
      )}

      {selectedLocFacilities && (
        <div className={style.panel3}>
          <Facilities data={selectedLocFacilities} />
        </div>
      )}

      {/* <div className={style.panel4}>
        <Rankings />
      </div>

      <div className={style.panel4}>
        <Vaccine />
      </div> */}
    </div>
  )
}

export default Statistics
