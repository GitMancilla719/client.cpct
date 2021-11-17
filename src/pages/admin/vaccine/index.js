/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'react-bootstrap'
import style from './style.module.scss'
import {
  getVacs,
  updateVacs
} from '../../../redux/thunk/vaccination'
import CSButton from '../../../components/button'
import CSModal from '../../../components/modal'
import VaccineForm from './form'
import ToastTrigger from '../../../components/toaster/helpers/toastTrigger'
import { addLogs } from '../../../redux/thunk/logs'
import CSToaster from '../../../components/toaster'

const Vaccine = () => {
  const dispatch = useDispatch()
  const Vacs = useSelector(state => state.vaccinations)

  const [toggleUpdateModal, setToggleUpdateModal] =
    useState(false)

  const [newData, setNewData] = useState()

  const vacsInfo = Vacs.vacs
  console.table(vacsInfo)

  const handleClose = () => {
    setToggleUpdateModal(false)
  }

  const handleOpen = () => {
    setToggleUpdateModal(true)
    setNewData(vacsInfo)
  }

  const handleSubmit = async () => {
    const response = await dispatch(updateVacs(newData))
    if (
      response.payload.message !==
      'Request failed with status code 422'
    ) {
      setToggleUpdateModal(false)
      ToastTrigger('success', 'Record updated successfully.')
      dispatch(getVacs())
      const profile = JSON.parse(localStorage.getItem('profile'))
      dispatch(
        addLogs({
          name: `${profile.firstname} ${profile.lastname}`,
          activity: 'Updated Vaccination records.',
          role: profile.role
        })
      )
    } else {
      ToastTrigger('error', 'Something went wrong.')
    }
  }

  useEffect(() => {
    dispatch(getVacs())
  }, [dispatch])

  return (
    <div>
      <h3 className={style.header}>Vaccination</h3>
      <h6 className={style.header}>
        Last Updated: {vacsInfo.date}
      </h6>

      <div
        onClick={() => handleOpen()}
        className={style.CardContainer}
      >
        <Card className={style.Card}>
          <Card.Body className={style.CardBody}>
            <div className={style.VacCategory}>
              <h2>A1</h2>
              <p>description</p>
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
              <p>description</p>
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
              <p>description</p>
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
              <p>description</p>
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
              <p>description</p>
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

      <CSModal
        header={'Update Vaccine Records'}
        content={
          <VaccineForm
            data={newData && newData}
            setFunction={setNewData}
          />
        }
        footer={
          <>
            <CSButton
              label="Update"
              variant="dark"
              onClickFunc={() => handleSubmit()}
              disabled={false}
              size="sm"
            />
          </>
        }
        onHide={handleClose}
        state={toggleUpdateModal}
        dialogClassName={'modal-md'}
      />

      <CSToaster />
    </div>
  )
}

export default Vaccine
