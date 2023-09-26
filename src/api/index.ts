import request from '@/utils/request';

export const getAllData = () => {
  const result = request.get('/data');
  return result;
};

export const getDepyhData = (depth: number) => {
  return request.get('/depth', { params: { depth } });
};

export const searchPackage = (packageName: string) => {
  return request.get('/search', { params: { packageName } });
};
