import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import SearchItem from "../../components/searchItem/SearchItem";


import "./list.css"

const List = (props)=>{
    const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [opendDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);


    return(
        <div>
            <Navbar />
            <Header type ="list" />

            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <div className="listTitle">Search</div>
                        <div className="listItem">
                            <label htmlFor="">Destination</label>
                            <input type="text" name="" placeholder={destination}  />
                        </div>
                        <div className="listItem">
                            <label htmlFor="">Check in Date.</label>
                            <span onClick={() => setOpenDate(!opendDate)}>
                               {`
                               ${format(
                                date[0].startDate,
                                "dd/MM/yyyy"
                               )}
                               `} to ${format(date[0].endDate, "dd/MM/yyyy")}
                            </span>
                           {opendDate && <DateRange 
                            onChange={(item) => setDate([item.selection]) }
                            minDate = {new Date()}
                            ranges = {date}
                            />}
                        </div>
                        <div className="listItem">
                            <label htmlFor="">Options</label>
                            <div className="lsOptions">
                                <span className="lsOptionsText">
                                    Min Price per night
                                </span>
                                <input type="number" lsOptionInput />
                            </div>
                            <div className="lsOptionItem">
                            <span className="lsOptionText">
                                Max price  per night 
                            </span>
                            <input type="number" className="lsOptionInput" />
                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Adult</span>
                                <input type="number"
                                min={1} 
                                placeholder ={options.adult}
                                className = "lsOptionInput"
                                />
                                
                            </div>

                            <div className="lsOptionItem">
                                <span className="lsOptionText">Children</span>
                                <input type="number"
                                min={0} 
                                placeholder ={options.children}
                                className = "lsOptionInput"
                                />
                                
                            </div>

                            <div className="lsOptionItem">
                            <span className="lsOptionText">room</span>
                                <input type="number"
                                min={1} 
                                placeholder ={options.room}
                                className = "lsOptionInput"
                                />
                                
                            </div>
                        </div>
                    </div>
                    <div className="listBtn">
                    <Button button= "Book"/>
                    </div>
                </div>
                <div className="listResult">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />

                </div>
            </div>
        </div>
    )
}

export default List;