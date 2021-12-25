/* eslint-disable no-unused-vars */
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import PropTypes from 'prop-types'
import style from './styles.module.scss'

import CSButton from '../../../../components/button'
import Ranges from './ranges'

const Charts = ({ data }) => {
  const [datas, setdatas] = useState()

  const daily = () => {
    const dataSkips = []
    if (data) {
      for (let c = 0; c <= data.length - 1; c += 1) {
        dataSkips.push(data[c])
      }
      setdatas(dataSkips)
    }
  }

  const weekly = () => {
    const dataSkips = []
    if (data) {
      for (let c = 0; c <= data.length - 1; c += 7) {
        dataSkips.push(data[c])
      }
      setdatas(dataSkips)
    }
  }

  const monthly = () => {
    const dataSkips = []
    if (data) {
      for (let c = 0; c <= data.length - 1; c += 30) {
        dataSkips.push(data[c])
      }
      setdatas(dataSkips)
    }
  }

  const Data = {
    labels:
      (datas &&
        datas.map(dates =>
          new Date(dates.Date).toDateString().substring(3)
        )) ||
      (data &&
        data.map(objDate =>
          new Date(objDate.Date).toDateString().substring(3)
        )),
    datasets: [
      {
        label: 'Confirmed',
        fill: false,
        lineTension: 0,
        backgroundColor: '#3C467D',
        borderColor: '#3C467D',
        pointBorderColor: '#3C467D',
        pointBackgroundColor: '#3C467D',
        pointBorderWidth: 0,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 0.5,
        pointHitRadius: 5,
        data:
          (datas &&
            datas
              .map(obj => obj.Confirmed)
              .slice(0, data.length)) ||
          (data &&
            data.map(obj => obj.Confirmed).slice(0, data.length))
      },
      {
        label: 'Deaths',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#922B21',
        borderColor: '#922B21',
        pointBorderColor: '#922B21',
        pointBackgroundColor: '#922B21',
        pointBorderWidth: 0,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 0.5,
        pointHitRadius: 5,
        data:
          (datas &&
            datas
              .map(obj => obj.Deaths)
              .slice(0, data.length)) ||
          (data &&
            data.map(obj => obj.Deaths).slice(0, data.length))
      },
      {
        label: 'Recoveries',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#1E8449',
        borderColor: '#1E8449',
        pointBorderColor: '#1E8449',
        pointBackgroundColor: '#1E8449',
        pointBorderWidth: 0,
        pointHoverRadius: 3,
        pointHoverBorderWidth: 2,
        pointRadius: 0.5,
        pointHitRadius: 5,
        data:
          (datas &&
            datas
              .map(obj => obj.Recovered)
              .slice(0, data.length)) ||
          (data &&
            data.map(obj => obj.Recovered).slice(0, data.length))
      }
    ]
  }
  return (
    <div className={style.Chart}>
      <hr />
      <h2 className={style.SectionHeader}>Growth Statistics</h2>

      <Ranges data={data} />
      <p style={{ textAlign: 'center', marginTop: '1em' }}>
        Growth of cases(Confirmed, Deaths and Recoveries) over
        time in this location.
      </p>

      {/* <br /> */}

      <div>
        <CSButton
          label="Daily"
          variant="dark"
          onClickFunc={daily}
          disabled={false}
          size="sm"
        />
        <CSButton
          label="Weekly"
          variant="dark"
          onClickFunc={weekly}
          disabled={false}
          size="sm"
        />
        <CSButton
          label="Monthly"
          variant="dark"
          onClickFunc={monthly}
          disabled={false}
          size="sm"
        />
      </div>
      <Line data={Data} />

      <br />
    </div>
  )
}

Charts.propTypes = {
  data: PropTypes.any
}

export default Charts
