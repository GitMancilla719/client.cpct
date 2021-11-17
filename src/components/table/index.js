import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'
import tableData from './helpers/renderTableData'
import style from './style.module.scss'

const CSTable = ({ data, type, onClickFunc }) => {
  const tableRender = tableData(type, data, onClickFunc)
  return (
    <Table
      striped
      bordered
      hover
      size="sm"
      className={style.Table}
    >
      <thead>
        <tr className={`sticky-top ${style.TableHeader}`}>
          {tableRender.headers.map(header => header)}
        </tr>
      </thead>
      <tbody>
        {tableRender.renderdata.reverse().map(data => data)}
      </tbody>
    </Table>
  )
}

CSTable.propTypes = {
  data: PropTypes.array,
  type: PropTypes.string,
  onClickFunc: PropTypes.func
}

export default CSTable
