import { useState } from 'react';

export default function useCepData() {
  const [cepData, setCepData] = useState(null);

  const showCepData = (data) => setCepData(data);
  const clearCepData = () => setCepData(null);

  return {
    cepData,
    showCepData,
    clearCepData,
  };
}
