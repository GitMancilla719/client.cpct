/* eslint-disable indent */
/* eslint-disable multiline-ternary */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { useState } from 'react'
// import style from './styles.module.scss'

import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from '@react-pdf/renderer'

const style = StyleSheet.create({
  rows: {
    // backgroundColor: 'tomato',
    display: 'flex',
    flexDirection: 'row'
    // border: '2px solid black'
  },
  rowsstats: {
    // backgroundColor: 'tomato',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid black',
    borderTop: '1px solid black',
    width: '68%'
  },
  infoBox: {
    margin: '5 0 15 0'
  },
  info: { margin: '3 0', fontSize: '14pt' },
  texts: { margin: '3 21', fontSize: '12pt' },
  Category: { margin: '3 24', fontSize: '12pt' },
  stats: {
    // backgroundColor: 'tomato',
    textAlign: 'center',
    width: '50em',
    margin: '2 25',
    fontSize: '11pt'
    // borderBottom: '2px solid black'
  },
  page: { margin: '20 70 10 50' }
})

const ExportPdf = ({
  calculatedData,
  selectedLocation,
  monthYear,
  data,
  selectedYear,
  selectedMonth
}) => {
  const previousMonth = (selectedMonth - 1).toString()
  const previousMonthCustom =
    previousMonth.length === 1
      ? `0${previousMonth}`
      : previousMonth
  const previousYearMonth = data.filter(data =>
    data.Date.includes(`${selectedYear}-${previousMonthCustom}`)
  )
  const previousMonthLastData = previousYearMonth.at(-1)

  const testData = []
  if (calculatedData) {
    for (
      let x = 0;
      x <= calculatedData.smReport.length - 1;
      x++
    ) {
      const current = calculatedData.smReport[x]
      const previous =
        x !== 0
          ? calculatedData.smReport[x - 1]
          : calculatedData.smReport[x]

      const cases = {
        Confirmed:
          x !== 0
            ? current.Confirmed - previous.Confirmed
            : selectedMonth !== '01'
            ? current.Confirmed - previousMonthLastData.Confirmed
            : 0,
        Deaths:
          x !== 0
            ? current.Deaths - previous.Deaths
            : selectedMonth !== '01'
            ? current.Deaths - previousMonthLastData.Deaths
            : 0,
        Recovered:
          x !== 0
            ? current.Recovered - previous.Recovered
            : selectedMonth !== '01'
            ? current.Recovered - previousMonthLastData.Recovered
            : 0,
        Date: current.Date
      }
      testData.push(cases)
    }
  }

  return (
    <div style={{ height: '30em' }}>
      {calculatedData && calculatedData.smReport ? (
        <PDFViewer width={'100%'} height={'100%'}>
          <Document>
            <Page size="A4" style={style.page}>
              <View style={style.infoBox}>
                <View style={style.rows}>
                  <Text style={style.info}>
                    Location: {selectedLocation}
                  </Text>
                </View>
                <View style={style.rows}>
                  <Text style={style.info}>
                    Month & Year: {monthYear}
                  </Text>
                </View>
              </View>

              <View style={style.rows}>
                <Text style={style.texts}>
                  Total recorded cases per day
                </Text>
              </View>

              <View style={style.rows}>
                <Text style={style.Category}>Confirmed</Text>
                <Text style={style.Category}>Deaths</Text>
                <Text style={style.Category}>Recoveries</Text>
                <Text style={style.Category}>Date</Text>
              </View>

              <View>
                {testData.map(data => (
                  <View key={data._id} style={style.rowsstats}>
                    <Text style={style.stats}>
                      {data.Confirmed.toLocaleString()}
                    </Text>
                    <Text style={style.stats}>
                      {data.Deaths.toLocaleString()}
                    </Text>
                    <Text style={style.stats}>
                      {data.Recovered.toLocaleString()}
                    </Text>
                    <Text style={style.stats}>{data.Date}</Text>
                  </View>
                ))}
              </View>
            </Page>
          </Document>
        </PDFViewer>
      ) : (
        'No selected month/year'
      )}
    </div>
  )
}

ExportPdf.propTypes = {
  calculatedData: PropTypes.any,
  selectedLocation: PropTypes.any,
  monthYear: PropTypes.any,
  data: PropTypes.any,
  selectedYear: PropTypes.any,
  selectedMonth: PropTypes.any
}

export default ExportPdf
