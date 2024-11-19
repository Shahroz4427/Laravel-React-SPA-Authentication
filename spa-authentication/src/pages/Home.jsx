
import { useEffect, useState } from 'react';
import Layout from '../Layout';
import { axios } from '../lib/axios';

const Home = () => {

  const [user, setUser] = useState({
    id: null,
    name: null,
    email: null,
  });


  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get('/api/user');
        if (response.status === 200) {
          const { id, name, email } = response.data;
          setUser({ ...user, id: id, email: email, name: name });
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [])

  return (
    <Layout>
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
    </Layout>
  )
}

export default Home