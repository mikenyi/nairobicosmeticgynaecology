export const initialState = {
	buggerClicked: false
};


const reducer = (state, action) => {
	console.log(action);
	switch(action.type){
		case 'ToggleMenu':
			return{
				...state,
				buggerClicked:action.buggerClicked
			};

		default:
			return state; 
	}
};

export default reducer;