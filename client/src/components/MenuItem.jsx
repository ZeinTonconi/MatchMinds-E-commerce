import { useState, useEffect } from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function MenuItem({ item, onPress }) {
  return (
    <Card key={item.id} shadow="sm" isPressable onPress={onPress}>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg" // Adjust for rounded corners
          width="100%"
          alt={item.name}
          className="w-full object-cover h-[140px]"
          src={item.image}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{item.name}</b>
        <p className="text-default-500">{item.price}</p>
      </CardFooter>
    </Card>
  );
}

export default MenuItem;
