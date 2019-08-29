class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      list : []
    }
  }

  addItem(){
    this.state.list.push(this.state.word);
    console.log("wordArraya: "+this.state.word);
    let currentList = this.state.list;
    this.setState({list:currentList});
    console.log("wordArrayb: "+this.state.list);
  }

  changeHandler(){
    console.log("Typed: "+event.target.value); //broswer typed value
    let currentWord = event.target.value; //pass the typed value into currentWord
    this.setState({word:currentWord}); //set state on the word array
  }

  render() {
      // render the list with a map() here
      let itemsElements = this.state.list.map((item,index) => {
        return <li key={index}>{item}</li>
      });

      console.log("rendering");
      return (
        <div className="list">
            <input onChange={()=>{this.changeHandler()}} value={this.state.word}/>
            <button onClick={()=>{this.addItem()}}>add item</button>
            <ul>
                {itemsElements}
            </ul>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);