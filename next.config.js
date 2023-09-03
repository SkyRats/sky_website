module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/greet',
        destination: 'https://www.instagram.com/skyrats_drones/',
        permanent: false
      }
    ];
  }
}
