import { toast } from 'react-toastify'

// TO TRIGGER
// const test = () => ToastTrigger('success', 'success')

const ToastTrigger = (type, message) => {
  type === 'info' && toast.info(message)
  type === 'success' && toast.success(message)
  type === 'warn' && toast.warn(message)
  type === 'error' && toast.error(message)
}

export default ToastTrigger
