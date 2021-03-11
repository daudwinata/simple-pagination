import { useState, useEffect } from 'react';
import Users from './components/users';
import Pagination from './components/Pagination';
import axios from 'axios';
import { USER_PER_PAGE } from './utils/constants';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://randomuser.me/api/?page=1&results=80&nat=us');
      setLoading(false);
      setUsers(res.data.results);

      setTotalPages(Math.ceil(res.data.results.length / USER_PER_PAGE))
    };
    fetchUsers();
  }, []);

  const handleClick = num => {
    setPage(num);
  }

  return (
    <div>
      <div className='section-title'>
        <h1>Pagination demo</h1>
      </div>

      <section className='followers'>
        <p>Page {page}</p>
        <div className='container'>
          {loading ? <p>Loading...</p> : <>
            <Users users={users} page={page} />
          </>
          }
        </div>
        <Pagination totalPages={totalPages} handleClick={handleClick} />
      </section>
    </div>

  )
}

export default App