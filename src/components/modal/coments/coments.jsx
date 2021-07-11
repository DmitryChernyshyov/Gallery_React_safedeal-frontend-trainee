import './style.css'
// eslint-disable-next-line
export default props => {
    return(
        <div className="comments">
            {props.coments && props.coments.length > 0? 
            props.coments.map((coment,index)=>{
                return(
                <div className="coment" key={index}>
                    <span className="coment-date">{("" + (new Date(coment.date)).toISOString())
                        .replace(/^([^T]+)T(.+)$/,'$1')
                         .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')}</span>
                    <span className="coment-text">{coment.text}</span>
                </div>)
            })
            : <div>Будте первым оставте свой коментарий</div>}
        </div>
    )
}