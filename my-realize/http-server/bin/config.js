const config = {
  port: {
    option: '-p --port <val>',
    description: "set your port",
    usage: "drx --port 3000"
  },
  directory: {
    option: "-d --directory <val>",
    description: "set your start directory"
  },
  host: {
    option: "-h --host <val>",
    description: "set your hostname"
  }
};
module.exports = config;
