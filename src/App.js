import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { customerReducer } from './redux/customReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = cash => {
    dispatch({ type: 'ADD_CASH', payload: cash });
  };

  const getCash = cash => {
    dispatch({ type: 'GET_CASH', payload: cash });
  };

  const addCustomer = name => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch({ type: 'ADD_CUSTOMER', payload: customer });
  };

  const removeCustomer = customer => {
    dispatch({ type: 'REMOVE_CUSTOMER', payload: customer.id });
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
        <button onClick={() => removeCustomer()}>Удалить клиента</button>
      </div>

      {customers.length > 0 ? (
        <div>
          {customers.map(customer => (
            <div key={customer.id} onClick={() => removeCustomer(customer)}>
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div>Клиеты отсуствуют!</div>
      )}
    </div>
  );
}

export default App;
