// src/http.ts
import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001', //URL backend
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
