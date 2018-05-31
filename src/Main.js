import React, {
    Component
} from 'react';
import "./main.css"
import Userpost from './Userpost';
import Botpost from './Botpost';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            posts: []
        }
    }

    componentDidMount() {
        this.props.socket.on('bot message', msg => {
            const posts = [...this.state.posts, msg];
            this.setState({ posts });
            
        });
    }

    handleChange = (event) => {
        const inputValue = event.target.value;
        this.setState({ inputValue });
    }

    sendText = () => {
        const sendJSON = {
            text: this.state.inputValue
        }

        this.setState({ inputValue: "" })
        const posts = [...this.state.posts, this.state.inputValue];
            this.setState({ posts });

        this.props.socket.emit('send message', sendJSON);

    }

    render() {
        console.log(this.state);
        
        return (
            <div className="row" >
                <div className="col-md-4  d-none d-md-block leftside">
                    <img id="edit" src={require('./img/edit.svg')} alt="slika" />
                    <img id="profile" src={require('./img/profile.svg')} alt="slika" />
                </div>

                <div className="col-md-4  col-12 chat" >
                   <div className="wrap">
                    <img id="spartanlogo" src={require('./img/spartan.png')} alt="slika" />
                    {this.state.posts.map((post, index) => {
                        if (index % 2 === 0) {
                            return <Botpost post={post} key={index} />
                        } else {
                            return <Userpost post={post} key={index} />
                        }
                    })}
                   </div>
                    <div className="input-group input col-10 offset-1">
                        <div className="input-group-prepend">
                            <span className=" hamburger input-group-text " id="basic-addon1"> <i className="fas fa-bars"> </i></span>
                        </div>
                        <input onChange={this.handleChange} value={this.state.inputValue} type="text" className="form-control" placeholder="Enter your message here..." aria-label="message" aria-describedby="basic-addon1" />
                        <div className="input-group-append" >
                            <button onClick={this.sendText} className="btn btn-primary" type="button" > Send < i className="fab fa-telegram-plane" > </i></button >
                        </div>
                    </div>
  
                   
                </div>

                <div className="col-md-4 d-none d-md-block  rightside" >

                </div>
            </div>
        );
    }

}

export default Main;