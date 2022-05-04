import { Address, TypedMap } from '@graphprotocol/graph-ts';

import { getDirection } from './helpers';

export function getOverrides(): TypedMap<Address, boolean> {
  let overriddenTokens = new TypedMap<Address, boolean>();
  let direction = getDirection();

  // **** OVERRIDES START ****
  if (direction == 'mainnet-xdai') {
    overriddenTokens.set(
      // xdai OWL
      Address.fromString('0x0905Ab807F8FD040255F0cF8fa14756c1D824931'),
      true,
    );
    overriddenTokens.set(
      // mainnet OWL
      Address.fromString('0x1a5f9352af8af974bfc03399e3767df6370d82e4'),
      true,
    );
    overriddenTokens.set(
      // xdai MOON
      Address.fromString('0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A'),
      true,
    );
    overriddenTokens.set(
      // mainnet MOON
      Address.fromString('0xe1cA72ff3434B131765c62Cbcbc26060F7Aba03D'),
      true,
    );
    overriddenTokens.set(
      // xdai HNY
      Address.fromString('0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9'),
      true,
    );
    overriddenTokens.set(
      // mainnet HNY
      Address.fromString('0xc3589F56B6869824804A5EA29F2c9886Af1B0FcE'),
      true,
    );
    overriddenTokens.set(
      // xdai DATA
      Address.fromString('0x256eb8a51f382650B2A1e946b8811953640ee47D'),
      true,
    );
    overriddenTokens.set(
      // mainnet DATA
      Address.fromString('0x8f693ca8D21b157107184d29D398A8D082b38b76'),
      true,
    );
    overriddenTokens.set(
      // xdai XDATA
      Address.fromString('0xE4a2620edE1058D61BEe5F45F6414314fdf10548'),
      true,
    );
    overriddenTokens.set(
      // mainnet XDATA
      Address.fromString('0x0cf0ee63788a0849fe5297f3407f701e122cc023'),
      true,
    );
    overriddenTokens.set(
      // xdai AGVE
      Address.fromString('0x3a97704a1b25f08aa230ae53b352e2e72ef52843'),
      true,
    );
    overriddenTokens.set(
      // mainnet AGVE
      Address.fromString('0x0b006E475620Af076915257C6A9E40635AbdBBAd'),
      true,
    );
    overriddenTokens.set(
      // xdai SWASH
      Address.fromString('0x84e2c67cbefae6b5148fca7d02b341b12ff4b5bb'),
      true,
    );
    overriddenTokens.set(
      // mainnet SWASH
      Address.fromString('0xA130E3a33a4d84b04c3918c4E5762223Ae252F80'),
      true,
    );
    overriddenTokens.set(
      // xdai UDT
      Address.fromString('0x8C84142c4a716a16a89d0e61707164d6107A9811'),
      true,
    );
    overriddenTokens.set(
      // mainnet UDT
      Address.fromString('0x90de74265a416e1393a450752175aed98fe11517'),
      true,
    );
  } else if (direction == 'kovan-sokol') {
    overriddenTokens.set(
      // sokol DEMO2712
      Address.fromString('0xd846B096949E15b42ABCaEB82137c5a3495B1Ed4'),
      true,
    );
    overriddenTokens.set(
      // kovan DEMO2712
      Address.fromString('0xa4764045851F17AA60B6c8E8b62072Bea9538521'),
      true,
    );
  }
  // **** OVERRIDES END ****

  return overriddenTokens;
}

export function getMediatedTokens(): TypedMap<Address, Address> {
  let mediatedTokens = new TypedMap<Address, Address>();
  let direction = getDirection();

  // **** OVERRIDES START ****
  // if (direction == 'mainnet-xdai') {
  //   mediatedTokens.set(
  //     // xdai OWL
  //     Address.fromString('0xbeD794745e2a0543eE609795ade87A55Bbe935Ba'),
  //     Address.fromString('0x0905Ab807F8FD040255F0cF8fa14756c1D824931'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet OWL
  //     Address.fromString('0xed7e6720Ac8525Ac1AEee710f08789D02cD87ecB'),
  //     Address.fromString('0x1a5f9352af8af974bfc03399e3767df6370d82e4'),
  //   );
  //   mediatedTokens.set(
  //     // xdai MOON
  //     Address.fromString('0xF75C28fE07E0647B05160288F172ad27CccD8f30'),
  //     Address.fromString('0x1e16aa4Df73d29C029d94CeDa3e3114EC191E25A'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet MOON
  //     Address.fromString('0xE7228B4EBAD37Ba031a8b63473727f991e262dCd'),
  //     Address.fromString('0xe1cA72ff3434B131765c62Cbcbc26060F7Aba03D'),
  //   );
  //   mediatedTokens.set(
  //     // xdai HNY
  //     Address.fromString('0x0EeAcdb0Dd96588711581C5f3173dD55841b8e91'),
  //     Address.fromString('0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet HNY
  //     Address.fromString('0x81A4833B3A40E7c61eFE9D1a287343797993B1E8'),
  //     Address.fromString('0xc3589F56B6869824804A5EA29F2c9886Af1B0FcE'),
  //   );
  //   mediatedTokens.set(
  //     // xdai DATA
  //     Address.fromString('0x53f3F44c434494da73EC44a6E8a8D091332bC2ce'),
  //     Address.fromString('0x256eb8a51f382650B2A1e946b8811953640ee47D'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet DATA
  //     Address.fromString('0x29e572d45cC33D5a68DCc8f92bfc7ded0017Bc59'),
  //     Address.fromString('0x8f693ca8D21b157107184d29D398A8D082b38b76'),
  //   );
  //   mediatedTokens.set(
  //     // xdai XDATA
  //     Address.fromString('0x7d55f9981d4E10A193314E001b96f72FCc901e40'),
  //     Address.fromString('0xE4a2620edE1058D61BEe5F45F6414314fdf10548'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet XDATA
  //     Address.fromString('0x2eeeDdeECe91c9F4c5bA4C8E1d784A0234C6d015'),
  //     Address.fromString('0x0cf0ee63788a0849fe5297f3407f701e122cc023'),
  //   );
  //   mediatedTokens.set(
  //     // xdai AGVE
  //     Address.fromString('0xBE20F60339b06Db32C319d46cf3Bc9bAcC0694aB'),
  //     Address.fromString('0x3a97704a1b25f08aa230ae53b352e2e72ef52843'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet AGVE
  //     Address.fromString('0x5689C65cfe5E8BF1A5F836c956DeA1b3B8BE00Bb'),
  //     Address.fromString('0x0b006E475620Af076915257C6A9E40635AbdBBAd'),
  //   );
  //   mediatedTokens.set(
  //     // xdai SWASH
  //     Address.fromString('0x68a64df7458a8eb2677991e657508fe00205332d'),
  //     Address.fromString('0x84e2c67cbefae6b5148fca7d02b341b12ff4b5bb'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet SWASH
  //     Address.fromString('0xE964A36142BbE39751D0B4D6140fC0b8c48e68bE'),
  //     Address.fromString('0xA130E3a33a4d84b04c3918c4E5762223Ae252F80'),
  //   );
  //   mediatedTokens.set(
  //     // xdai UDT
  //     Address.fromString('0x5F0FE58709639A39c193521d919aFaef02E570F7'),
  //     Address.fromString('0x8C84142c4a716a16a89d0e61707164d6107A9811'),
  //   );
  //   mediatedTokens.set(
  //     // mainnet UDT
  //     Address.fromString('0x41a4ee2855A7Dc328524babB07d7f505B201133e'),
  //     Address.fromString('0x90de74265a416e1393a450752175aed98fe11517'),
  //   );
  // } else if (direction == 'kovan-sokol') {
  //   mediatedTokens.set(
  //     // sokol DEMO2712
  //     Address.fromString('0x2a5fc52d8A563B2F181c6A527D422e1592C9ecFa'),
  //     Address.fromString('0xd846B096949E15b42ABCaEB82137c5a3495B1Ed4'),
  //   );
  //   mediatedTokens.set(
  //     // kovan DEMO2712
  //     Address.fromString('0xA68Bd659A9167F3D3C01bA9776A1208dae8F003b'),
  //     Address.fromString('0xa4764045851F17AA60B6c8E8b62072Bea9538521'),
  //   );
  // }
  // **** OVERRIDES END ****

  //for decommerce and rinkeby
  mediatedTokens.set(
    Address.fromString('0xD26a5dF2F08d7B94481E2dA0D5453BBB6dfeE3A3'), 
    Address.fromString('0x81f20FD4459EAf89091f43F83923C65Ac0C36AEa')
  );
  mediatedTokens.set(
    Address.fromString('0x699402305bF0cE9b67A15eDdE3D4c2E45decC62C'), 
    Address.fromString('0x6bF4A0E6d4005eA12c31fbaD8dA5432116834767')
  )

  return mediatedTokens;
}
