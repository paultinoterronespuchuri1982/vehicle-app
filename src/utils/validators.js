export const isPlateValid = (plate) => {
  if (!plate) return false;
  const cleaned = plate.trim().toUpperCase();
  // regla simple: letras, números y guion, 4-10 chars
  return /^[A-Z0-9-]{4,10}$/.test(cleaned);
};

export const isYearValid = (year) => {
  const n = Number(year);
  const current = new Date().getFullYear();
  return Number.isInteger(n) && n > 1900 && n <= current + 1;
};
