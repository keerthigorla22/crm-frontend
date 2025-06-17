import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultLayout } from './Layout/DefaultLayout';
//import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard />*/}
        {<AddTicket/>}

      </DefaultLayout>
    </div>
  );
}

export default App;
