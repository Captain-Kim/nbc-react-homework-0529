const getLocalStorage = () => {
    const savedMonth = localStorage.getItem('selectedMonth');
    return savedMonth !== null ? parseInt(savedMonth, 10) : null;
  };

  export default getLocalStorage;