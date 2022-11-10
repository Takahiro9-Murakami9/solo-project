import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends Component {
   
    render() {
        console.log(this.props.id);
      return (
        <div> 
            {this.props.children}
           <span className={this.getBagdeClasses()}>{this.formatCount()}</span>  
           <button 
             onClick={() => this.props.onIncrement(this.props.counter)}
             className="btn btn-primary btn-sm m-2"
            >
              Increment
           </button>
           <button 
             onClick={() => this.props.onDelete(this.props.counter.id)} 
             className="btn btn-danger btn-sm m-2">Delete</button>
        </div>
            );
        }

    getBagdeClasses() {
      let classes = "badge rounded-pill text-bg-";
      classes += this.props.counter.value === 0 ? "warning" : "primary";
      return classes;
    }

    formatCount() {
      const { value } = this.props.counter;
      return value === 0 ? "Zero" : value;
    }

    
//   state = {
//     count: 1,
//     imgUrl: "https://picsum.photos/200",
//     tags: ["tag1", "tag2", "tag3"]
//   };

//   styles = {
//     fontSize: 10,
//     fontWeight: "bold"
//   };

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }

//     render() {

//         React.createElement('div') 
//         return (
//           <React.Fragment>
//             <img src={this.state.imgUrl} alt=""/>
//             <span style={this.styles} class={this.getBagdeClasses()}>{this.formatCount()}</span>
//             <button class="btn btn-primary">Increment</button>
//             <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
//           </React.Fragment>
//         );
//     }

//     getBagdeClasses() {
//         let classes = "badge rounded-pill text-bg-";
//         classes += this.state.count === 0 ? "warning" : "primary";
//         return classes;
//     }
}
 
export default Counter;