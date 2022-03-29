
import './App.css';
import './main.js';

function App() {
  return (
    <div className="App">
      <div class="TextArea">
        <a class="content">
          Trend line
          Main article: Trend estimation
          A trend line represents a trend, the long-term movement in time series data after other components have been accounted for. It tells whether a particular data set (say GDP, oil prices or stock prices) have increased or decreased over the period of time. A trend line could simply be drawn by eye through a set of data points, but more properly their position and slope is calculated using statistical techniques like linear regression. Trend lines typically are straight lines, although some variations use higher degree polynomials depending on the degree of curvature desired in the line.

          Trend lines are sometimes used in business analytics to show changes in data over time. This has the advantage of being simple. Trend lines are often used to argue that a particular action or event (such as training, or an advertising campaign) caused observed changes at a point in time. This is a simple technique, and does not require a control group, experimental design, or a sophisticated analysis technique. However, it suffers from a lack of scientific validity in cases where other potential changes can affect the data.
        </a>
      </div>
      <div class="keyboard">
        <ul class="row row-0">
          <li class="pinky" id="esc">ESC</li>
          <li class="pinky" id="1">1</li>
          <li class="ring" id="2">2</li>
          <li class="middle" id="3">3</li>
          <li class="pointer1st" id="4">4</li>
          <li class="pointer2nd" id="5">5</li>
          <li class="pointer2nd" id="6">6</li>
          <li class="pointer1st" id="7">7</li>
          <li class="middle" id="8">8</li>
          <li class="ring" id="9">9</li>
          <li class="pinky" id="10">0</li>
          <li class="pinky" >-</li>
          <li class="pinky" >+</li>
          <li class="pinky" id="back">BACK</li>
        </ul>
        <ul class="row row-1">
          <li class="pinky" id="tab">TAB</li>
          <li class="pinky" id="Q">Q</li>
          <li class="ring" id="W">W</li>
          <li class="middle" id="E">E</li>
          <li class="pointer1st" id="R">R</li>
          <li class="pointer2nd" id="T">T</li>
          <li class="pointer2nd" id="Y">Y</li>
          <li class="pointer1st" id="U">U</li>
          <li class="middle" id="I">I</li>
          <li class="ring" id="O">O</li>
          <li class="pinky" id="P">P</li>
          <li class="pinky" >[</li>
          <li class="pinky" >]</li>
          <li class="pinky" >\</li>
        </ul>
        <ul class="row row-2">
          <li class="pinky" id="caps">CAPS</li>
          <li class="pinky" id="A">A</li>
          <li class="ring" id="S">S</li>
          <li class="middle" id="D">D</li>
          <li class="pointer1st" id="F">F</li>
          <li class="pointer2nd" id="G">G</li>
          <li class="pointer2nd" id="H">H</li>
          <li class="pointer1st" id="J">J</li>
          <li class="middle" id="K">K</li>
          <li class="ring" id="L">L</li>
          <li class="pinky" >:</li>
          <li class="pinky" >''</li>
          <li class="pinky" id="enter">ENTER</li>
        </ul>
        <ul class="row row-3">
          <li class="pinky" id="left-shift">SHIFT</li>
          <li class="pinky" id="Z">Z</li>
          <li class="ring" id="X">X</li>
          <li class="middle" id="C">C</li>
          <li class="pointer1st" id="V">V</li>
          <li class="pointer2nd" id="B">B</li>
          <li class="pointer2nd" id="N">N</li>
          <li class="pointer1st" id="M">M</li>
          <li class="middle" >,</li>
          <li class="ring" >.</li>
          <li class="pinky" >;</li>
          <li class="pinky" id="right-shift">SHIFT</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
