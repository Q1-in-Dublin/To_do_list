import './Header.css';

const Header = ({ selectedDate, changeDate }) => {
    return (
        <div className="Header">
            <h3>Today is ..📅</h3>
            <div className="date-navigation">
                <button className="date-button" onClick={() => changeDate(-1)}>
                    {'<'}
                </button>
                <h1>{selectedDate}</h1>
                <button className="date-button" onClick={() => changeDate(1)}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Header;
