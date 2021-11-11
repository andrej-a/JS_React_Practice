import "./search-panel.css"

const SearchPanel = () => {
    return(
        <input 
        type="text"
        className="form-control search-input"
        placeholder="Найти ученика..." 
        />
    );
};

export default SearchPanel;