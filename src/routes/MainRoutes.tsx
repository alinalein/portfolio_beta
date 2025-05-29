import { Routes, Route } from 'react-router-dom';
import { AboutMeView, ApiCaseStudyView, WorkView, ContactView, Impressum } from '../features';
import { useAppContext } from '../shared';
import type { ComponentKey } from '../types/routes';

const MainRoutes = (): JSX.Element => {
  const { isWidthGreaterThan1050, activeComponent } = useAppContext();

  const components: Record<ComponentKey, (props: any) => JSX.Element> = {
    ABOUT: AboutMeView,
    WORK: WorkView,
    CONTACT: ContactView,
    IMPRESSUM: Impressum,
  };

  const ActiveComponent = activeComponent ? components[activeComponent] : null;

  return (
    <Routes>
      <Route path="/impressum" element={<Impressum id="impressum" />} />
      <Route path="/case-study/api" element={<ApiCaseStudyView />} />
      {/* <Route path="/case-study/chat" element={<ChatCaseStudy />} /> */}
      <Route
        path="/"
        element={
          isWidthGreaterThan1050 && ActiveComponent ? (
            <ActiveComponent id={activeComponent.toLowerCase()} />
          ) : (
            <>
              <AboutMeView id="about" />
              <WorkView id="work" />
              <ContactView id="contact" />
            </>
          )
        }
      />
    </Routes>
  );
};

export default MainRoutes;
