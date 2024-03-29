import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './redux/customReducer';
import { addCashAction, getCashAction } from './redux/cashReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  const customers = useSelector(state => state.customers);

  const addCash = cash => {
    dispatch(addCashAction(cash));
  };

  const getCash = cash => {
    dispatch(getCashAction(cash));
  };

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = customer => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div>{cash}</div>
      <div sttyle={{ display: 'flex' }}>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить счет</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять со счета</button>
      </div>
      <div>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <div style={{ display: 'flex' }} key={customer.id}>
              <div>{customer.name}</div>
              <button onClick={() => removeCustomer(customer)}>Удалить клиента</button>
            </div>
          ))}
        </div>
      ) : (
        <div>Клиенты отсуствуют!</div>
      )}
    </div>
  );
}

export default App;
