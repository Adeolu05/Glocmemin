import { ministry } from "@/content/ministry";

export type HighlightItem = {
  eyebrow: string;
  title: string;
  time: string;
  detail: string;
  kind: "today" | "upcoming" | "monthly";
};

function isThirdThursday(date: Date) {
  if (date.getDay() !== 4) return false;
  return Math.ceil(date.getDate() / 7) === 3;
}

function isRevivalWindow(date: Date) {
  const day = date.getDate();
  return day >= 6 && day <= 8;
}

function sundayHighlights(date: Date): HighlightItem[] {
  const isFirstSunday = date.getDay() === 0 && date.getDate() <= 7;

  if (isFirstSunday) {
    const first = ministry.sunday.find(
      (item) => item.title === "First Sunday of the month",
    );
    if (first) {
      return [
        {
          eyebrow: "Today · First Sunday",
          title: first.title,
          time: first.time,
          detail: first.detail,
          kind: "today",
        },
      ];
    }
  }

  return ministry.sunday
    .filter((item) => item.title !== "First Sunday of the month")
    .map((item) => ({
      eyebrow: "Today · Sunday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today" as const,
    }));
}

function weekdayNamedProgram(date: Date): HighlightItem | null {
  const day = date.getDay();

  if (day === 1) {
    const item = ministry.weekly.find((entry) => entry.day === "Monday");
    if (!item) return null;
    return {
      eyebrow: "Today · Monday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today",
    };
  }

  if (day === 2) {
    const item = ministry.weekly.find((entry) => entry.day === "Tuesday");
    if (!item) return null;
    return {
      eyebrow: "Today · Tuesday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today",
    };
  }

  if (day === 3) {
    const item = ministry.weekly.find((entry) => entry.day === "Wednesday");
    if (!item) return null;
    return {
      eyebrow: "Today · Wednesday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today",
    };
  }

  if (isThirdThursday(date)) {
    const item = ministry.weekly.find((entry) =>
      entry.day.startsWith("Every third Thursday"),
    );
    if (!item) return null;
    return {
      eyebrow: "Today · 3rd Thursday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today",
    };
  }

  if (day === 6) {
    const item = ministry.weekly.find((entry) => entry.day === "Saturday");
    if (!item) return null;
    return {
      eyebrow: "Today · Saturday",
      title: item.title,
      time: item.time,
      detail: item.detail,
      kind: "today",
    };
  }

  return null;
}

function nextNamedProgram(date: Date): HighlightItem {
  for (let offset = 1; offset <= 7; offset += 1) {
    const candidate = new Date(date);
    candidate.setDate(date.getDate() + offset);
    const weekday = candidate.getDay();

    if (weekday === 0) {
      return {
        eyebrow: "Upcoming · Sunday",
        title: ministry.sunday[0].title,
        time: ministry.sunday[0].time,
        detail: ministry.sunday[0].detail,
        kind: "upcoming",
      };
    }

    if (weekday === 1) {
      const item = ministry.weekly.find((entry) => entry.day === "Monday");
      if (item) {
        return {
          eyebrow: "Upcoming · Monday",
          title: item.title,
          time: item.time,
          detail: item.detail,
          kind: "upcoming",
        };
      }
    }

    if (weekday === 2) {
      const item = ministry.weekly.find((entry) => entry.day === "Tuesday");
      if (item) {
        return {
          eyebrow: "Upcoming · Tuesday",
          title: item.title,
          time: item.time,
          detail: item.detail,
          kind: "upcoming",
        };
      }
    }

    if (weekday === 3) {
      const item = ministry.weekly.find((entry) => entry.day === "Wednesday");
      if (item) {
        return {
          eyebrow: "Upcoming · Wednesday",
          title: item.title,
          time: item.time,
          detail: item.detail,
          kind: "upcoming",
        };
      }
    }

    if (weekday === 4 && isThirdThursday(candidate)) {
      const item = ministry.weekly.find((entry) =>
        entry.day.startsWith("Every third Thursday"),
      );
      if (item) {
        return {
          eyebrow: "Upcoming · 3rd Thursday",
          title: item.title,
          time: item.time,
          detail: item.detail,
          kind: "upcoming",
        };
      }
    }

    if (weekday === 6) {
      const item = ministry.weekly.find((entry) => entry.day === "Saturday");
      if (item) {
        return {
          eyebrow: "Upcoming · Saturday",
          title: item.title,
          time: item.time,
          detail: item.detail,
          kind: "upcoming",
        };
      }
    }
  }

  return {
    eyebrow: "Upcoming · Sunday",
    title: ministry.sunday[0].title,
    time: ministry.sunday[0].time,
    detail: ministry.sunday[0].detail,
    kind: "upcoming",
  };
}

export function getScheduleHighlights(now = new Date()) {
  const highlights: HighlightItem[] = [];

  if (isRevivalWindow(now)) {
    highlights.push({
      eyebrow: "This month · Revival",
      title: ministry.monthly.title,
      time: `${ministry.monthly.dates} · ${ministry.monthly.time}`,
      detail: ministry.monthly.detail,
      kind: "monthly",
    });
  }

  if (now.getDay() === 0) {
    highlights.push(...sundayHighlights(now));
  } else {
    const today = weekdayNamedProgram(now);
    if (today) highlights.push(today);

    const daily = ministry.weekly.find((entry) =>
      entry.day.startsWith("Monday to Friday"),
    );
    if (daily && now.getDay() >= 1 && now.getDay() <= 5 && now.getDay() !== 4) {
      highlights.push({
        eyebrow: "Today · Daily Prayer",
        title: daily.title,
        time: daily.time,
        detail: daily.detail,
        kind: "today",
      });
    }
  }

  if (
    !highlights.some((item) => item.kind === "today" || item.kind === "monthly")
  ) {
    highlights.push(nextNamedProgram(now));
  } else if (!highlights.some((item) => item.kind === "upcoming")) {
    highlights.push(nextNamedProgram(now));
  }

  if (!isRevivalWindow(now)) {
    highlights.push({
      eyebrow: "Monthly Revival",
      title: ministry.monthly.title,
      time: `${ministry.monthly.dates} · ${ministry.monthly.time}`,
      detail: ministry.monthly.detail,
      kind: "monthly",
    });
  }

  return highlights.slice(0, 3);
}
