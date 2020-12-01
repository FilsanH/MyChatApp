const api = {
  nasaPics() {
    const url =
      'https://api.nasa.gov/planetary/apod?api_key=a2Jufz0ZKl7j74UFQWNR54G3BRWxFah9OFDlCorg&date=2018-12-28'
    return fetch(url).then((res) => res.json())
  },
}

module.exports = api
