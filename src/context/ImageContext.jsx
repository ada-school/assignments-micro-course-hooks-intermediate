import { createContext, useReducer } from 'react'
import { imageReducer } from '../reducer/imageReducer'
import { images } from './data'

export const ImageContext = createContext()

const initialState = {
	images: images,
}

export const ImageProvider = ({ children }) => {
	const [state, dispatch] = useReducer(imageReducer, initialState)

	return (
		<ImageContext.Provider value={{ state, dispatch }}>
			{children}
		</ImageContext.Provider>
	)
}
