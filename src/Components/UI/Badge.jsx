import React from 'react'
class Badge extends React.Component {
    render() { 
        return <span className={this.props.booked ? "badge-booked" : "badge-available"}>{this.props.children}</span>;
    }
}
 
export default Badge;