export default function({ $axios }) {
  $axios.onRequest(config => {
    process.env.NEWS_API_KEY;
  })
}
