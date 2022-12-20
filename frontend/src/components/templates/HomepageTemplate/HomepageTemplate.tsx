import { Header } from 'components/organims/Header/Header';
import { ScheduleMenu } from 'components/organims/ScheduleMenu/ScheduleMenu';
import { UserRatingSection } from 'components/organims/UserRatingSection/UserRatingSection';
import { WelcomeSection } from 'components/organims/WelcomeSection/WelcomeSection';
import './styles.css';

export function HomepageTemplate() {
    return (
        <div className="homepage-template">
            <Header />
            <main className="main-homepage-container">
                <ScheduleMenu />
                <WelcomeSection />
                <UserRatingSection />
            </main>
        </div>
    );
}
