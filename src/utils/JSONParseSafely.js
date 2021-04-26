function JSONParseSafely(data, fallback) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return fallback;
  }
}

export default JSONParseSafely;
