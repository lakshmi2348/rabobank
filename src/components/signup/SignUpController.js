import React from "react";
import SignUpForm from "./view/SignUpForm";
import { submitForm } from "./model/SignUpModel";
import { isValidEmail } from "../passwordValidator/emailValidator";
import { isValidPassword } from "../passwordValidator/passwordValidator"

export default class SignUpController extends React.Component {
    static propTypes = {

    };

    static defaultProps = {

    };

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
        this.emailValidator = this.emailValidator.bind(this);
        this.passwordValidator = this.passwordValidator.bind(this);
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

    emailValidator (event) {
        const isValid = isValidEmail(event.target.value);
        const email = isValid ? {email: "please enter a valid email"} : {};
        this.handleChange(event, email);
        this.setState({
            errors : {
                ...email
            }
        });
    }

    passwordValidator (event) {
        const isValid = isValidPassword(event.target.value, this.state.user);
        const password = isValid ? { password: "Password should be a minimum of eight characters, must contain a uppercase and lowercase letter, should not contain firstname or lastname." } : {};
        this.handleChange(event, password);
        this.setState({
            errors : {
                ...password
            }
        })
    }

    handleChange(event, item) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;
        this.setState({
            user,
            errors: item
        });
    }
    
    handleSubmit(event) {
        const submitDone = submitForm(this.state.user);
        if (submitDone) {
            this.setState({
                user: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                },
                errors: {}
            });
        }
        event.preventDefault();
    }

    render () {
        return SignUpForm(this);
    }
}