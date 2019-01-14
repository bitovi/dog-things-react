import ndjsonStream from 'can-ndjson-stream';
import fetch from 'isomorphic-fetch';

const supportsStream = typeof global.ReadableStream !== 'undefined';
const ENDPOINT = 'http://206.189.197.112';

export async function getProducts(callback) {
  let res = await fetch(`${ENDPOINT}/product${supportsStream ? '' : '?json'}`);

  if(supportsStream) {
    let stream = ndjsonStream(res.body);
    let reader = stream.getReader();
  
    while (true) {
      const {done, value} = await reader.read();
      if (done) return;
      callback(value);
    }
  } else {
    let json = await res.json();
    return json;
  }
}
