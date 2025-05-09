import Texts from '../../../shared/utils/texts';

const Impressum = ({ id, language, isWidthGreaterThan1050 }) => {
    const marginTop = isWidthGreaterThan1050 ? '0' : '25vh';

    return (
        <div className='impressum' id={id}
            style={{
                marginTop: marginTop,
            }}
        >
            <h1>Impressum</h1>
            <p>{Texts[language].impressum.information}</p>
            <p>Alina Leinweber</p>
            <p>Zauritzweg 9, 10585 Berlin</p>
            <p>{Texts[language].impressum.email}  <a href="mailto:leinweber.alina@gmx.de" className='impressum'>
                leinweber.alina@gmx.de
            </a></p>
            <p>{Texts[language].impressum.register}</p>
        </div>
    );
}
export default Impressum;