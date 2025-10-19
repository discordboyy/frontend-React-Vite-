export async function fetchRate(from, to) {
  const response = await fetch(`http://localhost:5000/api/rate?from=${from}&to=${to}`);
  if (!response.ok) throw new Error("Failed to fetch exchange rate");
  return response.json();
}
