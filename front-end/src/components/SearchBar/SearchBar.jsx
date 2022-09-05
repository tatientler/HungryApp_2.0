import { useState } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";

import './SearchBar.css'

export function SearchBar() {
    const [value, setValue] = useState('')
    
    return (
        <>
            <div className="container">
                <div className="search-filter-wrapper m-2">
                    <div className="row ms-1 me-1 mb-1">
                        <div className="d-flex search col-8">
                            <input 
                                className="search-bar p-2" 
                                type="search" 
                                name="Search" 
                                id="search" 
                                //value={value}
                                //onChange={(e) => setValue(e.target.value)}
                                placeholder="Pesquisar" 
                            />

                            <button className="search-btn" id="search-btn" type="submit">
                                <AiOutlineSearch className="icon" />
                            </button>
                        </div>

                        <div className="d-flex justify-content-center col-4">
                            <button className="filter-btn">
                                <BsFilterRight className="icon" />&nbsp;Filtros
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
