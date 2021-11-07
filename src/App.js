import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import "./App.css";
import Index from "./pages/Admin/Index";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "select2/dist/css/select2.min.css";
import "select2/dist/js/select2";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-rotate.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "jquery-slimscroll/jquery.slimscroll";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/admin" component={Index} />
				<Route path="/">
					<Redirect to="/admin" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
