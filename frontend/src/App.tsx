import Header from "./components/Header";
import NotificationButton from "./components/NotificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <SalesCard />
      <main>
        <section id="sales">
          <div className="dsmeta-container"></div>
        </section>
      </main>
    </>
  );
}

export default App;
