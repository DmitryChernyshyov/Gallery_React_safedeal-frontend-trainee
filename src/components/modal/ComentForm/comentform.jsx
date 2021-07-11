import './style.css'
// eslint-disable-next-line
export default ()=> {
    return(
            <form action="" className="form">
                <input type="text" placeholder="Ваше имя"/>
                <input type="text" placeholder="Ваш Коментарий"/>
                <input type="submit" className="btn" value="Отправить коментарий"/>
            </form>
    )
}