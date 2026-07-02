import Child from "./components/Child"

function App() {

  return (
    <>
      <Child isLoggedIn={true} name="Alice" />
      <Child isLoggedIn={false} name="Bob" />
      <Child isLoggedIn={true} />
    </>
  )
}

export default App
