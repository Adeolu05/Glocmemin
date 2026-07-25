type ScheduleRowProps = {
  label: string;
  title: string;
  detail?: string;
  time: string;
  bordered?: boolean;
};

export function ScheduleRow({
  label,
  title,
  detail,
  time,
  bordered = true,
}: ScheduleRowProps) {
  return (
    <div className={`schedule-row ${bordered ? "schedule-row--bordered" : ""}`}>
      <p className="schedule-row__label">{label}</p>
      <div className="schedule-row__body">
        <h3 className="display schedule-row__title">{title}</h3>
        {detail ? <p className="schedule-row__detail">{detail}</p> : null}
      </div>
      <p className="schedule-row__time">{time}</p>
    </div>
  );
}
