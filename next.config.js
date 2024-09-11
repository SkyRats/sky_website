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
        source: '/pilot/outdoor/0',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=1166893714#gid=1166893714',
        permanent: false
      },
      {
        source: '/pilot/outdoor/1',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=315769465#gid=315769465',
        permanent: false
      },
      {
        source: '/pilot/indoor/0',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=839429704#gid=839429704',
        permanent: false
      },
      {
        source: '/pilot/indoor/1',
        destination: 'https://docs.google.com/spreadsheets/d/1hUbA3VqjouE7MHPKiWJByQ7fNmMT3xUGOw4txx6Tbew/edit?gid=653802211#gid=653802211',
        permanent: false
      }
    ];
  }
}
