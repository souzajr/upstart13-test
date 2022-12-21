import fetchJsonp from 'fetch-jsonp';

const useFetch = async <T>(url: string, type: 'normal' | 'jsonp') => {
  try {
    const response =
      type === 'normal' ? await fetch(url) : await fetchJsonp(url);

    if (response.ok) {
      const fixedResponse: T = await response.json();

      return {
        error: false,
        data: fixedResponse,
      };
    }

    return {
      error: true,
      message: 'Invalid address',
    };
  } catch {
    return {
      error: true,
      message: 'Invalid address',
    };
  }
};

export default useFetch;
