import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Error from './../../components/Error';
import Loader from './../../components/Loader';

import Rocket from './../../components/Rocket';

// const GET_ROCKET_INFO = gql`
//     query GET_ROCKET_INFO($rocketId: ID!)
//     {
//         rocket(id: $rocketId) {
//             name
//             height {
//                 feet
//                 meters
//             }
//             stages
//             cost_per_launch
//             engines {
//                 type
//                 number
//                 propellant_1
//                 propellant_2
//                 thrust_to_weight
//             }
//         }
//     }
// `;
const GET_ROCKET_INFO = gql`
    {
        rocket(id: "5e9d0d95eda69973a809d1ec") {
            name
            height {
                feet
                meters
            }
            stages
            cost_per_launch
            engines {
                type
                number
                propellant_1
                propellant_2
                thrust_to_weight
            }
        }
    }
`;

const RocketPage = ({ match }) => {
    // const rocketID = match.params.id;
    // const starship = "starship"
    const { data, loading, error } = useQuery(GET_ROCKET_INFO);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <Error error={error} />;
    }

    console.log(data.rocket.name);
    // console.log("WHATEVER")

    return (
        <Rocket rocket={data.rocket} />
    );
};

export default RocketPage;
