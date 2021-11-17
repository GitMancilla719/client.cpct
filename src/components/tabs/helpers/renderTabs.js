import {
  facilitiesTabs,
  accountTabs
} from '../../../utils/helpers/component-helpers/tab-titles'

const renderTabs = title => {
  if (title === 'Accounts') {
    const profile = JSON.parse(localStorage.getItem('profile'))

    if (profile.role === 'admin') {
      const accountTitles = accountTabs.map(title => title)
      return accountTitles
    }

    const accountTitles = accountTabs.filter(
      title => title === 'My Account'
    )
    return accountTitles
  }

  if (title === 'Facilities') {
    const facilitiesTitles = facilitiesTabs.map(title => title)
    return facilitiesTitles
  }
}

export default renderTabs
