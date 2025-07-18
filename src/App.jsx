import ProductSidebar from "./components/ProductSidebar.jsx";
import NewProject from "./components/NewProject.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProductSidebar className="my-8 text-center text-5xl font-bold"/>
        <NewProject/>
    </main>
  );
}

export default App;
