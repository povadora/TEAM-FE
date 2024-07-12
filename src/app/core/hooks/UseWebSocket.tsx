import { useEffect } from 'react';
import io from 'socket.io-client';
import { Inhabitant, Household } from '../types';

interface UseWebSocketParams {
  onHouseholdCreated: (data: Household) => void;
  onHouseholdDeleted: (data: { householdUuid: string }) => void;
  onInhabitantCreated: (data: Inhabitant) => void;
  onInhabitantDeleted: (data: Inhabitant) => void;
}

const useWebSocket = ({
  onHouseholdCreated,
  onHouseholdDeleted,
  onInhabitantCreated,
  onInhabitantDeleted,
}: UseWebSocketParams): void => {
  useEffect(() => {
    const socket = io('http://localhost:3001', {
      withCredentials: true,
    });

    socket.on('connect', () => {
      console.log('Connected to WebSocket server');
    });

    socket.on('householdCreated', onHouseholdCreated);
    socket.on('householdDeleted', onHouseholdDeleted);
    socket.on('inhabitantCreated', onInhabitantCreated);
    socket.on('inhabitantDeleted', onInhabitantDeleted);

    return () => {
      socket.disconnect();
    };
  }, [
    onHouseholdCreated,
    onHouseholdDeleted,
    onInhabitantCreated,
    onInhabitantDeleted,
  ]);
};

export default useWebSocket;
