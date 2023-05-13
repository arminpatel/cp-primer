import './App.css'
import data from '../data/data.json'
import { useState } from 'react'

function App() {
  const [week, setWeek] = useState("week0")
  return (
    <div>
      <div className ="header">
          <h1> CP Primer </h1>
          <div> A Primer course in Competitive Programming </div>
      </div>
      <center>
        <select className="dropdown-mobile" onChange={(e) => {setWeek(e.target.value)}} value={week}>
          {Object.keys(data).map((wk) => {
            return (
              <option key={wk} value={wk}> {data[wk]["title"]} </option>
            )
          })
          }
        </select>
      </center>
      <article className = "container-fluid">
        <aside>
          <nav>
            <ul>
              {Object.keys(data).map((wk) => {
                return (
                  <div key={wk}> 
                    <li><a data-week={wk} className="sidebar-link" onClick={(e) => {setWeek(e.target.dataset.week)}}> {data[wk]["title"]}
                    </a> </li>
                  </div>
                )
              })}
            </ul>
          </nav>
        </aside>
        <section>
          <figure>
            <table>
              <thead>
                <tr>
                  <th> {data[week]["title"]} </th>
                  <th> About </th>
                  <th> Task 0 </th>
                  <th> Task 1 </th>
                  <th> Task 2 </th>
                </tr>
              </thead>

              <tbody>
                { Object.keys(data[week]).map((day) => {
                    if(day == "title") return;
                    return (
                      <tr key = {day}>
                        { Object.keys(data[week][day]).map((field) => {
                          if(field.startsWith("task")) {
                            return (
                              <td key = {week+day+field}> 
                                <a href={data[week][day][field]["link"]}>
                                  {data[week][day][field]["text"]}
                                </a> 
                              </td>
                            )
                          } else {
                            return (
                              <td key = {week+day+field}> {data[week][day][field]} </td>
                            )
                          }
                        })
                        }
                      </tr>
                    )
                  })
                } 
              </tbody>
            </table>
          </figure>
        </section>
      </article>
    </div>
  )
}

export default App
