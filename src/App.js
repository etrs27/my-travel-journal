import './App.css';
import data from './Data';
import Header from './components/Header';
import Entries from './components/Entries';
import Footer from './components/Footer';


function App() {
  const entries = data.map(items => {
    return (
      <Entries
        key={items.id}
        item={items}
      />
    )
  })

  return (
    <div className="app">
      <Header />
      <main className="main--container">
        {entries}
      </main>
      <Footer />
    </div>
  )
}

export default App;