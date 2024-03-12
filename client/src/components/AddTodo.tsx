import { useForm } from "@mantine/form";
import { Modal, Button, Group, TextInput, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function AddTodo() {
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: "",
      body: "",
    },
  });

  function createTodo() {}

  return (
    <>
      <Modal opened={opened} onClose={close} centered title="Create todo">
        <form onSubmit={form.onSubmit(createTodo)}>
          <TextInput
            required
            mb={12}
            label="Todo"
            placeholder="What do you want to do?"
            {...form.getInputProps("title")}
          />
          <Textarea
            required
            mb={12}
            label="Body"
            placeholder="Tell me more..."
            {...form.getInputProps("body")}
          />
          <Button type="submit">Create todo</Button>
        </form>
      </Modal>

      <Group align="center">
        <Button type="submit" fullWidth mb={12} onClick={open}>
          ADD TODO
        </Button>
      </Group>
    </>
  );
}
export default AddTodo;
