/* eslint-disable no-unused-vars */
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import style from './styles.module.scss'
import district from '../map/helpers/districts'

const Statcards = ({
  Confirmed,
  Recoveries,
  Deaths,
  LastUpdated,
  Location
}) => {
  const District =
    Location &&
    district.find(data => data.scope.includes(Location))

  const FatalityRate =
    ((Deaths / Confirmed) * 100).toFixed(2) ?? 0
  const RecoveryRate =
    ((Recoveries / Confirmed) * 100).toFixed(2) ?? 0
  const ActiveRate =
    (
      ((Confirmed - (Deaths + Recoveries)) / Confirmed) *
      100
    ).toFixed(2) ?? 0

  return (
    <div className={style.Container}>
      {District && (
        <p className={style.District}>
          District: {District.district}
        </p>
      )}
      <div className={style.CardContainer}>
        {Confirmed && (
          <Card className={style.Card}>
            <Card.Body className={style.CardBody}>
              <div className={style.StatCategory}>
                <h3 className={style.Confirmed}>Confirmed</h3>
              </div>
              <div className={style.Stat}>
                <CountUp
                  className={style.Number}
                  start={0}
                  end={parseInt(Confirmed)}
                  separator=","
                  duration={1}
                />
                <p className={style.Rates}>
                  <span className={style.Active}>
                    Active: {ActiveRate >= 0 ? ActiveRate : 0}%
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        )}

        {Recoveries && (
          <Card className={style.Card}>
            <Card.Body className={style.CardBody}>
              <div className={style.StatCategory}>
                <h3 className={style.Recoveries}>Recoveries</h3>
              </div>
              <div className={style.Stat}>
                <CountUp
                  className={style.Number}
                  start={0}
                  end={parseInt(Recoveries)}
                  separator=","
                  duration={1}
                />
                <p className={style.Rates}>
                  <span className={style.Recov}>
                    Recovery Rate: {RecoveryRate}%
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        )}

        {Deaths && (
          <Card className={style.Card}>
            <Card.Body className={style.CardBody}>
              <div className={style.StatCategory}>
                <h3 className={style.Deaths}>Deaths</h3>
              </div>
              <div className={style.Stat}>
                <CountUp
                  className={style.Number}
                  start={0}
                  end={parseInt(Deaths)}
                  separator=","
                  duration={1}
                />
                <p className={style.Rates}>
                  <span className={style.Dts}>
                    Fatality Rate: {FatalityRate}%
                  </span>
                </p>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>

      {LastUpdated && (
        <p className={style.LastUpdated}>
          Last updated: {LastUpdated}
        </p>
      )}
    </div>
  )
}

Statcards.propTypes = {
  Confirmed: PropTypes.any,
  Recoveries: PropTypes.any,
  Deaths: PropTypes.any,
  LastUpdated: PropTypes.any,
  Location: PropTypes.any
}

export default Statcards
