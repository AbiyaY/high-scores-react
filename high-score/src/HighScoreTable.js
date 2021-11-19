import React from 'react';


const HighScoreTable = ({ scores }) => {
    return (

        <div className="table">
            {scores.map((country, i) => {
                return (
                    <div key={i} className="each_table">
                        <h1 >HIgh Scores : {country.name}</h1> 
                        <table className="table table-bordered">
                        <thead>
                            <tr>                            
                            <th scope="col">Names</th>
                            <th scope="col">Scores</th>
                            </tr>
                        </thead>
                        <tbody>
                            {country.scores.map((score, i) => {
                                return (
                                    <tr key={i}>
                                    <td >{score.n}</td>
                                    <td>{score.s}</td>                                
                                    </tr>                            
                                )
                            })}                           
                        </tbody>
                        </table>                    
                    </div>
                );
            }
            )}   

        </div>
    );
};

export default HighScoreTable;


  