// import { useState } from 'react'
import PropTypes from 'prop-types'
import style from './style.module.scss'

const RecordForm = ({ data, setFunction }) => {
  return (
    <form className={`${style.form} d-flex flex-column`}>
      <b>Confirmed</b>
      <input
        label="Confirmed"
        type="number"
        value={data && data.Confirmed}
        onChange={e =>
          setFunction({
            ...data,
            Confirmed: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Deaths</b>
      <input
        type="number"
        value={data && data.Deaths}
        onChange={e =>
          setFunction({
            ...data,
            Deaths: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Recovered</b>
      <input
        type="number"
        value={data && data.Recovered}
        onChange={e =>
          setFunction({
            ...data,
            Recovered: parseInt(e.target.value)
          })
        }
        required
      />

      <b>Date</b>
      <input
        type="date"
        value={data && data.Date}
        onChange={e =>
          setFunction({
            ...data,
            Date: e.target.value
          })
        }
        required
      />
    </form>
  )
}

RecordForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default RecordForm
