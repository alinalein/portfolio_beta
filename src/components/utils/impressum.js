import Texts from './texts';

const Impressum = ({ language, isWidthGreaterThan1050 }) => {
    const marginTop = isWidthGreaterThan1050 ? '0' : '25vh';

    return (
        <div className='impressum'
            style={{
                marginTop: marginTop,
            }}
        >
            <h1>Impressum</h1>
            <p>{Texts[language].impressum.information}</p>
            <p>Alina Leinweber</p>
            <p>Zauritzweg 9, 10585 Berlin</p>
            <p>{Texts[language].impressum.email}  <a href="mailto:alina.leinweber@gmx.de" className='impressum'>
                alina.leinweber@gmx.de
            </a></p>
            <p>{Texts[language].impressum.register}</p>
        </div>
    );
}
export default Impressum;