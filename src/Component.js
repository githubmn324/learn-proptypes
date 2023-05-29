import PropTypes from 'prop-types';

function Component({name, age}) {
    return `In 5 years, ${name} will be ${age + 5}`;
}

Component.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}

// generally try not to use any
// PropTypes.any 

// one of the types spcified
// PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
// ])              

// Specify value options
// PropTypes.oneOf([
//     '"Loading',
//     "Ready"
// ])

// shape = allow additional rpoperties to be passed by parent components
// Component.PropTypes = {
//     person: PropTypes.shape({
//         name: PropTypes.string,
//         age: PropTypes.number,
//     })
// }
// exact = need to pass exact same object 
// Component.PropTypes = {
//     person: PropTypes.exact({
//         name: PropTypes.string,
//         age: PropTypes.number,
//     })
// }

// specify data types of elements in the array
// PropTypes.arrayOf(
//     PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// )  

// Component
// PropTypes.element   // can be used to define child component
// PropTypes.elementType   // spcify by the name of the component

// PropTypes.node      // anything that is renderable string, array etc.

export default Component