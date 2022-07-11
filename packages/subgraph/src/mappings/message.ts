
function strip0x(input : string) : string {
  // return input.replace(/^0x/, '');
  return input.slice(2);
}

export class MessageDetails {
  recipient: string;
  amount: string;
  txHash: string;
  contractAddress: string;
}

export function parseMessage(message: string) : MessageDetails {
  message = strip0x(message);

  const recipientStart = 0;
  const recipientLength = 40;
  // const recipient : string = `0x${message.slice(
  //   recipientStart,
  //   recipientStart + recipientLength,
  // )}`;
  let recipient = '0x' + message.slice(recipientStart, recipientStart + recipientLength);

  const amountStart = recipientStart + recipientLength;
  const amountLength = 32 * 2;
  // const amount = `0x${message.slice(amountStart, amountStart + amountLength)}`;
  let amount = '0x' + message.slice(amountStart, amountStart + amountLength);

  const txHashStart = amountStart + amountLength;
  const txHashLength = 32 * 2;
  // const txHash = `0x${message.slice(txHashStart, txHashStart + txHashLength)}`;
  let txHash = '0x' + message.slice(txHashStart, txHashLength + txHashStart);

  const contractAddressStart = txHashStart + txHashLength;
  const contractAddressLength = 32 * 2;
  // let contractAddress = `0x${message.slice(
  //   contractAddressStart,
  //   contractAddressStart + contractAddressLength,
  // )}`;
  let contractAddress = '0x' + message.slice(contractAddressStart, contractAddressStart + contractAddressLength);

  return {
    recipient,
    amount,
    txHash,
    contractAddress,
  };
}
