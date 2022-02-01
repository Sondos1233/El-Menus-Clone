const initial = {
    lang: "العربية",
<<<<<<< HEAD
  
  };
=======

  };

>>>>>>> d9fc59ad4e44b0734e80926e66af3080086f6dff
  
  export default function languageReducer(state = initial, action) {
    switch (action.type) {
      case "SET_LANGUAGE":
        return {
          ...state,
          lang: action.payload,
        };
  
      default:
        return state;
    }
  }
  