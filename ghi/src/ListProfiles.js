import React from 'react';

function ProfileColumn(props) {
    return (
        <div className="col">
            {props.list.map(data => {
                const dog = data;
                return (
                    <div key={dog.id} className="card mb-3 shadow card text-white bg-dark">
                        <img src={`https://puppy-love-assets.s3.amazonaws.com/us-west-1/${dog.owner.id}/${dog.name}`} className="card-img-top" alt='dog' />
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

class ListProfiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileColumns: [[], [], []]
        };
    }

    async componentDidMount() {
        const url = 'http://localhost:8080/api/dogs/';

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                const requests = [];
                for (let dog of data.dogs) {
                    const detailUrl = `http://localhost:8080/api/dogs/${dog.id}/`;
                    requests.push(fetch(detailUrl));
                }
                const responses = await Promise.all(requests);
                const profileColumns = [[], [], []];
                let i = 0;
                for (const dogResponse of responses) {
                    if (dogResponse.ok) {
                        const details = await dogResponse.json();
                        profileColumns[i].push(details);
                        i = i + 1;
                        if (i > 2) {
                            i = 0;
                        }
                    } else {
                        console.error(dogResponse);
                    }
                }
                this.setState({ profileColumns: profileColumns });
            }
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <h2>Puppy Profiles</h2>
                    <div className="row">
                        {this.state.profileColumns.map((dogList, index) => {
                            return (
                                <ProfileColumn key={index} list={dogList} />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default ListProfiles;


