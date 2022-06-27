import bitcoinMessage from "bitcoinjs-message";
const MESSAGE_PREFIX = "\x16Raven Signed Message:\n";

export function sign(message: string, privateKey: any, compressed = true) {
  const signature = bitcoinMessage.sign(
    message,
    privateKey,
    compressed,
    MESSAGE_PREFIX
  );

  return signature;
}
export function verifyMessage(
  message: string,
  address: string,
  signature: string
) {
  const m = Buffer.from(message).toString("ascii");
  const result = bitcoinMessage.verify(m, address, signature, MESSAGE_PREFIX);
  return result;
}
