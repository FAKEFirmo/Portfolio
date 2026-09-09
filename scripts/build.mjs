// Vinext exits immediately after prerendering. Allow Windows libuv callbacks
// to settle before closing the process; preserve every original exit code.
if (process.platform === 'win32') {
  const exit = process.exit.bind(process);
  process.exit = (code = 0) => {
    setTimeout(() => exit(code), 250);
  };
}
process.argv = [process.argv[0], 'vinext', 'build'];
await import(new URL('./cli.js', import.meta.resolve('vinext')).href);
