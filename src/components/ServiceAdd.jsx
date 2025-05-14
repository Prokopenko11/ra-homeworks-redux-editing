import {useSelector, useDispatch} from 'react-redux';
import { changeServiceField, addService, updateService, cancelEdit } from '../redux/actions/actionCreators';

export default function ServiceAdd() {
  const { name, price, editId } = useSelector(state => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = e => { 
    const {name, value} = e.target;
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = e => { 
    e.preventDefault();
    if (editId) {
      dispatch(updateService(editId, name, price));
    } else {
      dispatch(addService(name, price));
    }
  }

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={name} />
      <input name='price' onChange={handleChange} value={price} />
      <button>Save</button>
      {editId !== null && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  )
}