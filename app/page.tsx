import { LandingPageWrapper } from './components/LandingPageWrapper';
import { PageViewTracker } from './components/PageViewTracker';

export default function HomePage() {
  return (
    <>
      <PageViewTracker pageName="Landing Page" pageCategory="landing" />
      <LandingPageWrapper />
    </>
  );
}
