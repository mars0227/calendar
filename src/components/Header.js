import ChevronLeft from "../statics/chevron-left.svg";
import ChevronRight from "../statics/chevron-right.svg";


const MonthSelect = ({ dir }) => {
    return (
        <div className="month-select middle">
            {dir === 'left'
                ?<img src={ChevronLeft} alt="chevron-left" />
                : <img src={ChevronRight} alt="chevron-right" />
            }
        </div> 
    )
}

const Header = ({ day }) => {
    return (
        <div className="header">
            <MonthSelect dir="left"/>
            {day.getFullYear()}年{day.getMonth()}月
            <MonthSelect dir="right"/>
        </div>
    )
}

export default Header;