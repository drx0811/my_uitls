Array.prototype.myReduce = (callback,initValue)=>{
  let resultValue = initValue===undefined?undefined:initValue;
  for (let i = 0; i < this.length; i++) {
    if (resultValue === undefined) {
      resultValue = this[i]
    }else {
      resultValue = callback(resultValue,this[i],i,this)
    }
  }
  return resultValue
}