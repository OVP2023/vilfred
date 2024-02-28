import 'bootstrap/dist/css/bootstrap.min.css';

function Detimage(props) {

    console.log(props.avatar)
    return(   
       
        <div className="card" style={{ width: '24rem' }}>
            <img src={props.avatar} className="card-img-top" alt=""></img>
        </div>    
    )
}
  
export default Detimage

