import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials: { email: string; password: string }) =>
    api.post('/auth/login', credentials),
  register: (userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
  }) => api.post('/auth/register', userData),
};

export const jobs = {
  getAll: (params?: any) => api.get('/jobs', { params }),
  getById: (id: string) => api.get(`/jobs/${id}`),
  create: (jobData: any) => api.post('/jobs', jobData),
  update: (id: string, jobData: any) => api.put(`/jobs/${id}`, jobData),
  delete: (id: string) => api.delete(`/jobs/${id}`),
  apply: (jobId: string, applicationData: any) =>
    api.post(`/jobs/${jobId}/apply`, applicationData),
};

export const applications = {
  getAll: () => api.get('/applications'),
  getById: (id: string) => api.get(`/applications/${id}`),
  updateStatus: (id: string, status: string) =>
    api.patch(`/applications/${id}/status`, { status }),
};

export default api;