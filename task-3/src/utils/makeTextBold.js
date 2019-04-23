export const boldStringByMatch = (value, find) => {
  const re = new RegExp(find, 'gi');

  console.log(value.replace(re, '<b>' + find + '</b>'));
  return { __html: value.replace(re, '<b>' + find + '</b>') };
};
