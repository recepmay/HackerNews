export function formatTimestamp(timestamp: any): any {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date(timestamp * 1000);
  return date.getDate() + ' ' + months[date.getMonth()].substring(0, 3) + ', ' + date.getFullYear();
}
