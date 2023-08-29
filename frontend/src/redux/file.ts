import { Action, createAction, createReducer } from 'typesafe-actions';

import { RootState } from './root_reducer';
import { XmlType } from '../types';

export interface FileState {
	readonly data?: any;
	readonly name?: string;
	readonly raw?: any;
}

export const initialState: FileState = {
	data: undefined,
	name: undefined,
	raw: undefined,
};

export const setUploadedFile = createAction('SET_UPLOADED_FILE')<any | undefined>();
export const setUploadedFileName = createAction('SET_UPLOADED_FILE_NAME')<string | undefined>();

export function getUploadedFile({ file }: RootState): XmlType | undefined {
	return file.data;
}
export function getUploadedFileName({ file }: RootState): string | undefined {
	return file.name;
}

const reducer = createReducer<FileState, Action>(initialState)
	.handleAction(setUploadedFile, (state, action) => {
		return {
			...state,
			data: action.payload,
		};
	})
	.handleAction(setUploadedFileName, (state, action) => {
		return {
			...state,
			name: action.payload,
		};
	});

export default reducer;
