export const getPost = async (url: string, cache: boolean = false) => {
  if (!cache) {
    const resp = await fetch(url);
    return resp.json();
  }
  const resp = await fetch(url, {
    next: { revalidate: 60 },
  });

  return resp.json();
};
