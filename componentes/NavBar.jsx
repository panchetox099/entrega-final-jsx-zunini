import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Button, VStack, StackDivider } from '@chakra-ui/react'




const NavBar = ({ onCatalogClick }) => {
    return (
      <Flex align="center" justify="space-between" p="4" bg="blue.500">
        <h1>Nullaby</h1>
        <Button colorScheme="blue" onClick={onCatalogClick}>
          Catálogo
        </Button>
      </Flex>
    );
  };
  
  export default NavBar;
