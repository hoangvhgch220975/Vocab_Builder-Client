// import axios from "axios";

// const baseURL = "http://localhost:3000/vocabs";  // Corrected base URL

// const handleErrors = fn => (...params) =>
//     fn(...params).catch(error => {
//         console.error("API error:", error.response);
//     });

// export const api = {
//     getWords: handleErrors(async () => {
//         const response = await axios.get(baseURL);
//         return response.data;
//     }),
//     getWord: handleErrors(async id => {
//         const response = await axios.get(`${baseURL}/${id}`);
//         return response.data;
//     }),
//     deleteWord: handleErrors(async id => {
//         const response = await axios.delete(`${baseURL}/${id}`);
//         return response.data;
//     }),
//     createWord: handleErrors(async word => {
//         const response = await axios.post(baseURL, word);
//         return response.data;
//     }),
//     updateWord: handleErrors(async word => {
//         const response = await axios.put(`${baseURL}/${word.id}`, word);
//         return response.data;
//     })
// };


//import 'axios' library to consume API
import axios from 'axios'

//define backend endpoint (url)
const backEnd = 'https://vocab-builder-server.onrender.com/vocabs'

//consume (call) API with 4 methods GET/POST/PUT/DELETE
export const ViewAllVocabs = async () => {
   try {
      let response = await axios.get(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteVocab = async (id) => {
   try {
      let response = await axios.delete(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const DeleteAllVocabs = async () => {
   try {
      let response = await axios.delete(backEnd)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const ViewVocab = async (id) => {
   try {
      let response = await axios.get(backEnd + id)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const AddVocab = async (word) => {
   try {
      let response = await axios.post(backEnd, word)
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const EditVocab = async (id, word) => {
   try {
      let response = await axios.put(backEnd + id, word)
      return response.data
   } catch (err) {
      console.error(err)
   }
}