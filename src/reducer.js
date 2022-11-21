export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQB0REa4O6VN8jd7cHsXDgwXzM4a1fJ8kY7x9XVZoFQKzW4B5qTV7_JPz5e_uEPTQyJw7Gf6CFv7atjSdwDW2sYr9mibLpNhKOFdq_PS5zVgrbXwc3AablyhvnxBNEpSSYtQS5_e6LSdxZaqX2uyfRS9wCT4i1MjGdc_OPiYre3QsieXfGLTASWux6ZXqx_E71ryXX4zhnjdqLbO",
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer