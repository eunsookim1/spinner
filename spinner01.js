setTimeout(() => {
  process.stdout.write('\r| ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/ ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r- ');
}, 500);

setTimeout(() => {
  // Need to escape the backlash since it's a special character.
  process.stdout.write('\r\\  ');
}, 700);

setTimeout(() => {
  process.dout.write('\r| ');
}, 1000);

