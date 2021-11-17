/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getRecords } from '../../../redux/thunk/records'
import style from './style.module.scss'
import { Table } from 'react-bootstrap'

const Rankings = () => {
  const dispatch = useDispatch()
  const records = useSelector(state => state.records)

  const CMs = records.all_records.filter(
    data => data.slug !== 'PoC'
  )

  const conf = []
  const rcv = []
  const dts = []

  CMs.map(data => {
    const obj = {
      location: data.location,
      confirmed: parseInt(data.records.at(-1).Confirmed),
      date: data.records.at(-1).Date
    }

    conf.push(obj)
    return null
  })

  CMs.map(data => {
    const obj = {
      location: data.location,
      recovered: parseInt(data.records.at(-1).Recovered),
      date: data.records.at(-1).Date
    }

    rcv.push(obj)
    return null
  })

  CMs.map(data => {
    const obj = {
      location: data.location,
      deaths: parseInt(data.records.at(-1).Deaths),
      date: data.records.at(-1).Date
    }

    dts.push(obj)
    return null
  })

  const sortedConf = conf.sort(
    (a, b) => b.confirmed - a.confirmed
  )
  const sortedRcv = rcv.sort((a, b) => b.recovered - a.recovered)
  const sortedDts = dts.sort((a, b) => b.deaths - a.deaths)

  // console.log(sortedRcv)

  useEffect(() => {
    dispatch(getRecords())
  }, [dispatch])

  return (
    <div className={style.Container}>
      <h2 className={style.SectionHeader}>Rankings</h2>
      <p>
        Listing of location ranked by category(Confirmed, Deaths
        and Recoveries) in ascending order.
      </p>

      <br />

      <div className={style.lgndsContainer}>
        <p className={style.lgnds1}>0 Case</p>
        <p className={style.lgnds2}>1-499 Cases</p>
        <p className={style.lgnds3}>500-999 Cases</p>
        <p className={style.lgnds4}>1000-1999 Cases</p>
        <p className={style.lgnds5}>2000+ Cases</p>
      </div>

      <div className={style.TableContainer}>
        <div className={style.Table}>
          <Table
            // striped
            bordered
            // hover
            size="sm"
            className={style.TableConf}
          >
            <thead>
              <tr
                className={`${style.TableHeaderRowConf} ${style.TableHeaderRow}`}
              >
                <th className={style.TableHeaderLoc}>
                  Location
                </th>
                <th className={style.TableHeader}>Confirmed</th>
                <th className={style.TableHeader}>As of</th>
              </tr>
            </thead>
            <tbody>
              {sortedConf.map(data => (
                <tr
                  key={data.confirmed}
                  className={style.TableRow}
                >
                  <td
                    className={style.TableLoc}
                    style={{
                      width: '0.5em',
                      fontWeight: '500',
                      color: parseInt(data.confirmed)
                        ? parseInt(data.confirmed) > 500
                          ? parseInt(data.confirmed) > 1000
                            ? parseInt(data.confirmed) > 2000
                              ? '#5C0000'
                              : '#FF0000' // < 2000
                            : '#FF832F' // < 1000
                          : '#CDA400' // < 500
                        : 'gray', // wala
                      borderLeft: parseInt(data.confirmed)
                        ? parseInt(data.confirmed) > 500
                          ? parseInt(data.confirmed) > 1000
                            ? parseInt(data.confirmed) > 2000
                              ? '5px solid #5C0000'
                              : '5px solid #FF0000' // < 2000
                            : '5px solid #FF832F' // < 1000
                          : '5px solid #CDA400' // < 500
                        : '5px solid gray' // wala
                    }}
                  >
                    {data.location ?? 'Loading'}
                  </td>
                  <td className={style.TableStat}>
                    {data.confirmed.toLocaleString() ??
                      'Loading'}
                  </td>
                  <td className={style.TableDate}>
                    {new Date(data.date)
                      .toDateString()
                      .slice(4) ?? 'Loading'}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className={style.Table}>
          <Table
            // striped
            bordered
            // hover
            size="sm"
            className={style.TableRcv}
          >
            <thead>
              <tr
                className={`${style.TableHeaderRowRcv} ${style.TableHeaderRow}`}
              >
                <th>Location</th>
                <th className={style.TableHeader}>Recoveries</th>
                <th className={style.TableHeader}>As of</th>
              </tr>
            </thead>
            <tbody>
              {sortedRcv.map(data => (
                <tr
                  key={data.recovered}
                  className={style.TableRow}
                >
                  <td className={style.TableLoc}>
                    {data.location ?? 'Loading'}
                  </td>
                  <td className={style.TableStat}>
                    {data.recovered.toLocaleString() ??
                      'Loading'}
                  </td>
                  <td className={style.TableDate}>
                    {new Date(data.date)
                      .toDateString()
                      .slice(4) ?? 'Loading'}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div className={style.Table}>
          <Table
            // striped
            bordered
            // hover
            size="sm"
            className={style.TableDts}
          >
            <thead>
              <tr
                className={`${style.TableHeaderRowDts} ${style.TableHeaderRow}`}
              >
                <th>Location</th>
                <th className={style.TableHeader}>Deaths</th>
                <th className={style.TableHeader}>As of</th>
              </tr>
            </thead>
            <tbody>
              {sortedDts.map(data => (
                <tr key={data.deaths} className={style.TableRow}>
                  <td className={style.TableLoc}>
                    {data.location ?? 'Loading'}
                  </td>
                  <td className={style.TableStat}>
                    {data.deaths.toLocaleString() ?? 'Loading'}
                  </td>
                  <td className={style.TableDate}>
                    {new Date(data.date)
                      .toDateString()
                      .slice(4) ?? 'Loading'}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Rankings
