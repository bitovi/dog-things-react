import ndjsonStream from 'can-ndjson-stream';

const ENDPOINT = 'http://206.189.197.112';

export async function getProducts(callback) {
  let res = await fetch(`${ENDPOINT}/product`);
  let stream = ndjsonStream(res.body);
  let reader = stream.getReader();

  while (true) {
    const {done, value} = await reader.read();
    if (done) return;
    callback(value);
  }
}
