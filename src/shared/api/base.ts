import axios from 'axios';

import {API_URL, REQUEST_TIMEOUT} from '@/shared/config';

export const apiInstance = axios.create({
    baseURL: API_URL,
    timeout: REQUEST_TIMEOUT,
});

