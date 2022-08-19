import { HomepageContainer } from 'components/atoms/HomepageContainer/HomepageContainer';
import { Header } from 'components/organims/Header/Header';
import { ScheduleMenu } from 'components/organims/ScheduleMenu/ScheduleMenu';

export function HomepageTemplate() {
    return (
        <div className="homepage-template">
            <Header />
            <HomepageContainer>
                <ScheduleMenu />
            </HomepageContainer>
        </div>
    );
}
