class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : [],
      userMessage: "Welcome",
    }
  }

  addItem(){
    if (this.state.word.length <=1) {
        // alert("items must be more than 1 character");
        let currentMessage = "items must be more than 1 character";
        this.setState({userMessage:currentMessage});
    } else if (this.state.word.length >15) {
        // alert("items cannot be more than 15 characters");
        let currentMessage = "items cannot be more than 15 characters";
        this.setState({userMessage:currentMessage});
    } else {
        this.state.list.push(this.state.word);
        let currentList = this.state.list;
        this.setState({list:currentList});
        let currentMessage = "item successfully added";
        this.setState({userMessage:currentMessage});
    }
  }

  removeItem(index){
    this.state.list.splice(index, 1);
    let currentList = this.state.list;
    this.setState({list:currentList});
  }

  changeHandler(){
    console.log("Typed: "+event.target.value); //broswer typed value
    let currentWord = event.target.value; //pass the typed value into currentWord
    this.setState({word:currentWord}); //set state on the word array
  }

  render() {
      // render the list with a map() here
      let itemsElements = this.state.list.map((item,index) => {
        return (
            <div>
                <ul>
                    <li key={index+"1"}>{item}</li>
                    <button key={index} onClick={()=>{this.removeItem(index)}} >remove item</button>
                </ul>
            </div>
        );
      });

      console.log("rendering");
      return (
        <div className="list">
            <h5>{this.state.userMessage}</h5>
            <input onChange={()=>{this.changeHandler()}} value={this.state.word}/>
            <button onClick={()=>{this.addItem()}}>add item</button>
            {itemsElements}
        </div>
      );
  }
}

ReactDOM.render(
    <div className="container">
        <h3>React To-do-List</h3>
        <List/>
    </div>,
    document.getElementById('root')
);