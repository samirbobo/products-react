/* 
  : هنشرح انهارده  
1- Conditional Rendering:
  هي عباره عن اف ايلس عاديه زي بتاعت الجافا الفرق ان ف الجافا كان ناتج الشرط كان كود برمجي 
  اما ف الرياكت فان الخاله الشرطيه بتعيد كود جي اس اكس او كومبونانت
  ملحوظه ممكن استخدام جميع اشكال اف بتاعت الجافا ف الرياكت
2- Lists and Keys
  List.js مشروحه في 
*/

// import { useState } from 'react';
// import Welcome from './components/welcome';
// import Guest from './components/Guest';
import './App.css';
// import List from './components/List';
import ProductsList from './components/ProductsList';

function App() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);

  return (
    <div className="App">
      {/* Example one: Conditional Rendering */}
      {/* <button onClick={() => setisLoggedIn(true)}>Login</button>
      {isLoggedIn ? <Welcome name='samir'/> :  <Guest />} */}
      {/* هنا ف خاله الناتج كان صحيح رجعلي الكومبونانت دا ولو خطا رجع نيل ومعنا نيل ف الرياكت
      انك مترجعش حاجه او متنفذش خاجه سبها فاضيه يعني */}
      {/* {isLoggedIn ? <Welcome name='samir'/> :  <Guest />} */}

      {/* Example tow: Lists and Keys */}
      {/* <List/> */}

      {/* تدريب علي كل ما سبق تعلمه */}
      <ProductsList />
    </div>
  );
}

export default App;
