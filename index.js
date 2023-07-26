// code your solution here
before(function(done) {
  server = require('../app')
  try {
    server.listen(process.env.PORT)
    done()
    // server.initialize()
    //   .then(() => {
    //     console.info('listening on', process.env.PORT)
    //     server.listen(process.env.PORT, done)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     done(err)
    //   })
  } catch (err) {
    console.log('outer error', err)
    done(err)
  }
})
function saturdayFun(activity='roller-skate'){
    return `This Saturday, I want to ${activity}!`;
    
}
console.log(saturdayFun("bathe my dog"));
function mondayWork(decision="go to the office"){
    return`This Monday, I will ${decision}.`;
    
}
console.log(mondayWork("work from home."));
number =100
function wrapAdjective() {
    const innerFunction = function (msg1,msg2){
      return ("You are *a hard worker*!");
    };
    return innerFunction;
  }
wrapAdjective();