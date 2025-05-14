import {useSelector, useDispatch} from 'react-redux';
import { setFilter } from '../redux/actions/actionCreators'

export default function ServiceFilter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  }

  return (
    <input placeholder="фильтр по названию" value={filter} onChange={handleChange} />
  )
}