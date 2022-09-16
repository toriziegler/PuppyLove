import React from 'react';

function ProfileColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const dog = data;
                return (
                    <div key={dog.id} className="card mb-3 shadow card text-white bg-dark">
                        <img src="https://puppy-love-assets.s3.amazonaws.com/us-west-1/dogs/Willie_logo_2.jpg" alt="hi" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{dog.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                                {dog.breed}
                            </h6>
                            <p className="card-text">
                                {dog.description}
                            </p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Age: {dog.age}</li>
                            <li className="list-group-item">Gender: {dog.gender}</li>
                            <li className="list-group-item">Size: {dog.size}</li>
                            <li className="list-group-item">{dog.owner.email}</li>
                            <li className="list-group-item">{dog.owner.phone}</li>
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}

class ProfileCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owners: [],
            dogs: [],
            profileColumns: [[], [], []]
        };
        this.handleOwnerChange = this.handleOwnerChange.bind(this);
        this.profileColumns = this.profileColumns.bind(this);
    }


    async handleOwnerChange(event) {
        const value = event.target.value;
        await this.setState({ owner: value })
        this.profileColumns()
    }

    async profileColumns() {
        //const ownersDogsHost = `${process.env.REACT_APP_MONOLITH_API}`
        const ownersDogsHost = 'http://localhost:8080'
        const dogsResponse = await fetch(ownersDogsHost + `/api/owners_dogs/${this.state.owner}/`);
        if (dogsResponse.ok) {
            const dogsData = await dogsResponse.json();
            const requests = [];
            for (let dog of dogsData.dogs) {
                //const dogsHost = `${process.env.REACT_APP_MONOLITH_API}`
                const dogsHost = 'http://localhost:8080'
                const specificDogUrl = dogsHost + `/api/dogs/${dog.id}/`;
                requests.push(fetch(specificDogUrl));
            }
            const responses = await Promise.all(requests);
            const profileColumns = [[], [], []];
            let i = 0;
            for (const profileResponse of responses) {
                if (profileResponse.ok) {
                    const details = await profileResponse.json();
                    profileColumns[i].push(details);
                    i = i + 1;
                    if (i > 2) {
                        i = 0;
                    }
                } else {
                    console.error(profileResponse);
                }
            }
            this.setState({ profileColumns: profileColumns });
        }
    }

    async componentDidMount() {
        //const ownersHost = `${process.env.REACT_APP_MONOLITH_API}`
        const ownersHost = 'http://localhost:8080'
        const ownerResponse = await fetch(ownersHost + `/api/ownerVOs/`);
        try {
            if (ownerResponse.ok) {
                const ownerData = await ownerResponse.json();
                this.setState({
                    owners: ownerData.owners
                });
            };
        } catch (e) {
            console.error(e);
        }
    }


    render() {
        return (
            <>
                <div className="container">
                    <h2>Your Pup Profiles</h2>
                    <div className="mb-3">
                        <select onChange={this.handleOwnerChange} value={this.state.owner} name="owner" required id="owner" className="form-select">
                            <option value="">Which of your dogs would you like to see?</option>
                            {this.state.owners.map(owner => {
                                return (
                                    <option key={owner.id} value={owner.id}>
                                        {owner.name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="row">
                        {this.state.profileColumns.map((profileList, index) => {
                            return (
                                <ProfileColumn key={index} list={profileList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ProfileCard;
