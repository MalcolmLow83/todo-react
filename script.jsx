class Form extends React.Component {
    constructor(){
        super()
        this.state ={
            userMessage: "Welcome"
        }
    }

    changeHandler(event){
      console.log("Typed: "+event.target.value); //broswer typed value
      this.setState({taskz:event.target.value}); //set state on the word array to show on broswer
    };

    lengthHandler(event){
      console.log("lengthHandler");
      if (this.state.taskz.length <=1) {
        let currentMessage = "task must be more than 1 character";
          this.setState({userMessage:currentMessage});
      } else if (this.state.taskz.length >15){
          let currentMessage = "task cannot be more than 15 characters";
          this.setState({userMessage:currentMessage});
      } else {
        console.log("event: ", event.target.value);
        this.props.setTaskz(event.target.value);
      }
    }   

    render(){
        return(
            <div className="form">
            <h5>{this.state.userMessage}</h5>
            <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskz}/>     
            <button className="btn btn-dark" onClick={(event)=>{this.lengthHandler(event)}} value={this.state.taskz}>add item</button>
        </div>
        );
    }
};

class List extends React.Component {
  constructor(){
    super()
    this.state = {
      word:"",
      list : [],
    }
  }

  removeItem(index){
    let currentList = this.state.list;
    currentList.splice(index, 1);
    this.setState({list:currentList});
  }

  render() {
    let itemsElements = this.state.list.map((toDoItem,index) => {
        return (
            <div className="itemCard">
                <ul>
                    <li>
                        <p key={index+1}>{toDoItem.word}</p>
                        <p>Posted on: {toDoItem.date}</p>
                        <button key={index} onClick={()=>{this.removeItem(index)}}>remove item</button>
                    </li>
                </ul>
            </div>
        );
    });

    return (
      <div className="form">
          <p>Item Count: {this.state.list.length}</p>
          {itemsElements}
      </div>
    );
  }
}

class ToDoApp extends React.Component{
  constructor(){
    super()
    this.state = {
      list: [],
      completedList: [],
    }
    this.setTask = this.setTask.bind(this);
    
  }
  
  setTask(taskz){
    console.log("setItem value: ", taskz);
    this.state.list.push({
      task: taskz,
      timeStamp: moment().format('DD MM YYYY, h:mm a')
    });
    this.setState({list:this.state.list});
  }
  
  render() {
    return (
      <div>
        <Form setTaskz={this.setTask} taskz={this.state.task}/>
        <List/>
      </div>
    );
  };
}

ReactDOM.render(
    <div className="container">
        <h3>React To-do-List</h3>
        <ToDoApp />
    </div>,
    document.getElementById('root')
);


//     let currentWord = this.state.word;
      //     let currentDate = moment().format('DD MM YYYY, h:mm a')          
      //     let currentList = this.state.list;
      //     let currentMessage = "item successfully added";
      //     let clearWord = "";
      //     currentList.push({
      //         word:currentWord,
      //         date:currentDate
      //     });
      //     this.setState({list:currentList});
      //     this.setState({userMessage:currentMessage});
      //     this.setState({word:clearWord});