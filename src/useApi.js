
export const getData = async () => {
  const response = await fetch("http://localhost:5000/api");
  const data = await response.json();
  console.log(data)
  return data;
};

// (async () => {
//   await getData();
//   console.log(dataGlobal);
// })();

