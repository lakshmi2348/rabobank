import React from "react";
import "./style.scss";

function SignUpForm(component) {
  console.log('çomponent', component.state)
  const { user , errors } = component.state;
  
  return (
    <div className="rabobank-signup" data-testid="rabobank-signup">
      <h1>Sign Up</h1>
      {errors.message && <p className="rabobank-signup--validation-error">{errors.message}</p>}

      <form onSubmit={component.handleSubmit}>
      <table>
        <tbody>
          <tr className="rabobank-signup-input">  
            <td className="rabobank-signup-input--header">First Name</td>
            <td className="rabobank-signup-input--text"> 
              <input type="text" name="firstName"  id="firstName" value={user.firstName} onChange={component.handleChange} required/>
            </td>
          </tr>
          <tr className="rabobank-signup-input">  
            <td className="rabobank-signup-input--header">Last Name</td> 
            <td className="rabobank-signup-input--text">
              <input type="text" name="lastName"  id="lastName" value={user.lastName} onChange={component.handleChange} required/>
            </td> 
          </tr>
          <tr className="rabobank-signup-input">  
            <td className="rabobank-signup-input--header">Email</td> 
            <td className="rabobank-signup-input--text">
              <input type="email" name="email"  id="email" placeholder="email" value={user.email} onChange={component.emailValidator} required/>
              {errors?.email && <div className="rabobank-signup--validation-error">{errors?.email}</div>}
            </td>
          </tr>
          <tr className="rabobank-signup-input">  
            <td className="rabobank-signup-input--header">Password</td>
            <td className="rabobank-signup-input--text">
              <input type="password" name="password"  id="password" placeholder="password" value={user.password} onChange={component.passwordValidator} required/>
              {errors?.password && <div className="rabobank-signup--validation-error">{errors?.password}</div>}
            </td>
          </tr>
          <tr>
            <td colSpan="2" align="center" className="rabobank-signup-input--submit">
              <input className="rabobank-signup-input--submit-button" type="submit" value="Submit" />
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default SignUpForm;
