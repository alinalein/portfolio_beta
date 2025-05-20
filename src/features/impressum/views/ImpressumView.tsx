import Texts, { Language } from '../../../shared/utils/texts';

type ImpressumProps = {
    id: string;
    language: Language;
    isWidthGreaterThan1050: boolean;
};

const Impressum = ({ id, language, isWidthGreaterThan1050 }: ImpressumProps): JSX.Element => {

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