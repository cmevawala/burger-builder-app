import Axios from 'axios';

const AxiosInstance = Axios.create({
    baseURL: 'https://burger-builder-cdb87.firebaseio.com/'
})

export default AxiosInstance;