import getters from "./getters";
import mutations from "./mutations";

const state = {
    contents: [],
    step: 0,
    animalAnimation: false,
    success: false,
		start: false,
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
