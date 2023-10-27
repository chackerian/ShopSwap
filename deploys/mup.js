module.exports = {
  servers: {
    one: {
      host: '',
      username: 'ubuntu',
      pem: ''
    }
  },

  meteor: {
    name: 'app',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: 'http://shopswap.io',
      MONGO_URL: 'mongodb://localhost/meteor',
      DISABLE_WEBSOCKETS: 1,
    },

    docker: {
      image: 'abernix/meteord:node-8.4.0-base'
    },

    deployCheckWaitTime: 60,

    enableUploadProgressBar: true
  },

  mongo: {
    port: 27017,
    version: '3.4.1',
    servers: {
      one: {}
    }
  }
};
