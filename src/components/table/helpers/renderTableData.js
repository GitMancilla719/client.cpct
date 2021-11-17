/* eslint-disable indent */
import {
  locTableHeaders,
  confirmedTableHeaders,
  deathsTableHeaders,
  recoveriesTableHeaders,
  logHeaders,
  facilitiesTableHeaders,
  accountsTableHeaders
} from '../../../utils/helpers/component-helpers/table-headers'

const tableData = (type, data, onClickFunc) => {
  // LOGS
  if (type === 'Logs') {
    const headers = logHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    const renderdata = data.map(data => (
      <tr key={data}>
        <td>{data.name ?? 'Loading'}</td>
        <td>{data.role ?? 'Loading'}</td>
        <td>{data.activity ?? 'Loading'}</td>
        <td>{data.date ?? 'Loading'}</td>
      </tr>
    ))

    return {
      headers,
      renderdata
    }
  }

  // RECORDS
  if (type === 'Records') {
    const headers = locTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    const renderdata = data.map(data => (
      <tr
        key={data._id}
        onClick={() =>
          onClickFunc({
            id: data._id,
            Confirmed: data.Confirmed,
            Deaths: data.Deaths,
            Recovered: data.Recovered,
            Date: data.Date
          })
        }
      >
        <td>{data.Confirmed.toLocaleString() ?? 'Loading'}</td>
        <td>{data.Deaths.toLocaleString() ?? 'Loading'}</td>
        <td>{data.Recovered.toLocaleString() ?? 'Loading'}</td>
        <td>{data.Date}</td>
      </tr>
    ))

    return {
      headers,
      renderdata
    }
  }

  // CONFIRMED RANKING
  if (type === 'CRanking') {
    const headers = confirmedTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    // console.log('test', renderdata)
    const renderdata = data
      .sort((a, b) => b.confirmed - a.confirmed)
      .map(data => (
        <tr key={data.confirmed}>
          <td>{data.location ?? 'Loading'}</td>
          <td>{data.confirmed ?? 'Loading'}</td>
          <td>{data.date ?? 'Loading'}</td>
        </tr>
      ))

    // console.log('test', renderdata)

    return {
      headers,
      renderdata
    }
  }

  // DEATHS RANKING
  if (type === 'DRanking') {
    const headers = deathsTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    const renderdata = data.map(data => (
      <tr key={data.Deaths}>
        <td>{data.location ?? 'Loading'}</td>
        <td>{data.deaths ?? 'Loading'}</td>
        <td>{data.date ?? 'Loading'}</td>
      </tr>
    ))

    return {
      headers,
      renderdata
    }
  }

  // RECOVERIES RANKING
  if (type === 'RRanking') {
    const headers = recoveriesTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    // console.log('test', data)
    const renderdata = data
      ? data.map(data => (
          <tr key={data.recovered}>
            <td>{data.location ?? 'Loading'}</td>
            <td>{data.recovered ?? 'Loading'}</td>
            <td>{data.date ?? 'Loading'}</td>
          </tr>
        ))
      : []

    return {
      headers,
      renderdata
    }
  }

  // FACILITIES
  if (type === 'Facilities') {
    const headers = facilitiesTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    const renderdata = data
      ? data.map(data => (
          <tr
            key={data.id}
            onClick={() =>
              onClickFunc({
                hospital: data.hospital,
                facilities: data.facilities,
                date: data.date,
                city: data.city,
                icu_beds_occupied: data.icu_beds_occupied,
                icu_beds_vacant: data.icu_beds_vacant,
                iso_beds_occupied: data.iso_beds_occupied,
                iso_beds_vacant: data.iso_beds_vacant,
                ward_beds_occupied: data.ward_beds_occupied,
                ward_beds_vacant: data.ward_beds_vacant,
                equipment_occupied: data.equipment_occupied,
                equipment_vacant: data.equipment_vacant
              })
            }
          >
            <td>{data.hospital ?? 'Loading'}</td>
            <td>{data.facilities ?? 'Loading'}</td>
            <td>{data.city ?? 'Loading'}</td>
            <td>{data.icu_beds_occupied ?? 'Loading'}</td>
            <td>{data.icu_beds_vacant ?? 'Loading'}</td>
            <td>{data.iso_beds_occupied ?? 'Loading'}</td>
            <td>{data.iso_beds_vacant ?? 'Loading'}</td>
            <td>{data.ward_beds_occupied ?? 'Loading'}</td>
            <td>{data.ward_beds_vacant ?? 'Loading'}</td>
            <td>{data.equipment_occupied ?? 'Loading'}</td>
            <td>{data.equipment_vacant ?? 'Loading'}</td>
            <td>{data.date ?? 'Loading'}</td>
          </tr>
        ))
      : []

    return {
      headers,
      renderdata
    }
  }

  // ACCOUNTS
  if (type === 'Accounts') {
    const headers = accountsTableHeaders.map(header => (
      <th key={header}>{header}</th>
    ))

    const renderdata = data
      ? data.map(data => (
          <tr key={data.id} onClick={() => onClickFunc(data)}>
            <td>{data.name ?? 'Loading'}</td>
            <td>{data.role ?? 'Loading'}</td>
            <td>{data.created ?? 'Loading'}</td>
          </tr>
        ))
      : []

    return {
      headers,
      renderdata
    }
  }
}

export default tableData
