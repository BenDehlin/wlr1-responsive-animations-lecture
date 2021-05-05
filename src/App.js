import './App.css';
import Example from './components/Example'

function App() {
  // Each of our examples below is contained inside of a "big-box"
  // so that we can see the animation happening inside the container
  return (
    <div className="App">
      <div className="big-box">
        {/* Our first example is an example of a simple transition.
        if you go look at the styling of .small-box in our
        css you can see specifically what it's doing. */}
        <div className="small-box"></div>
      </div>
      <div className="big-box">
        {/* Our second example is a slightly complicated animation
        where the animated item starts in the top left, moves in
        a circle around the container, turns from a square to a
        circle and back, and spins slowly. To look at how we animated
        this take a look at the css for small-box-two as well as
        the my-animations keyframes. */}
        <div className="small-box-two">
        </div>
      </div>
      {/* This last box needed some state so we moved it into its
      own component. Check out ./components/Example.js for that */}
      <Example />
    </div>
  );
}

export default App;
