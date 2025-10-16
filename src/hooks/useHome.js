import useCepData from './useCepData';
import useCepSearch from './useCepSearch';

export default function useHome() {
    const { cepData, showCepData, clearCepData } = useCepData();
    const { 
        formattedCep, 
        isLoading, 
        error, 
        handleFormattedCepChange, 
        searchCep, 
        setError 
    } = useCepSearch();

    const handleSearchClick = () => {
        searchCep(showCepData); 
    };
    
    const clearDataAndError = () => {
        clearCepData();
        setError('');
    };

    return {
        cepData,
        clearCepData: clearDataAndError,
        formattedCep,
        isLoading,
        error,
        handleFormattedCepChange,
        handleSearchClick, 
    };
}