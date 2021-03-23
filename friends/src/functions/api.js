
import { axiosWithAuth } from 'functions/auth';



export const getFriends = () => {
  return axiosWithAuth().get('http://localhost:5000/api/friends');
}