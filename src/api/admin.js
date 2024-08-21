import { instance, authInstance } from './index';

// get 예시, axiosInstance 사용
export const getExample = async () => {
  try {
    const response = await instance.get(`/요청 주소`);
    return response;
  } catch (error) {
    throw error;
  }
};

// 관리자 페이지에서 필요한 경우 authInstance 사용
export const putExample = async data => {
  try {
    const response = await authInstance.put(`/요청 주소`, { data });
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 목록 조회
export const getCards = async () => {
  try {
    const response = await instance.get(`cards`);
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 생성 api
export const createCard = async (name, position, introduce, cardImg) => {
  try {
    const data = { name, position, introduce, cardImg };
    const response = await authInstance.post(`/cards`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

//카드 수정 api
export const updateCard = async (
  cardId,
  name,
  position,
  introduce,
  cardImg,
) => {
  try {
    const data = { name, position, introduce, cardImg };
    const response = await authInstance.put(`/cards/${cardId}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
