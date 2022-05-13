import {
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Logo from 'assets/logo.svg';
import { BridgeDropdown } from 'components/common/BridgeDropdown';
import { UpdateSettings } from 'components/common/UpdateSettings';
import { WalletSelector } from 'components/common/WalletSelector';
import { useBridgeContext } from 'contexts/BridgeContext';
import { useWeb3Context } from 'contexts/Web3Context';
import { HistoryIcon } from 'icons/HistoryIcon';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const HistoryLink = ({ close }) => {
  const { push } = useHistory();

  return (
    <Button
      variant="ghost"
      color="grey"
      _hover={{ color: 'blue.500', bgColor: 'blackAlpha.100' }}
      onClick={() => {
        push('/history');
        close();
      }}
      leftIcon={<HistoryIcon />}
      px={2}
      fontSize="sm"
    >
      <Text color="black"> History</Text>
    </Button>
  );
};

export const Header = () => {
  const { isConnected } = useWeb3Context();
  const { loading } = useBridgeContext();
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(open => !open);
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      justify="space-between"
      position={{ base: isOpen ? 'fixed' : 'relative', md: 'relative' }}
      top={isOpen ? 0 : undefined}
      left={isOpen ? 0 : undefined}
      align={{ base: 'stretch', md: 'center' }}
      maxW="75rem"
      minH={20}
      px={{ base: 4, sm: 8, md: 4, lg: 8 }}
      w="100%"
      background={isOpen ? { base: 'white', md: 'transparent' } : 'transparent'}
      direction={{ base: 'column', md: 'row' }}
      mb={isOpen ? { base: 4, md: 0 } : 0}
      boxShadow={
        isOpen ? { base: '0 0.5rem 1rem #CADAEF', md: 'none' } : 'none'
      }
      h={isOpen && isSmallScreen ? '100%' : undefined}
      zIndex={isOpen ? 5 : undefined}
    >
      <Flex justify="space-between" h={20} align="center">
        <Link to="/">
          <Flex justify="space-around" align="center">
            <Image src={Logo} mr={4} />
            <Text fontWeight="bold">OmniBridge</Text>
          </Flex>
        </Link>
      </Flex>
      <WalletSelector close={() => setOpen(false)} />
      <BridgeDropdown close={() => setOpen(false)} />
     
    </Flex>
  );
};
