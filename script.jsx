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
      // console.log("lengthHandler ok");
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
            <button className="btn btn-dark" onClick={(event)=>{this.lengthHandler(event)}} value={this.state.taskz}>add item</button>
        </div>
        );
    }
};

class List extends React.Component {

  doneTask(index){
    this.props.setDoneTaskz(index);
  }

  render() {
    // console.log("list render ok");
    let listElements = this.props.listz.map((taskz,index) => {
        return (
            <div className="taskCard">
                <ul>
                    <li>
                        <p key={index+1}>{taskz.task}</p>
                        <p>Posted on: {taskz.timeStamp}</p>
                        <button key={index} onClick={()=>{this.doneTask(index)}}>task done</button>
                    </li>
                </ul>
            </div>
        );
    });

    return (
      <div className="form">
          <p>list component</p>
          <p>Item Count: {this.props.listz.length}</p>
          {listElements}
      </div>
    );
  }
}

class DoneList extends React.Component{
  render() {
    return (<p>done list</p>);
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
    this.setDoneTask = this.setDoneTask.bind(this);
  }
  
  setTask(taskz){
    // console.log("setItem value: ", taskz);
    this.state.list.push({
      task: taskz,
      timeStamp: moment().format('DD MM YYYY, h:mm a')
    });
    this.setState({list:this.state.list});
    console.log("list: ", this.state.list);
  }

  setDoneTask(indexz){
    // console.log("setDoneTask: ", indexz);
    this.state.doneList.push(this.state.list[indexz]);
    this.setState({doneList:this.state.doneList});
    this.state.list.splice(indexz, 1);  
    this.setState({list:this.state.list});
    console.log("doneList: ", this.state.doneList);
  }
  
  render() {
    return (
      <div>
        <Form setTaskz={this.setTask} taskz={this.state.task}/>
        <List listz={this.state.list} setDoneTaskz={this.setDoneTask} indexz={this.state.index}/>
        <DoneList />
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