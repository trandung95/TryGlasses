const stateDefault = {
  imgSrc: "./glassesImage/v1.png",
  glassName: "GUCCI G8850U",
  desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  price: 30,
};
export const appTryGlassesReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "PICK_GLASS": {
      state = action.glass;
      return { ...state };
    }
    default:
      return state;
  }
};
