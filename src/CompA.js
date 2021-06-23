import React from 'react';

// using function component 
function Compa(props)
{
    return(
        <div>
            <h1>{props.text.name}</h1>
            <h1>{props.text.age}</h1>

        </div>
    )
}

//using class component

// class Compa extends React.Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.props.text.name}</h1>
//                 <h1>{this.props.data}</h1>

//             </div>
//         )
//     }
// }

export default Compa;