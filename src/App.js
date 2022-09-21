import Marketing from "./components/Marketing";
import data from "./data";
import Header from "./components/Header";
import Support from "./components/Support";
import { useEffect, useState } from "react";
import Management from "./components/Management";
import Projects from "./components/projects/Projects";
import ProjectsSupport from "./components/projects/ProjectsSupport";
import ProjectsManage from "./components/projects/ProjectsManage";
import Flash from "./components/Flash";
import Footer from "./components/Footer";

// ...

let mappedDataMarketing = data.users.map((items) => <Marketing {...items} />);
let mappedDataSupport = data.users.map((items) => <Support {...items} />);
let mappedDataManage = data.users.map((items) => <Management {...items} />);

function App() {
  const [symbol, setSymbol] = useState(false);
  const [symbolSupport, setSymbolSupport] = useState(false);
  const [symbolManage, setSymbolManage] = useState(false);
  if (symbol && symbolManage) {
    window.scroll(0, 0);
    document.location.reload();
  }
  if (symbol && symbolSupport) {
    window.scroll(0, 0);
    document.location.reload();
  }
  if (symbolSupport && symbolManage) {
    window.scroll(0, 0);
    document.location.reload();
  }

  // Reset
  function handleReset() {
    window.scroll(0, 0);
    document.location.reload();
  }

  // Conditional Render
  const [selected, setSelected] = useState(false);
  const [selectedSupport, setSelectedSupport] = useState(false);
  const [selectedManage, setSelectedManage] = useState(false);

  // Set all collapse buttons to false if another button is pressed.
  // This is still pretty glitchy, there is definately a better way of doing this.
  useEffect(() => {
    if (selectedManage) {
      setSelected(false) &&
        setSelectedSupport(false) &&
        setSymbolSupport(false) &&
        setSymbolManage(false) &&
        setSymbol(false);
    }
  }, [selectedManage]);

  useEffect(() => {
    if (selectedSupport) {
      setSelected(false) &&
        setSelectedManage(false) &&
        setSymbolSupport(false) &&
        setSymbolManage(false) &&
        setSymbol(false);
    }
  }, [selectedSupport]);

  useEffect(() => {
    if (selected) {
      setSelectedManage(false) &&
        setSelectedSupport(false) &&
        setSymbolSupport(false) &&
        setSymbolManage(false) &&
        setSymbol(false);
    }
  }, [selected]);

  // Marketing Team
  function handleSymbol() {
    if (selectedSupport || selectedManage) {
      setSelectedSupport(false) && setSelectedManage(false);
    }
    setSymbol((prev) => !prev);
    setSelected((prev) => !prev);
  }

  // Support Team
  function handleSymbolSupport() {
    if (selected || selectedManage) {
      setSelected(false) && setSelectedManage(false);
    }
    setSymbolSupport((prev) => !prev);
    setSelectedSupport((prev) => !prev);
  }

  // Management Team
  function handleSymbolManage() {
    if (selected || selectedSupport) {
      setSelected(false) && setSelectedSupport(false);
    }
    setSymbolManage(true);
    setSelectedManage((prev) => !prev);
  }

  function formatAMPM(date) {
    var hours = date.getHours() - 5;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  console.log(formatAMPM(new Date()));

  let handleSelect =
    selected && !selectedSupport && !selectedManage
      ? "btn btn-success"
      : "btn btn-dark";
  let handleSelectSupport =
    selectedSupport && !selectedManage && !selected
      ? "btn btn-success"
      : "btn btn-dark";
  let handleSelectManage =
    selectedManage && !selectedSupport && !selected
      ? "btn btn-success"
      : "btn btn-dark";

  return (
    <div className="App">
      <Header />
      <div className="app">
        <div className="appBtns">
          <br />
          {
            // Marketing Team Collapse
          }
          <a
            class={handleSelect}
            data-bs-toggle="collapse"
            href="#marketingTeam"
            role="button"
            aria-controls="marketingTeam"
            onClick={handleSymbol}
          >
            Marketing Team
          </a>
          {
            // Support Team Collapse
          }

          <a
            class={handleSelectSupport}
            data-bs-toggle="collapse"
            href="#supportTeam"
            role="button"
            aria-expanded="false"
            aria-controls="supportTeam"
            onClick={handleSymbolSupport}
          >
            Support Team
          </a>

          {
            // Management Team Collapse
          }
          <a
            class={handleSelectManage}
            data-bs-toggle="collapse"
            href="#supportManage"
            role="button"
            aria-expanded="false"
            aria-controls="supportManage"
            onClick={handleSymbolManage}
          >
            Management Team
          </a>
          <a
            id="callToAction"
            class="btn btn-dark"
            href="#supportManage"
            role="button"
            onClick={handleReset}
          >
            Team Call to Action
          </a>

          <div class="collapse" id="marketingTeam">
            <div class="card card-body">{mappedDataMarketing}</div>
          </div>
          <div class="collapse" id="supportTeam">
            <div class="card card-body">{mappedDataSupport}</div>
          </div>
          <div class="collapse" id="supportManage">
            <div class="card card-body">{mappedDataManage}</div>
          </div>
        </div>
        {!selected && !selectedManage && !selectedSupport && <Flash />}
        {
          // Conditional rendering.  This is how the TODO content is rendered
        }
        <div>
          <div className="conditionalRender">
            {symbol ? (
              <div>
                <h4>Road Map to Success</h4>updated yesterday @{" "}
                {formatAMPM(new Date())}{" "}
              </div>
            ) : null}
            {symbolSupport ? (
              <div>
                <h4>Road Map to Success</h4>updated yesterday @{" "}
                {formatAMPM(new Date())}{" "}
              </div>
            ) : null}
            {symbolManage ? (
              <div>
                <h4>Road Map to Success</h4>updated yesterday @{" "}
                {formatAMPM(new Date())}{" "}
              </div>
            ) : null}

            {symbol || symbolSupport || symbolManage ? (
              <div id="flex">
                <p id="taskTitles">Tasks</p>
                <p id="taskTitles">InProgress</p>
                <p id="taskTitles">Completed</p>
              </div>
            ) : null}
            {symbol ? <Projects /> : !(<Projects />)}
            {symbolSupport ? <ProjectsSupport /> : !(<ProjectsSupport />)}
            {symbolManage ? <ProjectsManage /> : !(<ProjectsManage />)}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
