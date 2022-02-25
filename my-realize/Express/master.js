const cluster =require('cluster');
console.log(cluster + "is runing" +process.pid)
process.on('SIGHUP',function () {
  let newCluster = cluster.fork();
  newCluster.once('listening',function () {
    for (let id in cluster.workers){
      if (id === newCluster.id.toString()) {
        continue
      }
      cluster.workers[id].kill('SIGTERM')
    }
  })
})

