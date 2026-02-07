import { useRef, useState, memo, useMemo, useCallback, useEffect } from 'react';
import './App.css';

// Component ListItem được ghi nhớ
const ListItem = memo(({ item }) => {
  console.log("item.text", item.text)
  console.log('Rendering item:', item.id);
  return <li>{item.text}</li>;
});

const List = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

function App() {
  // const [count, setCount] = useState(0);
  // const countRef = useRef(0);
  // // console.log('Count Ref Global:', countRef.current);
  // console.log('RERENDER!!!')
  // const incrementCount = () => {
  //   setCount(count + 1);
  //   countRef.current += 1;
  //   console.log('Count:', count);
  //   // để truy cập giá trị của ref, cần thông qua thuộc tính current
  //   // do bản chất giá trị của ref là một object
  //   console.log('Count Ref:', countRef.current);
  // };
  // const increRef = () => {
  //   countRef.current += 1;
  //   // để truy cập giá trị của ref, cần thông qua thuộc tính current
  //   // do bản chất giá trị của ref là một object
  //   console.log('Count Ref:', countRef.current);
  // }

  // Sử dụng ref để thao tác với DOM
  // const getData = () =>{
  //   sampleRef.current.gridData
  // }

  // ========Memo

  // const [items, setItems] = useState([
  //   { id: 1, text: 'Item 1' },//index = 0
  //   { id: 2, text: 'Item 2' },//index = 1
  //   { id: 3, text: 'Item 3' } //index = 2
  // ]);
  // const updateItem = () => {
  //   const newItems = [...items];
  //   newItems[1] = {
  //     ...newItems[1],
  //     text: 'Updated text item 2',
  //   };
  //   newItems[2] = {
  //     ...newItems[2],
  //     text: 'Hiếu thứ 2',
  //   };
  //   setItems(newItems);
  // };
  // ===== useMemo
  // const [count, setCount] = useState(0);
  // const [inputValue, setInputValue] = useState('');
  // console.log("🚀 ~ App ~ inputValue:", inputValue)

  // const expensiveCalculation = (num) => {
  //   console.log('Calculating...');
  //   // Giả sử đây là một tính toán đắt đỏ
  //   for (let i = 0; i < 1000000000; i++) {
  //     num += 1;
  //   }
  //   return num;
  // };

  //Không sử dụng useMemo
  // const memoizedValue = expensiveCalculation(count);

  //Chỉ khi giá trị của state count thay đổi => gọi expensiveCalculation

  // const memoizedValue = useMemo(() => {
  //   expensiveCalculation()
  // }, [])


  // const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  //useCallback
  const [user, setUser] = useState(null);

  const fetchData = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  }, []);

  // const fetchData = () => {
  //   fetch("https://randomuser.me/api/")
  //     .then((res) => res.json())
  //     .then((resJson) => {
  //       setUser(resJson.results[0]);
  //     })
  // };


  // lúc này ta truyền deps là fetchData, khi component re-render, fetchData vẫn giữ tham thiếu cũ của nó, cho nên useEffect vẫn chỉ chạy 1 lần duy nhất sau khi render
  useEffect(() => {
    fetchData();

  }, [fetchData]);

  return (
    // <div>
    //   <p>Count: {count}</p>
    //   <p>Count ref: {countRef.current}</p>
    //   <button onClick={incrementCount}>Increment</button>
    //   <button onClick={increRef}>Incre ref</button>
    // </div>
    // Memo
    // <div>
    //   <List items={items} />
    //   <button onClick={updateItem}>Update Item 2</button>
    // </div>

    //useMemo
    // <div>
    //   <h1>useMemo Example</h1>
    //   <input
    //     type="text"
    //     value={inputValue}
    //     onChange={(e) => setInputValue(e.target.value)}
    //   />
    //   <p>Computed Value: {memoizedValue}</p>
    //   <button onClick={() => setCount(count + 1)}>Increment Count</button>
    // </div>

    //useCallBack
    <div>
      <button onClick={fetchData}>Refresh</button>
      {user ? (
        <div>
          <img src={user.picture.medium} alt="" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ) : null}
    </div>
  )
}

export default App
