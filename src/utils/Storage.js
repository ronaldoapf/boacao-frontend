class Storage  {
  set(key, value) {
    localStorage.setItem(key, value); 
  }

  get(key) {
    const value = localStorage.getItem(key);
    try {
      const parsed = JSON.parse(value);
      return parsed;
    }catch(e) {
      return value;
    }
  }

  delete(key) {
    localStorage.removeItem(key);
  }
} 

export default new Storage();