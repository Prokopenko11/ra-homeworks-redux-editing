import {useSelector, useDispatch} from 'react-redux';
import { removeService, editService  } from '../redux/actions/actionCreators';

export default function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  const handleEdit = (id, name, price) => {
    dispatch(editService(id, name, price));
  };

  const filteredItems = items.filter(o =>
    o.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredItems.map(o => (
        <li className="item" key={o.id}>
          {o.name} {o.price}
          <div className="buttons">
            <button className="button" onClick={() => handleEdit(o.id, o.name, o.price)}>✏️</button>
            <button className="button" onClick={() => handleRemove(o.id)}>&times;</button>
          </div>
        </li>
      ))}
    </ul>
  )
}