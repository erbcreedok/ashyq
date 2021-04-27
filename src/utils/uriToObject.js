function uriToObject(search) {
  const result = {};
  const x = new URLSearchParams(search);
  x.forEach((value, key) => {
    result[key] = value;
  });
  return result;
}

export default uriToObject;
