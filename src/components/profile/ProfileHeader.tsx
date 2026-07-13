import Avatar from "./Avatar";

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-6">
      <Avatar
        src="https://i.pravatar.cc/200"
      />

      <div>
        <h1 className="text-3xl font-bold">
          Juan Pérez
        </h1>

        <p className="text-zinc-400">
          Fanático del mate.
        </p>
      </div>
    </div>
  );
}