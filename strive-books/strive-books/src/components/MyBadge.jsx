
import {Component} from 'react'
import { Badge } from 'react-bootstrap'

class MyBadge extends Component {
 
    render( )
    {

        return (
               
            <div> 
            <h6>
            Example heading <Badge bg={this.props.colors}>New</Badge>
          </h6>
        </div>
        
        )

    
    }

}

export default MyBadge