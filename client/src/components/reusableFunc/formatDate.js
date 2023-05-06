export function formatDate(dateStr) {
  const date = new Date(dateStr);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString().replace(/:\d+ /, " ");
  return `${formattedDate} ${formattedTime}`;
}
