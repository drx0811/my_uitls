
async function getData(type){
  return new Promise((resolve,reject)=>{
    if(type === 1){
      resolve([1])
    }else{
      reject(new Error('给的不是1'))
    }
  })
}
function addTryCatch(promise){
  return promise
          .then(data=>[null,data])
          .catch(err=>{
            return [err]
          })
}
async function main(){
  const [err,res] = await addTryCatch(getData(12));
  if(err){
    console.log(err);
  }
}
main()




