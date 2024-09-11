module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/greet',
        destination: 'https://www.instagram.com/skyrats_drones/',
        permanent: false
      },
      {
        source: '/pilot/vilas',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=0#gid=0',
        permanent: false
      },
      {
        source: '/pilot/beserra',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=653802211#gid=653802211',
        permanent: false
      },
      {
        source: '/pilot/cassim',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=839429704#gid=839429704',
        permanent: false
      },
      {
        source: '/pilot/marcos',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=1166893714#gid=1166893714',
        permanent: false
      }
    ];
  }
}
