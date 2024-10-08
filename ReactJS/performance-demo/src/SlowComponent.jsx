// Note : This Component is slow to render.

const waitingForSomething = (ms) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) {
    now = Date.now();
  }
};

export default function SlowComponent({ time, custom, x }) {
  waitingForSomething(time[0]);
  custom();
  return <>hello {x}!</>;
}
