import axios from 'axios'
import React, { Component } from 'react'

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userNember: "",
            userPass: "",
        
        }
    }


    getnumber = (e) => {
        this.setState({
            userNember: e.target.value

        })

    }
    getpwd = (e) => {
        this.setState({
            userPass: e.target.value

        })
    }


    tologin() {
        console.log(this.state.userNember);
        console.log(this.state.userPass);
        axios({
            url: "http://5qp2h6.natappfree.cc/login",
            method: "post",
            data: {
                id: this.state.userNember,
                password: this.state.userPass
            }
        }).then(res => {
          if(res.data.statusCode===200){
           this.props.history.push({pathname:'/Main'})

          }

        })

    }
    render() {
        // console.log("this.state.backnumber",this.state.backnumber);
        return (
            <div>
                <input type="text" onChange={(e) => this.getnumber(e)} placeholder="输入用户名" />

                <input type="text" onChange={(e) => this.getpwd(e)} placeholder="密码" />
                <input type="button" value="登录" onClick={this.tologin.bind(this)} />

                <div>{this.state.userNember}</div>
                <div>{this.state.userPass}</div>
                
               
            </div>
        )
    }
}
