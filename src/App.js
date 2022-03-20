import data from './data/MOCK_DATA.json'
import { useState } from 'react'

function App() {
  const [search, setSearch] = useState('')
  return (
    <form>
      <input
        list="names"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="searchbar"
      />

      <datalist id="names">
        {data
          .filter((name) => {
            if (search === '') {
              return name
            } else if (
              name.first_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return name
            }
          })
          .map((name, key) => (
            <option key={key} value={name.first_name} />
          ))}
      </datalist>
    </form>
  )
}

export default App
