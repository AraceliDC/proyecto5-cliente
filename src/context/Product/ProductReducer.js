const reducer = (globalState, action) => {

    switch (action.type) {

        case "GET_POSTS":
            return {
                ...globalState,
                guitars: action.payload,
                guitar: [{
                    _id: "",
                    title: "",
                    category: "",
                    price: "",
                    image: ""
                }]
            }

        case "GET_POSTS":
            return {
                ...globalState,
                post: [action.payload]
            }

        default: 
            return globalState

    }


}

export default reducer