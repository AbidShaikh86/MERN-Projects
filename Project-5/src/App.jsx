import Card from './component/Card';
import './App.css'
import useFetch from './apiFetch/useFetch'

function App() {
  const url = 'https://api.escuelajs.co/api/v1/products';
  const {data, load, err} = useFetch(url);

  if(load) return <div className="page"><div className="header"><h1>Items List</h1></div><div className="display"><h2>loading data</h2></div></div>
  if(err) return <div className="page"><div className="header"><h1>Items List</h1></div><div className="display"><h2>{err}</h2></div></div>

  return (
    <div className="page">
      <div className="header"><h1>Items List</h1></div>
      <div className="items">
        {data.map((item)=> (
          <Card key={item.id} title={item.title} description={item.description} price={item.price}/>
        ))}
      </div>
    </div>
  )
}

export default App
