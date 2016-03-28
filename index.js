
var spawn = require('child_process').spawn;

var runSc = function (whichBin, then) {
  var s = spawn(whichBin, ['/?'], {stdio: 'pipe'});
  var itMustEnd = setTimeout(function () {
    s.kill();
  }, 1500)
  s.on('close', function (code) {
    s.stdout.close();
    s.stderr.close();
    s.stdin.close();
    clearTimeout(itMustEnd);
    then && then(code);
  });
  s.on('error', function(){/*void*/});
  /*
  It is super dirty because of weird behaviors of child_process.spawn('sc')
the super stupid stuff. sc /? command will throw an interactive question at the end such:
Would you like to see help for the QUERY and QUERYEX commands? [ y | n ]:
Under normal terms, i would use stdin to write 'n\n' and thus let the program wuit normally,
but that wont work, so trick trick trick trick !
  */
  s.stdout.on('data', function (data) {
    if (data.toString().match(/SC is a command line program/)) {
      then(0);
      then = null;
      s.kill();
      clearTimeout(itMustEnd);
    }
  });
}
function hasSc(then) {
  if (!process.platform.match(/win/)) return then('not windows');
  runSc('sc', function (code) {
    if (code>0) return runSc('C:\\Windows\\System32\\sc.exe', function (code) {
      if (code>0) then ('not found')
      else then (undefined, 'C:\\Windows\\System32\\sc.exe')
    })
    then (undefined, 'sc')
  })
}
module.exports = hasSc;
