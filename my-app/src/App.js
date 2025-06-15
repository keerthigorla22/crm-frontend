import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Entry } from './pages/entry/entry.page';
import { DefaultLayout } from './Layout/DefaultLayout';


function App() {
  return (
    <div className="App">
      <DefaultLayout>
        Dashboard
      </DefaultLayout>
    </div>
  );
}

export default App;
