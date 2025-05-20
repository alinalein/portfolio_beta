import Texts from '../../../shared/utils/texts';
import { useAppContext } from '../../../shared/context/AppContext';

type ImpressumProps = {
    id: string;
};

const Impressum = ({ id }: ImpressumProps): JSX.Element => {
    const { language, isWidthGreaterThan1050 } = useAppContext();
    return (
        <div className='impressum' id={id}
            style={{
                marginTop: isWidthGreaterThan1050 ? '0' : '25vh',
            }}
        >
            <h1>Impressum</h1>
            <p>{Texts[language].impressum.information}</p>
            <p>Alina Leinweber</p>
            <p>Zauritzweg 9, 10585 Berlin</p>
            <p>
                {Texts[language].impressum.email}:{' '}
                <a href="mailto:leinweber.alina@gmx.de" className="impressum">
                    leinweber.alina@gmx.de
                </a>
            </p>
            <p>{Texts[language].impressum.register}</p>
        </div>
    );
}
export default Impressum;