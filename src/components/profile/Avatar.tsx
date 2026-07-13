interface Props {
  src: string;
  size?: number;
}

export default function Avatar({
  src,
  size = 120,
}: Props) {
  return (
    <img
      src={src}
      alt="Avatar"
      style={{
        width: size,
        height: size,
      }}
      className="rounded-full border-2 border-sky-500 object-cover"
    />
  );
}