import React, {useState} from 'react'
import { Input, Space } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")

    const searchHandler = (event) => {
        setSearchTerm(event.target.value)
        props.refreshFunction(event.currentTarget.value)
    }


    return (
        <div>
             <Search 
                placeholder="input search text" 
                onChange={searchHandler} 
                style={{ width: 200}} 
                value={SearchTerm}
             />
        </div>
    )
}

export default SearchFeature
