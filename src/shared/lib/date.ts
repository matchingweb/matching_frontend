const dateTimeFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const dateFormatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function formatDateTime(value: string | null) {
  if (!value) {
    return "일정 협의";
  }

  return dateTimeFormatter.format(new Date(value));
}

export function formatDate(value: string | null) {
  if (!value) {
    return "날짜 미정";
  }

  return dateFormatter.format(new Date(value));
}
