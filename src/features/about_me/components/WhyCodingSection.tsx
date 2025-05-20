import Texts, { Language } from "../../../shared/utils/texts"


type WhyCodingSectionProps = {
    language: Language
}
const WhyCodingSection = ({ language }: WhyCodingSectionProps): JSX.Element => (


    <p style={{ textAlign: 'left', margin: '30px 10px 20px 10px' }} className='remove_p-margin'>
        {Texts[language].about.whyCodingText.split('\n\n').map((paragraph, index) => (
            <p key={index}>
                {paragraph.split('**').map((part, i) =>
                    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                )}
            </p>
        ))}
    </p>
)
export default WhyCodingSection