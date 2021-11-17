// import { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import style from './style.module.scss'

const FacilityForm = ({ data, setFunction }) => {
  useEffect(() => {
    data &&
      setFunction({
        ...data,
        hospitalName: data.hospital
      })
  }, [])
  return (
    <form className={`${style.form} d-flex flex-column`}>
      <b>Hospital</b>
      <input
        label="Hospital"
        type="text"
        value={data && data.hospital}
        onChange={e =>
          setFunction({
            ...data,
            hospital: e.target.value
          })
        }
        required
      />

      <b>Facilities</b>
      <input
        type="number"
        value={data && data.facilities}
        onChange={e =>
          setFunction({
            ...data,
            facilities: parseInt(e.target.value)
          })
        }
        required
      />

      <b>City</b>
      <input
        type="text"
        value={data && data.city}
        onChange={e =>
          setFunction({
            ...data,
            city: e.target.value
          })
        }
        required
      />

      <b>Date</b>
      <input
        type="date"
        value={data && data.date}
        onChange={e =>
          setFunction({
            ...data,
            date: e.target.value
          })
        }
        required
      />

      <b>ICU Beds(occupied)</b>
      <input
        type="number"
        value={data && data.icu_beds_occupied}
        onChange={e =>
          setFunction({
            ...data,
            icu_beds_occupied: parseInt(e.target.value)
          })
        }
        required
      />

      <b>ICU Beds(vacant)</b>
      <input
        type="number"
        value={data && data.icu_beds_vacant}
        onChange={e =>
          setFunction({
            ...data,
            icu_beds_vacant: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Isolation Beds(occupied)</b>
      <input
        type="number"
        value={data && data.iso_beds_occupied}
        onChange={e =>
          setFunction({
            ...data,
            iso_beds_occupied: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Isolation Beds(vacant)</b>
      <input
        type="number"
        value={data && data.iso_beds_vacant}
        onChange={e =>
          setFunction({
            ...data,
            iso_beds_vacant: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Ward Beds(occupied)</b>
      <input
        type="number"
        value={data && data.ward_beds_occupied}
        onChange={e =>
          setFunction({
            ...data,
            ward_beds_occupied: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Ward Beds(vacant)</b>
      <input
        type="number"
        value={data && data.ward_beds_vacant}
        onChange={e =>
          setFunction({
            ...data,
            ward_beds_vacant: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Equipments(occupied)</b>
      <input
        type="number"
        value={data && data.equipment_occupied}
        onChange={e =>
          setFunction({
            ...data,
            equipment_occupied: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Equipments(vacant)</b>
      <input
        type="number"
        value={data && data.equipment_vacant}
        onChange={e =>
          setFunction({
            ...data,
            equipment_vacant: parseInt(e.target.value)
          })
        }
        required
      />
    </form>
  )
}

FacilityForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default FacilityForm
