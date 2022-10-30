import { Box, Button, Input, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from '../src/graphql/mutations'
import { listTodos } from '../src/graphql/queries'

export default function Home() {
  const [value, setValue] = useState('')
  const addTodo = async () => {
    try {
      await API.graphql(graphqlOperation(createTodo, {
        input: {
          name: value
        }
      }))
      setValue('')
    } catch (error) {
      console.log(error)
    }
  }

  (async () => {
    const todos = await API.graphql(graphqlOperation(listTodos))
    if ('data' in todos) {
      console.log(todos.data.listTodos.items)
    }
  })()

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
        <List>
          <ListItem >

          </ListItem>
        </List>
      </Box>
    </>
  )
}
