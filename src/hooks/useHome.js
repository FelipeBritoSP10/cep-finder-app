import useCepData from './useCepData';
import useCepSearch from './useCepSearch';

export default function useHome() {
  const { cepData, showCepData, clearCepData } = useCepData();
  const { formattedCep, isLoading, error, handleFormattedCepChange, searchCep, setError } = useCepSearch();

  return {
    cepData,
    showCepData,
    clearCepData,
    formattedCep,
    isLoading,
    error,
    handleFormattedCepChange,
    searchCep,
    setError,
  };
}
