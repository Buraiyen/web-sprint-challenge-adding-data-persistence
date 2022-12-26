// start your server here
const server = require('./api/server');
const port = 3000;

server.listen(port, () => {
  console.log(`
********************************\n
SERVER STARTED ON PORT ${port} \n
********************************`);
});
