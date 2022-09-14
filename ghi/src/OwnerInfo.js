import React from 'react';
import { Link } from 'react-router-dom';
class OwnerInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            description: '',
            state: '',
            states: [],
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const URL = 'http://localhost:8100/api/states/'
        const response = await fetch(URL);
        if (response.ok) {
            const data = await response.json();
            this.setState({ states: data.states });
        }
    }
    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.states
        console.log(data)

        const url = 'http://localhost:8100/api/owners/';
        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const response = await fetch(url, fetchConfig);
        if (response.ok) {
            this.setState({
                name: '',
                email: '',
                phone: '',
                description: '',
                state: '',
            });
        }
    }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }
    handleEmailChange(event) {
        const value = event.target.value;
        this.setState({ email: value });
    }
    handlePhoneChange(event) {
        const value = event.target.value;
        this.setState({ phone: value });
    }
    handleDescriptionChange(event) {
        const value = event.target.value;
        this.setState({ description: value });
    }
    handleStateChange(event) {
        const value = event.target.value;
        this.setState({ state: value });
    }
    render() {
        return (
            <div className="App">
                <div
                    className="container-fluid d-flex align-items-center"
                    style={{
                        height: "100vh",
                        backgroundImage:
                            "url(https://i.pinimg.com/736x/9d/66/d8/9d66d8de7bcb8fe0da9961df50a95c71--first-kiss-rottweiler-love.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div className="signup" id="signuptop">
                        <div className="card mx-auto" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h1>Owner Information</h1>
                                <hr />
                                <form onSubmit={this.handleSubmit} id="create-owner-form">
                                    <div className="form-floating mb-3">
                                        <input onChange={this.handleNameChange} value={this.state.name}
                                            placeholder="Name" required type="text" name="name"
                                            id="name" />
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input onChange={this.handleEmailChange} value={this.state.email}
                                            placeholder="Email" required type="email" name="email"
                                            id="uemail" />
                                    </div>

                                    <div className="form-floating mb-3" >
                                        <input onChange={this.handlePhoneChange} value={this.state.phone}
                                            placeholder="PhoneNumber" required type="text" name="phone"
                                            id="phone" />
                                    </div>

                                    <div className="form-floating mb-3" >
                                        <input onChange={this.handleDescriptionChange} value={this.state.description}
                                            placeholder="Description" required type="text" name="description"
                                            id="description" />
                                    </div>
                                    <div className="mb-3">
                                        <select onChange={this.handleStateChange} value={this.state.state} required name="state" id="state" className="form-select">
                                            <option value="">Choose Your State</option>
                                            {this.state.states.map((state) => {
                                                return (
                                                    <option key={state.id} value={state.abbreviation}>
                                                        {state.name}
                                                    </option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <Link to="/profile" className="mainlink"><button className="btn btn-primary"
                                        type="submit">Submit</button></Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default OwnerInfo;
