import { Routes, Route } from 'react-router-dom';
import AboutMeView from '../features/about_me/views/AboutMeView';
import ApiCaseStudyView from '../features/apiCaseStudy/views/ApiCaseStudyView';
import ChatCaseStudy from '../features/utils/chatCaseStudy';
import WorkView from '../features/work/views/WorkView';
import ContactView from '../features/contact/views/ContactView';
import Impressum from '../features/impressum/views/ImpressumView';
import type { ComponentKey } from '../types/routes';

type MainRoutesProps = {
    language: string;
    isWide: boolean;
    handleImpressumClick: () => void;
    activeComponent: ComponentKey;
}

const MainRoutes = ({
    language,
    isWide,
    handleImpressumClick,
    activeComponent,
}: MainRoutesProps): JSX.Element => {

    const components: Record<ComponentKey, (props: any) => JSX.Element> = {
        about: AboutMeView,
        work: WorkView,
        contact: ContactView,
        impressum: Impressum,
    };

    const ActiveComponent = activeComponent ? components[activeComponent] : null;

    return (
        <Routes>
            <Route path="/impressum" element={<Impressum id="impressum" language={language} isWidthGreaterThan1050={isWide} />} />
            <Route path="/case-study/api" element={<ApiCaseStudyView language={language} />} />
            <Route path="/case-study/chat" element={<ChatCaseStudy language={language} isWidthGreaterThan1050={isWide} />} />
            <Route path="/" element={
                isWide && ActiveComponent ? (
                    <ActiveComponent id={activeComponent.toLowerCase()} isWidthGreaterThan1050={isWide} language={language} />
                ) : (
                    <>
                        <AboutMeView id="about" isWidthGreaterThan1050={isWide} language={language} />
                        <WorkView id="work" isWidthGreaterThan1050={isWide} language={language} />
                        <ContactView id="contact" handleImpressumClick={handleImpressumClick} isWidthGreaterThan1050={isWide} language={language} />
                    </>
                )
            } />
        </Routes>
    );
};

export default MainRoutes;
