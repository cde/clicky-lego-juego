import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Columns from "./components/Columns";
// import Header from "./components/Header";
import legos from "./legos.json";
import "./App.css";
import Hero from "./components/Hero";

class App extends Component {
    // Setting this.state.cards to the cards json array
    state = {
        legos,
        clicked: [],
        score: 0,
        highscore: 0,
        message: ""
    };

    resetGame = (currentScore, legosClicked ) => {
        let message = "";
        if (currentScore === legos.length){
           message =  "You Win!!!"
        }else{
            message = currentScore === 0 ? "Oh no... You Lost :( " : "You Got this! :D"
        }
        this.setState({
            legos: this.state.legos.sort(function(a, b) {
                return 0.5 - Math.random();
            }),
            clicked: legosClicked,
            score: currentScore,
            message: message
        });
    }
    handleOnClick = event => {

        console.log(event.target)
        const currentLego = event.target.alt;

        let legosClicked = this.state.clicked;
        let alreadyClicked = legosClicked.indexOf(currentLego) > -1;

        if(alreadyClicked){
            this.resetGame(0, [])

        }else{
            let legosClicked = this.state.clicked.concat(currentLego);
            this.resetGame(this.state.score + 1, legosClicked)
        }

        console.log(this.state);
    };

    // Map over this.state.cards and render a cardCard component for each card object
    render() {
        return (
            <Wrapper>
                <Hero score={this.state.score} message={this.state.message} />
                <Columns>
                    {this.state.legos.map(card => (
                        <Card
                            // clickCount={this.clickCount}
                            handleOnClick={this.handleOnClick}
                            id={card.id}
                            key={card.id}
                            image={card.image}
                            name={card.name}
                        />
                    ))}
                </Columns>

            </Wrapper>
        );
    }
}

export default App;