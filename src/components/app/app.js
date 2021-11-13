import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Filter from "../app-filter/app-filter";
import Days from "../days/days";
import StudentAddForm from "../student-add-form/student-add-form";

function App() {

    return(
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel">
                <SearchPanel/>
                <Filter/>
            </div>

            <div className="day-items">
                <Days/>
            </div>

            <StudentAddForm/>

        </div>//app
    )
}

export default App;