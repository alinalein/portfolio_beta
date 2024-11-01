import Texts from './texts';

const Impressum = ({ language, isWidthGreaterThan1050 }) => {
    const marginTop = isWidthGreaterThan1050 ? '0' : '20vh';
    // const isDarkMode = document.body.classList.contains('dark-mode');
    // const textColor = isDarkMode ? 'var(--text-color-dark)' : 'var(--text-color-light)';

    return (
        <div
            style={{
                zIndex: 1,
                marginTop: marginTop,
                alignItems: 'flex-start',
                color: 'var(--text-color-light)',
            }}
        >
            <h1>Impressum</h1>
            <p>{Texts[language].impressum.information}</p>
            <p>Alina Leinweber</p>
            <p>Zauritzweg 9, 10585 Berlin</p>
            <p>{Texts[language].impressum.email}  <a href="mailto:alina.leinweber@gmx.de" style={{ color: "var(--text-color-light)", textDecoration: "underline" }}>
                alina.leinweber@gmx.de
            </a></p>
            <p>{Texts[language].impressum.register}</p>


        </div>
    );
}
export default Impressum;