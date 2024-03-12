import { MantineProvider } from "@mantine/core";
import useSWR from "swr";
import "./App.css";
import AddTodo from "./components/AddTodo";
import "@mantine/core/styles.css";

export const ENDPOINT = "http://localhost:4000";

const fetcher = (url: string) =>
  fetch(`${ENDPOINT}/${url}`).then((r) => r.json());

function App() {
  const { data } = useSWR("api/todos", fetcher);
  return (
    <MantineProvider>
      {JSON.stringify(data)}
      <AddTodo />
    </MantineProvider>
  );
}

export default App;
