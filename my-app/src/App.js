import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DefaultLayout } from './Layout/DefaultLayout';
import { Entry } from './pages/entry/entry.page';
import { Dashboard } from './pages/Dashboard/Dashboard.page';
import { AddTicket } from './pages/new-ticket/AddTicket.page';
import { TicketList } from './pages/ticket-list/TicketList.page';
import { Ticket } from './pages/ticket/Ticket.page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route element={<DefaultLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-ticket" element={<AddTicket />} />
          <Route path="tickets" element={<TicketList />} />
          <Route path="ticket/:tId" element={<Ticket />} />
        </Route>
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
