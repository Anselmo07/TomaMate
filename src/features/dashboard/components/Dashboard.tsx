import Container from "../../../components/layout/Container/Container";
import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import DailyQuestion from "./DailyQuestion";
import DashboardHeader from "./DashboardHeader";


export default function Dashboard() {
    return (
        <MainLayout>

            <Container>
                <DashboardHeader />

                {/* <QuickStats />

                <DailyQuestion />

                <HeatmapCard />

                <ThermosCard />

                <RecentUnlocks /> */}

            </Container>

        </MainLayout>
    );
}