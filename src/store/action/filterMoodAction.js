export default function saveFilterByMoOD(data) {
    return {
      type: "SET_FILTERLIST",
      payload: data,
    };
  }