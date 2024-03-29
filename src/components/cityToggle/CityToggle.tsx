import { FC, useState } from 'react'
import MyButton from '../myButton/MyButton'

import styles from './CityToggle.module.css'


const CityToggle: FC = (): JSX.Element => {

  const berlin = {
    name: 'Berlin',
    title: 'Capital of Germany',
    imgUrl: 'https://www.tip-berlin.de/wp-content/uploads/2021/08/imago0103706141h-scaled.jpg'
  }
  const paris = {
    name: 'Paris',
    title: 'Capital of France',
    imgUrl: 'https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1500/v1/ADAC-eV/KOR/Bilder/RF/sehenwuerdig-paris-eiffelturm-2105_b6pwxb.jpeg'
  }


  const [isBerlin, setIsBerlin] = useState(true)
  const [cityData, setCityData] = useState(berlin)


  const toggleCity = (): void => {
    if (isBerlin) {
      setCityData(paris);
    } else {
      setCityData(berlin);
    }
    setIsBerlin(!isBerlin);
  }


  return (
    <div className='App'>
      <h1>{cityData.name}</h1>
      <p>{cityData.title}</p>
      <div className={styles.imgWrapper}>
        <img className={styles.img} width={300} src={cityData.imgUrl} alt="" />
      </div>
      <div>
        <MyButton text={'Изменить город'} onClick={toggleCity} />
      </div>
    </div>
  )
}

export default CityToggle
