export const formatEpochDateTime = (epochTimestamp) => {
  const date = new Date(epochTimestamp * 1000);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();
  return `${formattedDate} ${formattedTime}`;
};