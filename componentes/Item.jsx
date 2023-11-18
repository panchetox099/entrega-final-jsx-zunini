
import React from 'react'
import { Card, CardBody, Stack, Heading, Text, Divider, CardFooter, Button, ButtonGroup } from '@chakra-ui/react'


const Item = ({ name, price, onBuyClick, onAddToCartClick }) => {
    return (
      <div>
        <Card maxW='sm'>
          <CardBody>
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{name}</Heading>
              <Text>{name} Remera tipo OverSize</Text>
              <Text color='blue.600' fontSize='2xl'>${price}</Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
              <Button variant='solid' colorScheme='blue' onClick={() => onBuyClick(name)}>
                Comprar
              </Button>
              <Button variant='ghost' colorScheme='blue' onClick={() => onAddToCartClick(name)}>
                Añadir al carrito
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  export default Item;

