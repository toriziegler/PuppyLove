import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: 'black',
    textDecoration: "none"
}
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],

        };
        // this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({ name: value });
    }

    render() {
        return (
            <div className="App">
                <div
                    className="container-fluid d-flex align-items-center"
                    style={{
                        height: "100vh",
                        backgroundImage:
                            "url(https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }}
                >
                    <div>
                        <p><Link style={linkStyle} to="/ownerinfo" className="mainlink">
                            <button type="button">Edit your information</button></Link>
                            <Link style={linkStyle} to="/doginfo" className="mainlink">
                                <button type="button">Edit your dog information</button></Link></p>
                        <div>
                            <img src="https://puppy-love-assets.s3.amazonaws.com/media/Willie_image.webp" alt="Willie Da Dog" height={200} width={200} />
                        </div>
                        <h1>Profile</h1>
                        <table className="table table-success table-striped">
                            <thead>
                                {/* Done just like list from car car */}
                                <tr>
                                    <th>Description</th>
                                    <th>Insert Description of Dog</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Insert Dog Name</th>
                                </tr>
                                <tr>
                                    <th>Breed</th>
                                    <th>Insert Breed</th>
                                </tr>
                                <tr>
                                    <th>Size</th>
                                    <th>Insert Size</th>
                                </tr>
                                <tr>
                                    <th>Gender</th>
                                    <th>Insert Gender</th>
                                </tr>
                            </thead>
                        </table>
                        <h2>Pictures</h2>
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>Pictures</th>
                                    <th><button>Upload your pictures</button></th>
                                </tr>
                            </thead>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        );
    }
}

export default Profile;
