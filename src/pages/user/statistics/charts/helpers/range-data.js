/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const rangeData = (data, selectedYear, selectedMonth) => {
  if (
    selectedYear !== 'Select Year' &&
    selectedMonth !== 'Select Month' &&
    selectedYear &&
    selectedMonth
  ) {
    const selectedYearMonth = data.filter(data =>
      data.Date.includes(`${selectedYear}-${selectedMonth}`)
    )
    const selectedMonthLastData = selectedYearMonth.slice(-1)[0]

    const previousMonth = (selectedMonth - 1).toString()
    const previousMonthCustom =
      previousMonth.length === 1
        ? `0${previousMonth}`
        : previousMonth
    const previousYearMonth = data.filter(data =>
      data.Date.includes(
        `${selectedYear}-${previousMonthCustom}`
      )
    )
    const previousMonthLastData = previousYearMonth.slice(-1)[0]

    const dec2020 = data
      .filter(data => data.Date.includes('2020-12'))
      .slice(-1)[0]

    const selectedMonthCases =
      selectedMonth !== '01'
        ? {
            Confirmed:
              selectedMonthLastData.Confirmed -
              previousMonthLastData.Confirmed,
            Deaths:
              selectedMonthLastData.Deaths -
              previousMonthLastData.Deaths,
            Recoveries:
              selectedMonthLastData.Recovered -
              previousMonthLastData.Recovered
          }
        : `${selectedYear}-${selectedMonth}` === '2021-01'
        ? {
            Confirmed:
              selectedMonthLastData.Confirmed -
              dec2020.Confirmed,
            Deaths:
              selectedMonthLastData.Deaths - dec2020.Deaths,
            Recoveries:
              selectedMonthLastData.Recovered - dec2020.Recovered
          }
        : {
            Confirmed: selectedMonthLastData.Confirmed,
            Deaths: selectedMonthLastData.Deaths,
            Recoveries: selectedMonthLastData.Recovered
          }

    const selectedMonthWeekly = {
      week1: selectedYearMonth
        .slice((1 - 1) * 7, 1 * 7)
        .slice(-1)[0].Confirmed && {
        Confirmed:
          `${selectedYear}-${selectedMonth}` === '2021-01'
            ? selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Confirmed - dec2020.Confirmed
            : selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Confirmed -
              previousMonthLastData.Confirmed,
        Deaths:
          `${selectedYear}-${selectedMonth}` === '2021-01'
            ? selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Deaths - dec2020.Deaths
            : selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Deaths -
              previousMonthLastData.Deaths,
        Recovered:
          `${selectedYear}-${selectedMonth}` === '2021-01'
            ? selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Recovered - dec2020.Recovered
            : selectedYearMonth
                .slice((1 - 1) * 7, 1 * 7)
                .slice(-1)[0].Recovered -
              previousMonthLastData.Recovered
      },
      week2: selectedYearMonth
        .slice((2 - 1) * 7, 2 * 7)
        .slice(-1)[0] && {
        Confirmed:
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Confirmed -
          selectedYearMonth
            .slice((1 - 1) * 7, 1 * 7)
            .slice(-1)[0].Confirmed,
        Deaths:
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Deaths -
          selectedYearMonth
            .slice((1 - 1) * 7, 1 * 7)
            .slice(-1)[0].Deaths,
        Recovered:
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Recovered -
          selectedYearMonth
            .slice((1 - 1) * 7, 1 * 7)
            .slice(-1)[0].Recovered
      },
      week3: selectedYearMonth
        .slice((3 - 1) * 7, 3 * 7)
        .slice(-1)[0] && {
        Confirmed:
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Confirmed -
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Confirmed,
        Deaths:
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Deaths -
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Deaths,
        Recovered:
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Recovered -
          selectedYearMonth
            .slice((2 - 1) * 7, 2 * 7)
            .slice(-1)[0].Recovered
      },
      week4: selectedYearMonth
        .slice((4 - 1) * 7, 4 * 7)
        .slice(-1)[0] && {
        Confirmed:
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Confirmed -
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Confirmed,
        Deaths:
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Deaths -
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Deaths,
        Recovered:
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Recovered -
          selectedYearMonth
            .slice((3 - 1) * 7, 3 * 7)
            .slice(-1)[0].Recovered
      },
      week5: selectedYearMonth
        .slice((5 - 1) * 7, 5 * 7)
        .slice(-1)[0] && {
        Confirmed:
          selectedYearMonth
            .slice((5 - 1) * 7, 5 * 7)
            .slice(-1)[0].Confirmed -
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Confirmed,
        Deaths:
          selectedYearMonth
            .slice((5 - 1) * 7, 5 * 7)
            .slice(-1)[0].Deaths -
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Deaths,
        Recovered:
          selectedYearMonth
            .slice((5 - 1) * 7, 5 * 7)
            .slice(-1)[0].Recovered -
          selectedYearMonth
            .slice((4 - 1) * 7, 4 * 7)
            .slice(-1)[0].Recovered
      }
    }

    return {
      smCases: selectedMonthCases,
      smWeekly: selectedMonthWeekly
    }
  }

  return null
}

export default rangeData
