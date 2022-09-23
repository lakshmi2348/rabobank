import React from "react";
import SignUpForm from "./view/SignUpForm";
import { submitForm } from "./model/SignUpModel";
import { isValidEmail } from "../validator/emailValidator";
import { isValidPassword } from "../validator/passwordValidator";
import { message } from "../translations/Message";

export default class SignUpController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount () {
        console.log("component did mount");
    }

    async componentDidUpdate () {
        console.log("componentDidUpdate");
    }

    componentWillUnmount () {
        console.log("componentWillUnmount");
    }

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
            errors: {}
        });
    }
    
    handleSubmit(event) {
        const isValidMail = isValidEmail(this.state.user.email);
        const isValidPwd= isValidPassword(this.state.user.password, this.state.user);
        const getMessages = message();

        if (isValidPwd && isValidMail) {
            submitForm(this.state.user);
            this.setState({
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                },
                errors: {}
            });
        } else {
            if (!isValidMail && !isValidPwd) {
                this.setState({
                    errors: {
                        email: getMessages.email,
                        password: getMessages.password
                    }
                })
            }
            else if (!isValidPwd) {
                this.setState({
                    errors: {
                        password: getMessages.password
                    }
                })
            } else if (!isValidMail) {
                this.setState({
                    errors: {
                        email: getMessages.email
                    }
                })
            }
        }
        event.preventDefault();
    }

    render () {
        return SignUpForm(this);
    }
}