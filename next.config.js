module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/greet',
        destination: 'https://forms.gle/yzYL7T5easEfpgYM6',
        permanent: false
      }
    ];
  }
}
