import './style.css'
import Coments from './coments/coments'
import ComentForm from './ComentForm/comentform'
// eslint-disable-next-line
export default props => {
    return (
        !props.showmodal? null:
            <div className="modal" onClick={()=>props.setshowmodal(false)}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <span className="modal-close" onClick={()=>props.setshowmodal(false)}>
                &times;
            </span>
                <div className="modal-body">
                    <div className="modal-content">{props.loading?<p>loading..</p>:<img src={props.modalimg.url} alt="" />}</div>
                    <Coments coments={props.modalimg.comments}/>
                </div>
                <div className="modal-footer">
                    <ComentForm />
                </div>
            </div>
        </div>
    )
}