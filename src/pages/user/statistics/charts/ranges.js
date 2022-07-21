/* eslint-disable multiline-ternary */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Form, Card, ToggleButton } from 'react-bootstrap'
import { useState } from 'react'
import rangeData from './helpers/range-data'
import CountUp from 'react-countup'
import { Bar } from 'react-chartjs-2'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import style from './styles.module.scss'
import CSButton from '../../../../components/button'

// import {
//   PDFViewer,
//   Document,
//   Page,
//   Text,
//   View,
//   StyleSheet,
//   ReactPDF
// } from '@react-pdf/renderer'
// import ExportPdf from './exportPdf'
import CSModal from '../../../../components/modal'

const Ranges = ({ data, selectedLocation }) => {
  const [selectedYear, setSelectedYear] = useState()
  const [selectedMonth, setSelectedMonth] = useState()
  const [selectedDate, setSelectedDate] = useState()
  const [mode, setMode] = useState(true)
  const [modal, setModal] = useState(false)

  const calculatedData =
    data &&
    selectedYear &&
    selectedMonth &&
    rangeData(data, selectedYear, selectedMonth)

  const years = data.map(data =>
    new Date(data.Date).getFullYear()
  )
  const uniqYrs = [...new Set(years)]

  const monthName = months.find(
    data => data.val === selectedMonth
  )

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart'
      }
    }
  }

  // MONTHLY
  const week1 = calculatedData
    ? calculatedData.smWeekly.week1
    : 0
  const week2 = calculatedData
    ? calculatedData.smWeekly.week2
    : 0
  const week3 = calculatedData
    ? calculatedData.smWeekly.week3
    : 0
  const week4 = calculatedData
    ? calculatedData.smWeekly.week4
    : 0
  const week5 = calculatedData
    ? calculatedData.smWeekly.week5
    : 0
  // MONTHLY

  const dataset = calculatedData && {
    labels: [
      'Week 1 (1-7)',
      'Week 2 (8-14)',
      'Week 3 (15-21)',
      'Week 4 (22-28)',
      'Week 5 (29-31)'
    ],
    datasets: [
      {
        label: 'Confirmed',
        data: [
          week1 ? week1.Confirmed : 0,
          week2 ? week2.Confirmed : 0,
          week3 ? week3.Confirmed : 0,
          week4 ? week4.Confirmed : 0,
          week5 ? week5.Confirmed : 0
        ],
        backgroundColor: '#1453bb'
      },
      {
        label: 'Recoveries',
        data: [
          week1 ? week1.Recovered : 0,
          week2 ? week2.Recovered : 0,
          week3 ? week3.Recovered : 0,
          week4 ? week4.Recovered : 0,
          week5 ? week5.Recovered : 0
        ],
        backgroundColor: '#008243'
      },
      {
        label: 'Deaths',
        data: [
          week1 ? week1.Deaths : 0,
          week2 ? week2.Deaths : 0,
          week3 ? week3.Deaths : 0,
          week4 ? week4.Deaths : 0,
          week5 ? week5.Deaths : 0
        ],
        backgroundColor: '#c22012'
      }
    ]
  }

  const setPrevDailyDate = selectedDate && new Date(selectedDate)
  selectedDate &&
    setPrevDailyDate.setDate(
      new Date(selectedDate).getDate() - 1
    )
  const prevDailyDate =
    selectedDate && setPrevDailyDate.toISOString().split('T')[0]

  const dailyData =
    selectedDate && data.find(data => data.Date === selectedDate)
  const prevDailyData =
    selectedDate &&
    data.find(data => data.Date === prevDailyDate)

  const dailyConf = dailyData
    ? dailyData.Confirmed - prevDailyData.Confirmed
    : 0
  const dailyRcv = dailyData
    ? dailyData.Recovered - prevDailyData.Recovered
    : 0
  const dailyDts = dailyData
    ? dailyData.Deaths - prevDailyData.Deaths
    : 0

  // console.log(data)

  const ToggleButton = () => {
    setMode(!mode)
    setSelectedDate(null)
    setSelectedMonth(null)
    setSelectedYear(null)
  }

  return (
    <div>
      <div className={style.ModeButton}>
        <CSButton
          label={
            mode ? 'Daily Statistics' : 'Monthly Statistics'
          }
          variant="dark"
          onClickFunc={() => {
            ToggleButton()
          }}
          disabled={false}
          size="sm"
        />
      </div>

      {mode ? (
        <div>
          <input
            type="date"
            onChange={e => setSelectedDate(e.target.value)}
            required
            className={style.DateInput}
          />

          {selectedDate && (
            <>
              <p className={style.monthText}>
                Recorded cases for
                <b>{`${new Date(selectedDate)
                  .toDateString()
                  .slice(3)}`}</b>
              </p>

              <div className={style.CardContainer}>
                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Confirmed}>
                        Confirmed
                      </h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={dailyData ? parseInt(dailyConf) : 0}
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>

                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Recoveries}>
                        Recoveries
                      </h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={dailyData ? parseInt(dailyRcv) : 0}
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>

                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Deaths}>Deaths</h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={dailyData ? parseInt(dailyDts) : 0}
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </>
          )}
        </div>
      ) : (
        <div>
          <div className={style.SelectorContainer}>
            <Form.Select
              onChange={e => setSelectedMonth(e.target.value)}
              className={style.dropdowns}
            >
              <option>Select Month</option>
              {months.map(data => (
                <option key={data.val} value={data.val}>
                  {data.mt}
                </option>
              ))}
            </Form.Select>

            <Form.Select
              onChange={e => setSelectedYear(e.target.value)}
              className={style.dropdowns}
            >
              <option>Select Year</option>
              {uniqYrs.map(data => (
                <option key={data}>{data}</option>
              ))}
            </Form.Select>

            {/* <div
              style={{
                // backgroundColor: 'tomato',
                display: 'flex',
                justifyContent: 'center',
                padding: '0.53em 0.2em'
              }}
            >
              <CSButton
                label="export"
                variant="dark"
                onClickFunc={() => setModal(true)}
                disabled={false}
                size="sm"
              />
            </div> */}

            {/* <CSModal
              header={'Export Report'}
              content={
                <ExportPdf
                  calculatedData={calculatedData}
                  selectedLocation={selectedLocation}
                  monthYear={
                    monthName &&
                    `${monthName.mt} ${selectedYear}`
                  }
                  data={data}
                  selectedYear={selectedYear}
                  selectedMonth={selectedMonth}
                />
              }
              // footer={
              //   <CSButton
              //     label="Submit"
              //     variant="dark"
              //     onClickFunc={testOnClick}
              //     disabled={false}
              //     size="sm"
              //   />
              // }
              onHide={() => setModal(false)}
              state={modal}
              dialogClassName={'modal-lg'}
            /> */}
          </div>

          {monthName &&
            selectedYear !== 'Select Year' &&
            selectedYear !== undefined && (
              <p className={style.monthText}>
                Recorded cases for the month of
                <b>{` ${monthName.mt} ${selectedYear}`}</b>
              </p>
              // eslint-disable-next-line indent
            )}

          {calculatedData && (
            <>
              <div className={style.CardContainer}>
                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Confirmed}>
                        Confirmed
                      </h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={
                          calculatedData &&
                          calculatedData.smCases
                            ? parseInt(
                                calculatedData.smCases.Confirmed
                              )
                            : 0
                        }
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>

                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Recoveries}>
                        Recoveries
                      </h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={
                          calculatedData &&
                          calculatedData.smCases
                            ? parseInt(
                                calculatedData.smCases.Recoveries
                              )
                            : 0
                        }
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>

                <Card className={style.Card}>
                  <Card.Body className={style.CardBody}>
                    <div className={style.StatCategory}>
                      <h3 className={style.Deaths}>Deaths</h3>
                    </div>
                    <div className={style.Stat}>
                      <CountUp
                        className={style.Number}
                        start={0}
                        end={
                          calculatedData &&
                          calculatedData.smCases
                            ? parseInt(
                                calculatedData.smCases.Deaths
                              )
                            : 0
                        }
                        separator=","
                        duration={1}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>

              <div className={style.Bar}>
                <p className={style.weeklyText2}>
                  <b>Weekly</b> breakdown of cases for this month
                </p>
                <Bar
                  options={options}
                  data={dataset}
                  className={style.BarChart}
                />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

Ranges.propTypes = {
  data: PropTypes.any,
  selectedLocation: PropTypes.any
}

export default Ranges

const months = [
  { mt: 'January', val: '01' },
  { mt: 'February', val: '02' },
  { mt: 'March', val: '03' },
  { mt: 'April', val: '04' },
  { mt: 'May', val: '05' },
  { mt: 'June', val: '06' },
  { mt: 'July', val: '07' },
  { mt: 'August', val: '08' },
  { mt: 'September', val: '09' },
  { mt: 'October', val: '10' },
  { mt: 'November', val: '11' },
  { mt: 'December', val: '12' }
] // months dropdown
