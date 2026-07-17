import "./WelcomeCard.css";

import Card from "../../../../components/ui/Card/Card";
import { useUser } from "../../../../context/useUser";

export default function WelcomeCard() {
  const { user } = useUser();

  return (
    <Card>
      <div className="welcome-card">
        <div className="welcome-card__avatar">
          {user.profile.avatar ? (
            <img
              src={user.profile.avatar}
              alt={user.profile.displayName}
            />
          ) : (
            <span>
              {user.profile.displayName.charAt(0).toUpperCase()}
            </span>
          )}
        </div>

        <div className="welcome-card__content">
          <span className="welcome-card__greeting">
            ¡Bienvenido!
          </span>

          <h2>{user.profile.displayName}</h2>

          <p>@{user.profile.username}</p>
        </div>

        <div className="welcome-card__level">
          <span>Nivel</span>
          <strong>{user.progress.level}</strong>
        </div>
      </div>

      <div className="welcome-card__xp">
        <div
          className="welcome-card__xp-fill"
          style={{
            width: `${Math.min((user.progress.xp % 100), 100)}%`,
          }}
        />
      </div>

      <div className="welcome-card__footer">
        <span>{user.progress.xp} XP</span>

        <span>{user.progress.coins} 🌿</span>
      </div>
    </Card>
  );
}