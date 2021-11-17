import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CSTable from '../../../components/table'
import { getLogs } from '../../../redux/thunk/logs'
import style from './style.module.scss'

const Logs = () => {
  const dispatch = useDispatch()
  const logs = useSelector(state => state.logs)

  useEffect(() => {
    dispatch(getLogs())
  }, [dispatch])
  return (
    <div className={style.Container}>
      <h3>Logs</h3>
      <div className={style.TableContainer}>
        <CSTable
          data={logs.logs}
          type={'Logs'}
          onClickFunc={null}
        />
      </div>
    </div>
  )
}

export default Logs
