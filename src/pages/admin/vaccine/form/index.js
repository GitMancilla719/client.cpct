// import { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import style from './style.module.scss'

const VaccineForm = ({ data, setFunction }) => {
  useEffect(() => {
    // data &&
    //   setFunction({
    //     ...data,
    //     hospitalName: data.hospital
    //   })
  }, [])

  return (
    <form className={`${style.form} d-flex flex-column`}>
      <b>A1 First Dose</b>
      <input
        type="number"
        value={data && data.a1_d1}
        onChange={e =>
          setFunction({
            ...data,
            a1_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>A1 Second Dose</b>
      <input
        type="number"
        value={data && data.a1_d2}
        onChange={e =>
          setFunction({
            ...data,
            a1_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>A2 First Dose</b>
      <input
        type="number"
        value={data && data.a2_d1}
        onChange={e =>
          setFunction({
            ...data,
            a2_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>A2 Second Dose</b>
      <input
        type="number"
        value={data && data.a2_d2}
        onChange={e =>
          setFunction({
            ...data,
            a2_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>A3 First Dose</b>
      <input
        type="number"
        value={data && data.a3_d1}
        onChange={e =>
          setFunction({
            ...data,
            a3_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>A3 Second Dose</b>
      <input
        type="number"
        value={data && data.a3_d2}
        onChange={e =>
          setFunction({
            ...data,
            a3_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>A4 First Dose</b>
      <input
        type="number"
        value={data && data.a4_d1}
        onChange={e =>
          setFunction({
            ...data,
            a4_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>A4 Second Dose</b>
      <input
        type="number"
        value={data && data.a4_d2}
        onChange={e =>
          setFunction({
            ...data,
            a4_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>A5 First Dose</b>
      <input
        type="number"
        value={data && data.a5_d1}
        onChange={e =>
          setFunction({
            ...data,
            a5_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>A5 Second Dose</b>
      <input
        type="number"
        value={data && data.a5_d2}
        onChange={e =>
          setFunction({
            ...data,
            a5_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>ROAP First Dose</b>
      <input
        type="number"
        value={data && data.roap_d1}
        onChange={e =>
          setFunction({
            ...data,
            roap_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>ROAP Second Dose</b>
      <input
        type="number"
        value={data && data.roap_d2}
        onChange={e =>
          setFunction({
            ...data,
            roap_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>ROPP First Dose</b>
      <input
        type="number"
        value={data && data.ropp_d1}
        onChange={e =>
          setFunction({
            ...data,
            ropp_d1: parseInt(e.target.value)
          })
        }
        required
      />

      <b>ROPP Second Dose</b>
      <input
        type="number"
        value={data && data.ropp_d2}
        onChange={e =>
          setFunction({
            ...data,
            ropp_d2: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

      <b>Province Population</b>
      <input
        type="number"
        value={data && data.totalPopulation}
        onChange={e =>
          setFunction({
            ...data,
            totalPopulation: parseInt(e.target.value)
          })
        }
        required
      />

      <hr />

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
    </form>
  )
}

VaccineForm.propTypes = {
  data: PropTypes.any,
  setFunction: PropTypes.func
}

export default VaccineForm
