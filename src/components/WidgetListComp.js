import React,{Component} from 'react'
import HeadingWidget from "./HeadingWidget";
import ListWidget from "./ListWidget";
class WidgetListComp extends Component {

    constructor(props){
        super(props);
        props.init(props.widgetsInit,props.topic)

    }
    componentDidUpdate(){
        //alert('Refreshed')
        this.props.init(this.props.widgetsInit,this.props.topic)
    }
    updateWidget = (widget) =>
    {
        let newHeading = document.getElementById(widget.id+'-heading').value
        let newSize = document.getElementById(widget.id+'-size').value
        //alert(newHeading)
        widget.text = newHeading
        widget.size = parseInt(newSize)
        //console.log(widget)
        this.props.updateWidget(widget)
    }
    render(){
        return(<ul className="list-group">
                {
                    this.props.widgets.map((widget, index) =>
                        <li key={index} className="list-group-item">
                            <button
                                onClick={() => this.props.deleteWidget(widget)}
                                className="btn btn-danger float-right">
                                Delete
                            </button>
                            <div className="clearfix"></div>
                            <div>
                            {widget.type === "HEADING" && <HeadingWidget updateWidget={this.updateWidget}
                                                                         widget={widget}/>}
                            </div>
                        </li>)
                }

            </ul>

        )
    }

}
export default WidgetListComp