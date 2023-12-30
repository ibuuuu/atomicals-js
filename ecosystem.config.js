module.exports = {
    apps : [{
      script : "./dist/cli.js",
      args: "mint-dft quark --satsbyte=100",
      instances: 1,
      out_file: "/dev/null",
      error_file: "/dev/null",
      env_production: {
         NODE_ENV: "production"
      },
      env_development: {
         NODE_ENV: "development"
      }
    }]
  }