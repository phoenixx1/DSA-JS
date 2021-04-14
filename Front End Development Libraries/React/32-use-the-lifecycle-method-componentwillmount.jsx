class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentWillMount() {
    // Change code below this line
    console.log(this.state.activeUsers);
    setTimeout(() => {
      this.setState({
        activeUsers: 1273,
      });
    }, 2500);
    // Change code above this line
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
