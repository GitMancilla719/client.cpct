/* eslint-disable no-unused-vars */
import { Card, Accordion } from 'react-bootstrap'
import style from './styles.module.scss'

const Information = () => {
  return (
    <div className={style.Container}>
      <h2 className={style.SectionHeader}>
        Frequently Asked Questions
      </h2>
      <br />
      <div className={style.Accordion}>
        <Accordion className={style.Accordion}>
          <Accordion.Item eventKey={1} key={'data'}>
            <Accordion.Header>
              <h3>WHAT IS COVID19?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Coronaviruses are a large family of viruses
                causing a range of illnesses, from the common
                cold to more serious infections such as those
                caused by Middle East Respiratory
                Syndrome-related Coronavirus (MERS-CoV) and
                Severe Acute Respiratory Syndrome-related
                Coronavirus (SARS-CoV). Coronavirus can also
                cause a variety of diseases in farm animals and
                domesticated pets.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={2} key={'data'}>
            <Accordion.Header>
              <h3>WHAT IS NOVEL CORONAVIRUS?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                The novel coronavirus is a new strain of
                coronavirus that has not been previously
                identified in humans. The novel coronavirus has
                caused severe pneumonia in several cases in China
                and has been exported to a range of countries and
                cities. Last February 12, 2020, the World Health
                Organization (WHO) announced that the novel
                disease is officially called Coronavirus Disease
                19 or COVID-19, and the virus infecting it is
                referred to as COVID-19 virus.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={3} key={'data'}>
            <Accordion.Header>
              <h3>HOW DOES COVID-19 SPREAD?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                COVID-19 is transmitted from person to person via
                droplets, contact, and fomites. It is transmitted
                when one individual talks, sneezes, or coughs
                producing ‘droplets’ of saliva containing the
                COVID-19 virus. These droplets are then inhaled
                by another person. COVID-19 transmission usually
                occurs among close contacts – including family
                members and healthcare workers. It is therefore
                important to maintain a distance of more than 1
                meter away from any person who has respiratory
                symptoms.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={4} key={'data'}>
            <Accordion.Header>
              <h3>
                WHAT ARE THE SIGNS AND SYMPTOMS OF COVID-19?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                According to WHO, the most common symptoms of
                COVID-19 are fever, tiredness and dry cough. Few
                patients experience aches and pains, nasal
                congestion, runny nose, sore throat or diarrhea.
                Patients usually have mild symptoms that start
                gradually. Most patients recover without needing
                any special treatment. Only around 1 of 6
                patients manifest with difficulty breathing and
                become seriously ill.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={5} key={'data'}>
            <Accordion.Header>
              <h3>
                WHAT CAN I DO TO PREVENT THE SPREAD OF COVID-19?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                DOH advises the public to practice protective
                measures. It is still the best way to protect
                oneself against COVID-19.
                <ul>
                  <li>
                    Practice frequent and proper handwashing –
                    wash hands often with soap and water for at
                    least 20 seconds. Use an alcohol-based hand
                    sanitizer if soap and water are not
                    available.
                  </li>
                  <li>
                    Practice proper cough etiquette.
                    <ul>
                      <li>
                        Cover mouth and nose using tissue or
                        sleeves/bend of the elbow when coughing
                        or sneezing.
                      </li>
                      <li>
                        Move away from people when coughing.
                      </li>
                      <li>Do not spit.</li>
                      <li>Throw away used tissues properly.</li>
                      <li>
                        Always wash your hands after sneezing or
                        coughing.
                      </li>
                      <li>Use alcohol/sanitizer.</li>
                    </ul>
                  </li>
                  <li>
                    Maintain distance of at least one meter away
                    from individual/s experiencing respiratory
                    symptoms.
                  </li>
                  <li>
                    Avoid unprotected contact with farm or wild
                    animals (alive or dead), animal markets, and
                    products that come from animals (such as
                    uncooked meat).
                  </li>
                  <li>Ensure that food is well-cooked.</li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={6} key={'data'}>
            <Accordion.Header>
              <h3>HOW CAN I PROTECT MYSELF FROM COVID-19?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <ul>
                  <li>Wear face mask and face shield</li>
                  <li>Sanitize your hands</li>
                  <li>
                    Practice one-meter physical distancing and
                    limit physical interaction
                  </li>
                  <li>
                    Ensure good indoor ventilation and air flow
                  </li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={7} key={'data'}>
            <Accordion.Header>
              <h3>
                WHO ARE CONSIDERED AS CLOSE CONTACTS IN THE
                CONTEXT OF COVID-19?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <ul>
                  <li>
                    Interacted with a person with COVID-19 within
                    one meter for more than 15 minutes
                  </li>
                  <li>
                    Had direct physical interaction with probable
                    or confirmed COVID-19 case
                  </li>
                  <li>
                    Had interaction with a person with COVID-19
                    without wearing protective equipment
                  </li>
                </ul>
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={8} key={'data'}>
            <Accordion.Header>
              <h3>WHAT SHOULD I DO IF I AM A CLOSE CONTACT?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Get tested if you are a close contact. Tell
                  your Barangay Health Emergency Response Team
                  (BHERT) that you are a close contact. This is
                  to inform your next steps
                </li>
                <li>COVID-19 Testing</li>
                <li>
                  Referral to the Temporary Treatment and
                  Monitoring Facility (TTMF) or hospital (if
                  needed)
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={9} key={'data'}>
            <Accordion.Header>
              <h3>WHAT TESTS WILL BE USED?</h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>RT-PCR (gold standard)</li>
                <li>
                  Antigen (for those specified places with rising
                  cases of COVID-19, wherein RT-PCR tests are
                  lacking)
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={10} key={'data'}>
            <Accordion.Header>
              <h3>
                WHAT IS THE DIFFERENCE BETWEEN QUARANTINE AND
                ISOLATION?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Quarantine – period to monitor well-being after
                  being identified as a close contact with a
                  person with COVID-19
                </li>
                <li>
                  Isolation – separating people with symptoms or
                  confirmed COVID-19 cases
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={11} key={'data'}>
            <Accordion.Header>
              <h3>
                I HAVE TO ISOLATE MYSELF, WHAT SHOULD I DO?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                Continue wearing your face mask to prevent the
                spread of any virus/disease, Disinfect all
                objects and surfaces that are frequently touched,
                Practice physical distance and stay in your room.
              </p>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={12} key={'data'}>
            <Accordion.Header>
              <h3>
                WHAT ARE THE SYMPTOMS THAT YOU NEED TO WATCH OUT
                FOR?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Difficulty in breathing, even when sitting
                </li>
                <li>
                  Cough, fever, and difficulty in breathing
                </li>
                <li>Severe coughing</li>
                <li>
                  Confusion or sudden change in mental well-being
                </li>
                <li>Pain in the chest</li>
                <li>Low oxygen level</li>
                <li>
                  Excessive sleepiness or cannot be woken up
                </li>
                <li>Bluish or darkened face or lips</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={13} key={'data'}>
            <Accordion.Header>
              <h3>
                WHAT ARE THE WAYS TO MAINTAIN A STRONG PHYSICAL
                AND MENTAL WELL-BEING?
              </h3>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  Eat nutritious food such as fruits, vegetables,
                  fish, and meat
                </li>
                <li>Exercise inside for 30 minutes per day</li>
                <li>Ensure to have enough sleep</li>
                <li>
                  Practice self-care. Simple relaxing and talking
                  with your loved ones is a form of self-care.
                </li>
                <li>Talk and check on with your loved ones.</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey={14} key={'data'}>
            <Accordion.Header>
              <h3>Phone Directory for Hospital Referral</h3>
            </Accordion.Header>
            <Accordion.Body>
              <p>Southern Tagalog Regional Hospital</p>
              <ul>
                <li>EMERGENCY ROOM TRIAGE - 0956 7122 571</li>
                <li>
                  ONE COMMAND CENTER - 0956 3800 857 / 0961 7615
                  988
                </li>
              </ul>
            </Accordion.Body>
            <Accordion.Body>
              <p>General Emilio Aguinaldo Memorial Hospital </p>
              <ul>
                <li>EMERGENCY ROOM TRIAGE - 0908 8150 650</li>
                <li>
                  ICC Nurse - 0966 9873 343 / 0928 9757 632
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  )
}

export default Information
