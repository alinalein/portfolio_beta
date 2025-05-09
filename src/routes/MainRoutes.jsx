import { Routes, Route } from 'react-router-dom';
import AboutMeView from '../features/about_me/views/AboutMeView';
import ApiCaseStudyView from '../features/apiCaseStudy/views/ApiCaseStudyView';
import ChatCaseStudy from '../features/work/chatCaseStudy';
import WorkView from '../features/work/views/WorkView';
import ContactView from '../features/contact/views/ContactView';
import Impressum from '../features/impressum/views/ImpressumView';

const MainRoutes = ({
    language,
    isWide,
    handleImpressumClick,
    activeComponent,
}) => {
    const components = {
        about: AboutMeView,
        work: WorkView,
        contact: ContactView,
        impressum: Impressum,
    };

    const ActiveComponent = components[activeComponent?.toLowerCase()];

    return (
        <Routes>
            <Route path="/impressum" element={<Impressum id="impressum" language={language} isWidthGreaterThan1050={isWide} />} />
            <Route path="/case-study/api" element={<ApiCaseStudyView language={language} />} />
            <Route path="/case-study/chat" element={<ChatCaseStudy language={language} isWidthGreaterThan1050={isWide} />} />
            <Route path="/" element={
                isWide ? (
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
