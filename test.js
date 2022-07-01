const { verifyMessage } = require("./dist/main");

const address = "RS4EYELZhxMtDAuyrQimVrcSnaeaLCXeo6";
const message = "Hello world";
const signature =
  "H2zo48+tI/KT9eJrHt7PLiEBMaRn1A1Eh49IFu0MbfhAFBxVc0FG2UE5E79PCbhd9KexijsQxYvNM6AsVn9EAEo=";

test("Verify valid message signature", () => {
  const result = verifyMessage(message, address, signature);

  expect(result).toBe(true);
});

test("Verify unvalid message signature", () => {
  const result = verifyMessage(
    message + " change the message",
    address,
    signature
  );
  expect(result).toBe(false);
});
