import { hours } from "@/data/site";

export function OpeningHours() {
  return (
    <dl className="grid gap-3">
      {hours.map(([day, time]) => (
        <div className="flex justify-between gap-4 border-b border-border pb-3" key={day}>
          <dt className="font-bold text-espresso">{day}</dt>
          <dd className="text-coffee">{time}</dd>
        </div>
      ))}
    </dl>
  );
}
