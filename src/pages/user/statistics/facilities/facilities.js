/* eslint-disable multiline-ternary */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types'
import { Card, Accordion } from 'react-bootstrap'
import CountUp from 'react-countup'
import style from './styles.module.scss'

const Facilities = ({ data }) => {
  console.log()
  return (
    <div>
      <hr />
      <h2 className={style.SectionHeader}>Facilities</h2>
      <p>
        Listing of Hospitals/Facilities with available data in
        this area.
      </p>

      <br />

      {data && data[0] ? (
        <Accordion className={style.Accordion}>
          {data &&
            data.map((data, index) => (
              <Accordion.Item eventKey={index} key={data}>
                <Accordion.Header
                  className={style.AccordionHeader}
                >
                  {data.hospital}
                </Accordion.Header>
                <Accordion.Body className={style.AccordionBody}>
                  <div className={style.Cards}>
                    <Card className={style.Card}>
                      <Card.Body className={style.CardBody}>
                        <div className={style.CategoryTitle}>
                          <h6 className={style.Category}>
                            ICU Beds
                          </h6>
                          <p>
                            {parseInt(data.icu_beds_occupied) +
                              parseInt(data.icu_beds_vacant)}
                          </p>
                        </div>
                        <div className={style.CategoryStatus}>
                          <div className={style.Section}>
                            <h6 className={style.Occupied}>
                              Occupied
                            </h6>
                            <p>{data.icu_beds_occupied}</p>
                          </div>

                          <div className={style.Section}>
                            <h6 className={style.Vacant}>
                              Vacant
                            </h6>
                            <p>{data.icu_beds_vacant}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className={style.Card}>
                      <Card.Body className={style.CardBody}>
                        <div className={style.CategoryTitle}>
                          <h6 className={style.Category}>
                            ISO Beds
                          </h6>
                          <p>
                            {parseInt(data.iso_beds_occupied) +
                              parseInt(data.iso_beds_vacant)}
                          </p>
                        </div>
                        <div className={style.CategoryStatus}>
                          <div className={style.Section}>
                            <h6 className={style.Occupied}>
                              Occupied
                            </h6>
                            <p>{data.iso_beds_occupied}</p>
                          </div>

                          <div className={style.Section}>
                            <h6 className={style.Vacant}>
                              Vacant
                            </h6>
                            <p>{data.iso_beds_vacant}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className={style.Card}>
                      <Card.Body className={style.CardBody}>
                        <div className={style.CategoryTitle}>
                          <h6 className={style.Category}>
                            Ward Beds
                          </h6>
                          <p>
                            {parseInt(data.ward_beds_occupied) +
                              parseInt(data.ward_beds_vacant)}
                          </p>
                        </div>
                        <div className={style.CategoryStatus}>
                          <div className={style.Section}>
                            <h6 className={style.Occupied}>
                              Occupied
                            </h6>
                            <p>{data.ward_beds_occupied}</p>
                          </div>

                          <div className={style.Section}>
                            <h6 className={style.Vacant}>
                              Vacant
                            </h6>
                            <p>{data.ward_beds_vacant}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>

                    <Card className={style.Card}>
                      <Card.Body className={style.CardBody}>
                        <div className={style.CategoryTitle}>
                          <h6 className={style.Category}>
                            Equipments
                          </h6>
                          <p>
                            {parseInt(data.equipment_occupied) +
                              parseInt(data.equipment_vacant)}
                          </p>
                        </div>
                        <div className={style.CategoryStatus}>
                          <div className={style.Section}>
                            <h6 className={style.Occupied}>
                              Occupied
                            </h6>
                            <p>{data.equipment_occupied}</p>
                          </div>

                          <div className={style.Section}>
                            <h6 className={style.Vacant}>
                              Vacant
                            </h6>
                            <p>{data.equipment_vacant}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>

                  <p>Last updated: {data.date}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
        </Accordion>
      ) : (
        <h3 className={style.NoData}>No data available</h3>
      )}
      <br />
    </div>
  )
}

Facilities.propTypes = {
  data: PropTypes.any
}
export default Facilities
