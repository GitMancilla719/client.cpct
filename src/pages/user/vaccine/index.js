/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import style from './style.module.scss'
import { getVacs } from '../../../redux/thunk/vaccination'

const Vaccine = () => {
  const dispatch = useDispatch()
  const Vacs = useSelector(state => state.vaccinations)
  const vacsInfo = Vacs.vacs

  useEffect(() => {
    dispatch(getVacs())
  }, [dispatch])

  return (
    <div className={style.Container}>
      <h2 className={style.SectionHeader}>
        Provincial Vaccination Statistics
      </h2>

      <p>
        Status of vaccination throughout the whole province of
        cavite.
      </p>

      <br />

      <div className={style.CardContainer}>
        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A1</h2>
              <p>Frontline Health Workers</p>
            </div>
            <div className={style.DosesContainer}>
              <div className={style.Doses}>
                <h6>First Dose</h6>
                <p>{vacsInfo.a1_d1 ?? 'Loading..'}</p>
              </div>

              <div className={style.Doses}>
                <h6>Second Dose</h6>
                <p>{vacsInfo.a1_d2 ?? 'Loading..'}</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A2</h2>
              <p>Senior Citizens</p>
            </div>
            <div className={style.DosesContainer}>
              <div className={style.Doses}>
                <h6>First Dose</h6>
                <p>{vacsInfo.a2_d1 ?? 'Loading..'}</p>
              </div>

              <div className={style.Doses}>
                <h6>Second Dose</h6>
                <p>{vacsInfo.a2_d2 ?? 'Loading..'}</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A3</h2>
              <p>Persons With Co-Morbidities</p>
            </div>
            <div className={style.DosesContainer}>
              <div className={style.Doses}>
                <h6>First Dose</h6>
                <p>{vacsInfo.a3_d1 ?? 'Loading..'}</p>
              </div>

              <div className={style.Doses}>
                <h6>Second Dose</h6>
                <p>{vacsInfo.a3_d2 ?? 'Loading..'}</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A4</h2>
              <p>Economic Frontliners</p>
            </div>
            <div className={style.DosesContainer}>
              <div className={style.Doses}>
                <h6>First Dose</h6>
                <p>{vacsInfo.a4_d1 ?? 'Loading..'}</p>
              </div>

              <div className={style.Doses}>
                <h6>Second Dose</h6>
                <p>{vacsInfo.a4_d2 ?? 'Loading..'}</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A5</h2>
              <p>Indigent Population</p>
            </div>
            <div className={style.DosesContainer}>
              <div className={style.Doses}>
                <h6>First Dose</h6>
                <p>{vacsInfo.a5_d1 ?? 'Loading..'}</p>
              </div>

              <div className={style.Doses}>
                <h6>Second Dose</h6>
                <p>{vacsInfo.a5_d2 ?? 'Loading..'}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <br />
    </div>
  )
}

export default Vaccine
