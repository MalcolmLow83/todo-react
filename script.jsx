class Form extends React.Component {  
  
  constructor(){
    super()
    this.state ={
        userMessage: "Welcome"
    }
  }
  changeHandler(event){
    this.setState({taskz:event.target.value}); //set state on the word array to show on broswer
  };
  
  lengthHandler(event){
    if (this.state.taskz.length <=1) {
      this.setState({userMessage:"task must be more than 1 character"});
    } else if (this.state.taskz.length >15){
      this.setState({userMessage:"task cannot be more than 15 characters"});
    } else {
      this.props.setTaskz(event.target.value);
      this.setState({taskz:""});
    }
  }   
  
  render(){
    return(
        <div className="form">
        <h5>{this.state.userMessage}</h5>
        <input onChange={(event)=>{this.changeHandler(event)}} value={this.state.taskz}/>     
        <button className="btn btn-dark" onClick={(event)=>{this.lengthHandler(event)}} value={this.state.taskz}>add task</button>
    </div>
    );
  }
};

class List extends React.Component {
  
  doneTask(index){
    this.props.doneTaskz(index);
  }
  
  render() {
    let listElements = this.props.listz.map((taskz,index) => {
      return (
        <div className="taskCard">
            <ul>
                <li>
                    <p key={index+1}>{taskz.task}</p>
                    <p key={index+2}>Posted on: {taskz.timeStamp}</p>
                    <button key={index} onClick={()=>{this.doneTask(index)}}>task done</button>
                </li>
            </ul>
        </div>
      );
    });
    return (
      <div className="list">
          <p>Pending Tasks</p>
          <p>Item Count: {this.props.listz.length}</p>
          {listElements}
      </div>
    );
  }
}

class DoneList extends React.Component{
  
  removeTask(index){
    console.log("removeTask");
    this.props.removeTaskz(index);
  }

  render() {
    let doneListElements = this.props.doneListz.map((doneTaskz, index)=>{
      return(
        <div className="doneTaskCard">
          <ul>
            <li>
              <p key={index+1}>{doneTaskz.task}</p>
              <p key={index+2}>{doneTaskz.timeStamp}</p>
              <button key={index} onClick={()=>{this.removeTask(index)}}>remove task</button>
            </li>    
          </ul>
        </div>
      );
    });
    return (
      <div className="doneList">
        <p>Completed Tasks</p>
        {doneListElements}
      </div>
    );
  }
}

class ToDoApp extends React.Component{
  
  constructor(){
    super()
    this.state = {
      list: [],
      doneList: [],
    }
    this.setTask = this.setTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
  setTask(taskz){
    this.state.list.push({
      task: taskz,
      timeStamp: moment().format('DD MM YYYY, h:mm a')
    });
    this.setState({list:this.state.list});
  }
  
  doneTask(indexz){
    this.state.doneList.push(this.state.list[indexz]);
    this.setState({doneList:this.state.doneList});
    this.state.list.splice(indexz, 1);  
    this.setState({list:this.state.list});
  }
  
  removeTask(indexz){
    this.state.doneList.splice(indexz, 1);
    this.setState({doneList:this.state.doneList});
  }
  
  render() {
    return (
      <div>
        <Form setTaskz={this.setTask} taskz={this.state.task}/>
        <List listz={this.state.list} doneTaskz={this.doneTask} indexz={this.state.index}/>
        <DoneList doneListz={this.state.doneList} removeTaskz={this.removeTask} indexz={this.state.index}/>
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