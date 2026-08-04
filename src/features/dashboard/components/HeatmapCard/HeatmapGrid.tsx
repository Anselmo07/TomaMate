import { motion } from "framer-motion";

import type { HeatmapWeek } from "../../../../types/heatmap";

interface Props {
  weeks: HeatmapWeek[];
}

const weekDays = [
  "",
  "Lun",
  "",
  "Mié",
  "",
  "Vie",
  "",
];

export default function HeatmapGrid({
  weeks,
}: Props) {
  return (
    <div className="heatmap">

      {/* Meses */}

      <div className="heatmap__months">

        <div className="heatmap__days-space" />

        <div className="heatmap__months-row">

          {weeks.map((week) => {

            return (
              <div
                key={week.days[0].date}
                className="heatmap__month"
                >
                {week.month && (
                    <span>{week.month}</span>
                )}
                </div>
            );

          })}

        </div>

      </div>

      {/* Heatmap */}

      <div className="heatmap__content">

        {/* Días */}

        <div className="heatmap__days">

          {weekDays.map((day) => (
            <span key={day}>
              {day}
            </span>
          ))}

        </div>

        {/* Semanas */}

        <div className="heatmap__weeks">

          {weeks.map((week, weekIndex) => (

            <div
              key={weekIndex}
              className="heatmap__week"
            >

              {week.days.map((day) => (

                <motion.div
                  key={day.date}
                  className={`heatmap-cell level-${day.value}`}
                  whileHover={{
                    scale: 1.35,
                  }}
                  title={`${day.date} • ${day.thermos} termo(s)`}
                />

              ))}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}