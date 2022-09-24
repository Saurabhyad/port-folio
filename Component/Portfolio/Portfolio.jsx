import React from 'react'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <div className="project" id='Portfolio'>
        <span>Projects-</span>
        <span>➢Path finding Visualiser <a href="">Github</a></span>
        <span>HTML, CSS, Javascript, Node.js, Reactjs</span>
        <span>– Systematized algorithms to find the path between 2 points using A star(*), Dijkstra, etc while avoiding obstacles.</span>
        <span>– Implemented the concept of Heuristic function to come up with the best decision faster and more efficiently.</span>
        <span>➢Tic-Tac-Toe Game  <a href="">Github</a></span>
        <span>HTML, CSS, Javascript, Node.js, MongoDB</span>
        <span>– Programmed an unbeatable AI powered game using the MINIMAX algorithm(Backtracking) with 100% accuracy.</span>
        <span>– Utilised Alpha-beta pruning to decrease the number of nodes that are evaluated in its search tree making the AI fast.</span>
        <span>➢ portfolio website  <a href="">Github</a></span>
        <span>HTML, CSS, Javascript, Reactjs </span>
        <span>–This website just displays my skills, education,skills,work experience, projects etc.</span>
        <span>–For the development of this website I used React,Html,css technologies.</span>
        
        
      
        

    </div>
  )
}

export default Portfolio