import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from 'react-router-dom';
import Home from '../Pages/Home/Index';

const RouterOutlet = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/" element={<Home />} />
          
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterOutlet;
