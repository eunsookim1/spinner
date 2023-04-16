const spinner = ['\r|  ', '\r/   ', '\r-  ', '\r\\  ', '\r|   \n'];
let delay = 0;
for (const spin of spinner) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, delay);
  delay += 200;
}