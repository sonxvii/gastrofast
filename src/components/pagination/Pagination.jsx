import "./Pagination.css";
import { NavArrowRight, NavArrowLeft } from "iconoir-react";

export function Pagination() {
    return(
        <div className="pagination">
            <NavArrowLeft className="icons pagination__nav"/>
            <div className="pagination__pages">
            <a rel="stylesheet" href="#">1</a> 
            <a rel="stylesheet" href="#">2</a> 
            <a rel="stylesheet" href="#">3</a> 
            <a rel="stylesheet" href="#">...</a> 
            </div>
            <NavArrowRight className="icons pagination__nav"/>
        </div>
    );
};