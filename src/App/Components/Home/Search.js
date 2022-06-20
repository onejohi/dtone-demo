import { useState, useEffect } from 'react';
import useDebounce from '../../../Hooks/useDebounce';
import axios from 'axios';

function Search() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [schools, setSchools ] = useState([]);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    async function fetchSchools () {
      setLoading(true);
      axios
        .get(`http://universities.hipolabs.com/search?name=${debouncedSearch}`)
        .then((res) => {
          console.log({ res });
        })
      const data = await fetch(`http://universities.hipolabs.com/search?name=${debouncedSearch}`, {
        mode: 'cors',
        credentials: 'omit',
        referrerPolicy: 'unsafe-url',
        referrer: 'https://dtone-demo.herokuapp.com/',
      })
        .then((res) => res.json());
      setSchools(data);
      setLoading(false);
    }

    if (debouncedSearch) fetchSchools();

  }, [debouncedSearch]);

  function handleSetSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className='row'>
      <div className='col-md-4'></div>
      <div className='col-md-4'>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
          <input
            type="search"
            className="form-control"
            onChange={handleSetSearch}
            placeholder="Search..."
            aria-label="Search" />
        </form>
        {
          loading ? (
            <div className="d-flex justify-content-center mt-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            schools.length ? (
              <div class="list-group mt-3">
              { schools.map((school, index) => {
                return (
                  <button key={index} type="button" class="list-group-item list-group-item-action">
                    {school.name}
                  </button>
                )
              })}
              </div>
            ) : (
              <div className='mt-5 text-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                </svg>
                <p>No match found.</p>
              </div>

            )
          )
        }
      </div>
      <div className='col-md-4'></div>
    </div> 
  )
}

export default Search;