import { ref } from "vue";
import axios from "axios";

const chuck = ref();

const api = axios.create({
   baseURL: "https://api.chucknorris.io/jokes/random",
});


export const useAPI = () => {
    const getJokes = async () => {
        const response = await api.get("");
        chuck.value = response.data.value;
    };
    return { chuck, getJokes };
};

//export default useAdvice;