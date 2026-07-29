import Container from "../../../components/layout/Container/Container";
import MainLayout from "../../../components/layout/MainLayout/MainLayout";
import DailyQuestion from "./DailyQuestion";
import DashboardHeader from "./DashboardHeader";
import HeatmapCard from "./HeatmapCard";
import QuickStats from "./QuickStats";
import ThermosCard from "./ThermosCard/ThermosCard";


export default function Dashboard() {
    return (
        <MainLayout>

            <Container>
                <DashboardHeader />

                <DailyQuestion />

                <QuickStats />

                <HeatmapCard />

                <ThermosCard />

               {/*  <RecentUnlocks /> */}

            </Container>

        </MainLayout>
    );
}