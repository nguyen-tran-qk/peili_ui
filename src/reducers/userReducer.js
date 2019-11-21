import usersData from '../context/usersData';

const userReducer = (state = usersData[0], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        questions: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
