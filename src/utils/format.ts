const covertDate = (date: string) => {
  const fixedDate = new Date(date);

  return fixedDate.toLocaleString('en', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: 'GMT',
  });
};

export default covertDate;
