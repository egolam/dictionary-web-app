export default async function getData(query) {
  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${
      !query ? "frontend" : query
    }`
  );

  if (!res.ok) {
    let content = await res.json();
    return { content, statusCode: 404 };
  }

  return res.json();
}
