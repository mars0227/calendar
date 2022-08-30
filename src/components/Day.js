const Day = ({ num, onClick, className }) => {
    return (
        <div onClick={onClick} className={`day middle${className ? ` ${className}` : ""}`}>
            {num} 日
        </div>
    )
}

export default Day;