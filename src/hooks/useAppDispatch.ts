import {useDispatch} from 'react-redux';
import {AppDispatch} from 'src/redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
