import { Box, Button, Input } from "@chakra-ui/react";
import { useState } from "react";


export default function Home() {
  const [value, setValue] = useState('')
  const addTodo = () => console.log(value)

  return (
    <>
      <Box m={10}>
        <Input
          placeholder="Todo"
          htmlSize={15}
          width='auto'
          variant='outline'
          mr={5}
          border='1px'
          borderColor='black'
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Button colorScheme='blue' onClick={addTodo}>追加</Button>
      </Box>
    </>
  )
}
