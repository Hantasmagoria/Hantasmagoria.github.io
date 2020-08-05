//   ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄               ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
//  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌             ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌ ▐░▌           ▐░▌ ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌
//  ▐░▌          ▐░▌       ▐░▌  ▐░▌         ▐░▌  ▐░▌          ▐░▌       ▐░▌
//  ▐░▌          ▐░▌       ▐░▌   ▐░▌       ▐░▌   ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌
//  ▐░▌          ▐░▌       ▐░▌    ▐░▌     ▐░▌    ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
//  ▐░▌          ▐░▌       ▐░▌     ▐░▌   ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀█░█▀▀
//  ▐░▌          ▐░▌       ▐░▌      ▐░▌ ▐░▌      ▐░▌          ▐░▌     ▐░▌
//  ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌       ▐░▐░▌       ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌      ▐░▌
//  ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌        ▐░▌        ▐░░░░░░░░░░░▌▐░▌       ▐░▌
//   ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀          ▀          ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀

class Cover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {this.props.loggedIn ? (
          <SideNav />
        ) : (
          <LoginScreen
            loggedIn={this.props.loggedIn}
            loginLogout={this.props.loginLogout}
          />
        )}
      </React.Fragment>
    );
  }
}

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: this.props.loggedIn,
      uname: "",
      upass: ""
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.loginLogout(this.state.uname, this.state.upass);
  };

  render() {
    return (
      <div className="card card-login mx-auto text-center bg-dark">
        <div className="card-header mx-auto bg-dark">
          <span className="logo_title mt-5"> Access Restricted </span>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                placeholder="Identity"
                className="form-control"
                id="Username"
                name="uname"
                value={this.state.uname}
                onChange={this.handleChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                placeholder="Secret Code"
                className="form-control"
                id="Password"
                name="upass"
                value={this.state.upass}
                onChange={this.handleChange}
              />
              <input
                type="submit"
                className="btn login_btn btn-outline-danger"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <a href="../">Back to Home</a>
      </div>
    );
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄        ▄  ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░▌      ▐░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌░▌     ▐░▌ ▀▀▀▀█░█▀▀▀▀
// ▐░▌          ▐░▌       ▐░▌▐░▌▐░▌    ▐░▌     ▐░▌     ▐░▌          ▐░▌▐░▌    ▐░▌     ▐░▌
// ▐░▌          ▐░▌       ▐░▌▐░▌ ▐░▌   ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌ ▐░▌   ▐░▌     ▐░▌
// ▐░▌          ▐░▌       ▐░▌▐░▌  ▐░▌  ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌  ▐░▌  ▐░▌     ▐░▌
// ▐░▌          ▐░▌       ▐░▌▐░▌   ▐░▌ ▐░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀▀▀ ▐░▌   ▐░▌ ▐░▌     ▐░▌
// ▐░▌          ▐░▌       ▐░▌▐░▌    ▐░▌▐░▌     ▐░▌     ▐░▌          ▐░▌    ▐░▌▐░▌     ▐░▌
// ▐░█▄▄▄▄▄▄▄▄▄ ▐░█▄▄▄▄▄▄▄█░▌▐░▌     ▐░▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄▄▄ ▐░▌     ▐░▐░▌     ▐░▌
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌      ▐░░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌      ▐░░▌     ▐░▌
//  ▀▀▀▀▀▀▀▀▀▀▀  ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀       ▀       ▀▀▀▀▀▀▀▀▀▀▀  ▀        ▀▀       ▀

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return "";
  }
}

//  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌
// ▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌
// ▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌
// ▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌
// ▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀▀▀ ▐░█▀▀▀▀▀▀▀▀▀
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
// ▐░▌       ▐░▌▐░▌          ▐░▌
//  ▀         ▀  ▀            ▀

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0,
      user: undefined
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user != undefined && !this.state.loggedIn) {
      this.setState({ loggedIn: true });
    }
  }

  loginLogout = async (uname, upass) => {
    return fetch("https://expansiondb.herokuapp.com/login/", {
      body: JSON.stringify({
        uname: uname,
        upass: upass
      }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(jsonRes => {
        this.setState({ user: jsonRes[0] });
      });
  };

  render() {
    return (
      <React.Fragment>
        <Cover loggedIn={this.state.loggedIn} loginLogout={this.loginLogout} />
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
