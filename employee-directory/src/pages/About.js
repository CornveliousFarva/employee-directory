import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchForm from "../components/SearchForm";

function About(){
    return (
        <div>
            <h1>Employee Directory</h1>
            <Hero></Hero>
            <SearchForm></SearchForm>
            
        </div>
    )
}

export default About