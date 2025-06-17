import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DefaultLayout } from './Layout/DefaultLayout';
//import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketList } from './pages/ticket-list/TicketList.page';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        {/*<Dashboard />*/}
        {/*<AddTicket/>*/}
        <TicketList/>

      </DefaultLayout>
    </div>
  );
}

export default App;
