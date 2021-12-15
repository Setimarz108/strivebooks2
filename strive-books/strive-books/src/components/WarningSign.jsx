import { Alert,  } from "react-bootstrap";


const WarningSign = (props)  => {

   return (
    <div>  <Alert key={0} variant="warning" className="">
        This is a warning alert created with{props.text}
      </Alert>
       </div> )

}


export default WarningSign