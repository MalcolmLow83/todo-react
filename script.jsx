class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    console.log("item length: "+this.state.word.length); //check item length

    if (this.state.word.length <=1) {
        alert("items must be more than 1 character");
    } else if (this.state.word.length >15) {
        alert("items cannot be more than 15 characters");
    } else {
        this.state.list.push(this.state.word);
        let currentList = this.state.list;
        this.setState({list:currentList});
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