/* eslint-disable no-unused-vars */
import LOGO from '../../assets/images/whitelogo.png'
import lgu from './lgu'
import style from './styles.module.scss'

const CSFooter = () => {
  return (
    <div className={style.Footer}>
      {/* <div className={style.Logo} href="/Statistics"> */}
      {/* <img src={LOGO} className={style.LogoImage} /> */}
      {/* </div> */}

      <div className={style.Text}>
        <p>
          All information contained herein are sourced through
          DOH ang LGU Facebook pages of the Province of Cavite
        </p>
      </div>

      <div>
        <div className={style.Links}>
          {lgu.slice(0, 4).map(link => (
            <a href={link.link} rel="noreferrer" key={link.loc}>
              {link.loc}
            </a>
          ))}
        </div>

        <div className={style.Links}>
          {lgu.slice(5, 9).map(link => (
            <a href={link.link} rel="noreferrer" key={link.loc}>
              {link.loc}
            </a>
          ))}
        </div>

        <div className={style.Links}>
          {lgu.slice(10, 14).map(link => (
            <a href={link.link} rel="noreferrer" key={link.loc}>
              {link.loc}
            </a>
          ))}
        </div>

        <div className={style.Links}>
          {lgu.slice(15, 19).map(link => (
            <a href={link.link} rel="noreferrer" key={link.loc}>
              {link.loc}
            </a>
          ))}
        </div>

        <div className={style.Links}>
          {lgu.slice(20).map(link => (
            <a href={link.link} rel="noreferrer" key={link.loc}>
              {link.loc}
            </a>
          ))}
        </div>

        <div className={style.Links}>
          <a href="https://doh.gov.ph/" rel="noreferrer">
            Department of Health
          </a>
          <a href="https://www.who.int/" rel="noreferrer">
            World Health Organization
          </a>
        </div>
      </div>
    </div>
  )
}

export default CSFooter
