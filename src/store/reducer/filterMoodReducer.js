let intial = {
  FilterList:[],
}
  export default function filterMoodReducer(state = intial, action) {
    switch (action.type) {
      case "SET_FILTERLIST":
        return  {
          ...state,
          FilterList: action.payload
     }
      default:
        return state;
    }
  }
  