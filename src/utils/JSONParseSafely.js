function JSONParseSafely(data, fallback) {
  try {
    return JSON.parse(data) || fallback;
  } catch (e) {
    return fallback;
  }
}

export default JSONParseSafely;
