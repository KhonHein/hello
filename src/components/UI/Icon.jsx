
export let data = null;
const Icon = ({name,icon},index) => {
   
   
  
  return (
         <li  className={`sidebar_item ${name} `} key={index}>{icon}</li>
  )
}

export default Icon