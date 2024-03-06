`npm install @reduxjs/toolkit`
`npm install react-redux`
# Redux ToolKit: (RTK)
With specifically recommend that our users should use the redux toolkit and should not use the legacy redux core package for any new redux code today. We want all redux users to write their redux code with the redux toolkit because it simplifies your code and eliminates many common redux mistakes and bugs!

## Slices In Redux Tool Kit:
A function that accepts a slice name, initial State, and Object of reducer functions, and automatically generates action creators and action types that correspond to the reducers and state.
createSlice is a function provided by Redux Toolkit that helps in reducing boilerplate code when creating Redux slices, which are pieces of state and logic in a Redux store. It combines the definition of a slice's initial state, reducer functions, and action creators into a single, concise syntax.
In Redux, a slice is a collection of reducer logic and actions for a specific slice of your application's state. createSlice allows you to define a slice more intuitively, by specifying the initial state and a set of reducer functions that define how the state can be updated in response to actions.
const UserSlice = createSlice({
	name: "user",
	initialState: [],
	reducers: {
		adduser(satet, action) {},
		removeuser(state, action) {},
	}
})

## Store In React Redux Tool Kit:
configureStore is a function provided by Redux Toolkit that simplifies the setup of a Redux store. It combines several Redux-related functions into a single function call, making it easier to create a store with commonly used configurations.
In Redux, a store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action. The configureStore function provides a way to create a Redux store with pre-configured settings, including middleware, reducers, and dev tools setup.
const Store = configureStore({
    reducers: {
        users: UserSlice,
    }
})
export default Store;

## Provider:
The Provider component from react-redux is used to provide the Redux store to the entire application. It wraps the BrowserRouter and App components to ensure that the Redux store is available to all components.

## useSelector:
useSelector is a hook provided by React Redux that allows components to extract data from the Redux store state. In the App component, isAuth is used to determine if the user is authenticated and conditionally render the Expense component based on the authentication status.
useSelector is a hook provided by React-Redux that allows functional components to extract and read data from the Redux store's state. It provides a way to access the Redux store's state without having to subscribe to the store manually or pass the state down through the component hierarchy.
In Redux, the getState function is used to access the current state of the Redux store. However, when using React-Redux, you can use the useSelector hook to select and extract specific pieces of state from the Redux store's state tree.

## useDispatch:
useDispatch is another hook provided by React Redux that returns the Redux store's dispatch function. This hook is used to dispatch actions to the Redux store. In the Header component, dispatch is used to dispatch the logout action when the user clicks the "Logout" button.
useDispatch is a hook provided by React-Redux that allows functional components to dispatch actions to the Redux store. It provides a way to interact with the Redux store without having to explicitly pass the dispatch function down through the component hierarchy.
In Redux, the dispatch function is used to send actions to the Redux store. It is typically accessed through the store. dispatch method. However, when using React-Redux, you can use the useDispatch hook to access the dispatch function directly within your functional components.
