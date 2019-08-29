import { createContext } from 'react'

export const AllToolListContext = createContext()



// this snippet is for ToolCard.js testing
// useEffect(() => {
//     const id = props.MainPageprops.ownerid;
//     const specificTool = props.MainPageprops.tools.find(tool => `${tool.id}` === id)
//     if(specificTool) setCredentials(specificTool)
// }, [props.MainPageprops.tools, props.MainPageprops.ownerid])

// const deleteHandler = event => {
//     event.preventDefault();

//     axios.delete(`https://bw-usemytools.herokuapp.com/data/tools/{id}`, userCredentials, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`} } )
//          .then(res => (console.log(res)))
//          .catch(err => console.log(err.response))
// }