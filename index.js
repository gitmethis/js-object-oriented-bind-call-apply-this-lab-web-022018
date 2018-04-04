function justInvoke(fn){
   return fn()
}

function setThiswithCall(fn, thisValue, arg){
   fn.call(thisValue, arg)
}