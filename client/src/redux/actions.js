import axios from 'axios';

export const exampleFunction = example =>{
    return {
        type: "EXAMPLE",
        payload: example
    }
}