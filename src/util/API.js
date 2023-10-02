export const API = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  }

  const res = await fetch(url, options)
  const data = await res.json()
  return data
}
