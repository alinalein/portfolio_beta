import Texts from "../../../shared/utils/texts"
import CSM from '../assets/img/CSM.jpg'
import { useAppContext } from "../../../shared/context/AppContext";

const MyBackground = (): JSX.Element => {

    const { language } = useAppContext()

    return (<div className='about_img_div background_div' style={{ margin: '30px auto 10px auto' }}>
        <p style={{ textAlign: 'left', padding: '0 10px' }} className='remove_p-margin'>
            {Texts[language].about.backgroundText.split('\n\n').map((paragraph, pIndex) => (
                <span key={pIndex}>
                    {paragraph.split('**').map((part, i) =>
                        i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                    <br /><br />
                </span>
            ))}
        </p>
        <img src={CSM} alt='CSMPic' className="CSM_pic" />
    </div>)
}
export default MyBackground;