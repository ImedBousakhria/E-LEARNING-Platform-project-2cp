import axios from "axios";
export const downloadFile = async ({setFileUrl}) => {
    try {
      const response = await axios.get(`http://example.com/download/${file.name}`, {
        responseType: 'blob'
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileUrl(url);
    } catch (error) {
      console.error(error);
    }
  };