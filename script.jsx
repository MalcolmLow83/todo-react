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
        let currentMessage = "items must be more than 1 character";
        this.setState({userMessage:currentMessage});
    } else if (this.state.word.length >15) {
        let currentMessage = "items cannot be more than 15 characters";
        this.setState({userMessage:currentMessage});
    } else {
        let currentWord = this.state.word;
        let currentDate = moment().format('DD MM YYYY, h:mm a')
        let currentList = this.state.list;
        let currentMessage = "item successfully added";
        currentList.push({
            word:currentWord,
            date:currentDate
        });
        this.setState({list:currentList});
        this.setState({userMessage:currentMessage});
    }
  }

  removeItem(index){
    let currentList = this.state.list;
    currentList.splice(index, 1);
    this.setState({list:currentList});
  }

  changeHandler(){
    console.log("Typed: "+event.target.value); //broswer typed value
    let currentWord = event.target.value; //pass the typed value into currentWord
    this.setState({word:currentWord}); //set state on the word array to show on broswer
  }

  render() {
    // render the list with a map() here
    let itemsElements = this.state.list.map((item,index) => {
        return (
            <div className="itemCard">
                <ul>
                    <li>
                        <p key={index+1}>{item.word}</p>
                        <p>Posted on: {item.date}</p>
                        <button key={index} onClick={()=>{this.removeItem(index)}}>remove item</button>
                    </li>
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