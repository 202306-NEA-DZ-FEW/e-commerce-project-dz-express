export const API = async (url) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      // Authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzk2ZTc3MzNmMTVjNGNhNTE4M2FiNTEwYzlmODcwNyIsInN1YiI6IjY1MDQzNDA0ZDdkY2QyMDBmZmVkYWRiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nVcvJmqjZAoZOwnJTtYUpIN_5qohNPFWJyFjqJu2dE0",
    },
  }

  const res = await fetch(url, options)
  const data = await res.json()
  console.log("data", data)
  return data
}
