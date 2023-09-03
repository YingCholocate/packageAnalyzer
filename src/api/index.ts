import request from '@/utils/request';

export const getAllData = () => {
  const result = request.get('/data');
  return result;
};

export const getDepyhData = (depth: number) => {
  return request.get('/depth', { params: { depth } });
};
