export default (state = {}, action) => {
    switch (action.type) {  
      case "SET_DATA": {
        return { ...state, ...action.payload }
      } 
      case "REQUEST_DATA": {
        return { ...state, ...action.payload }
      }
      case "SUCCESS_DATA": {
        return { ...state, ...action.payload }
      }
      case "REQUEST_FAILED": {
        return { ...state, ...action.payload }
      }
      default: {
        return { ...state }
      }
    }
   }