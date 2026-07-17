import "./Avatar.css";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  fallback?: string;
}

export default function Avatar({
  src,
  alt,
  size = 56,
  fallback = "?",
}: AvatarProps) {
  return (
    <div
      className="avatar"
      style={{
        width: size,
        height: size,
      }}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <span>{fallback.charAt(0).toUpperCase()}</span>
      )}
    </div>
  );
}