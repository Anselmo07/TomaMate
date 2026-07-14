import Container from "../../components/common/Container";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileStats from "../../components/profile/ProfileStats";
import Heatmap from "../../components/heatmap/Heatmap";

export default function Profile() {
  return (
    <Container>

      <div className="mx-auto flex max-w-5xl flex-col gap-8">

        <ProfileHeader />

        <ProfileStats />

        <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="mb-6 text-xl font-bold">

            Contribuciones de Mate

          </h2>

          <Heatmap />

        </section>

      </div>

    </Container>
  );
}