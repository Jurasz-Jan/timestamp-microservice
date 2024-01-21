import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowAntique = () => {
  const [antique, setAntique] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5500/store/${id}`)
      .then((response) => {
        setAntique(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Antique</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{antique._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Name</span>
            <span>{antique.itemName}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Origin</span>
            <span>{antique.origin}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Age</span>
            <span>{antique.age}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Condition</span>
            <span>{antique.condition}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Price</span>
            <span>{antique.price}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(antique.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(antique.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowAntique;