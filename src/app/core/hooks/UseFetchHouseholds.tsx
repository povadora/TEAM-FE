import { useState, useEffect } from 'react';
import axios from 'axios';
import { Household } from '../types';

interface UseFetchHouseholdsResult {
  data: Household[] | null;
  error: string | null;
  loading: boolean;
}

const useFetchHouseholds = (): UseFetchHouseholdsResult => {
  const [data, setData] = useState<Household[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3001/household/all-household'
        );
        console.log('Fetched data:', response.data); // Log fetched data
        setData(response.data);
      } catch (error) {
        setError('Error fetching initial data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchHouseholds;
