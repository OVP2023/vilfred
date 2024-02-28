import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

function Details(props) {

  console.log(props.name)
  return( 
    <>
      <p className="fs-2 fst-italic fw-semibold lh-sm font-arial text-start" style={{color:'#0080FF'}}>
        <div className="animate__animated ">
          {props.name}
        </div>
      </p>
      <p className="fs-4 fst-italic  lh-sm font-arial text-start" style={{color:'#464646'}}>
        <div className="animate__animated ">
          {props.textbody1}
        </div>
      </p>
      <p className="fs-4 fst-italic  lh-sm font-arial text-start" style={{color:'#464646'}}>
        <div className="animate__animated ">
          {props.textbody2}
        </div>
      </p>
      <p className="fs-4 fst-italic  lh-sm font-arial text-start" style={{color:'#464646'}}>
        <div className="animate__animated ">
          {props.textbody3}
        </div>
      </p>
      <p className="fs-4 fst-italic  lh-sm font-arial text-start" style={{color:'black'}} >
        <div className="animate__animated ">
          {props.textbody4}
        </div>
      </p>
    </>
  )
}

export default Details


