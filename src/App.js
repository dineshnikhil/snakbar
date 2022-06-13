import './App.css';
import { useRef } from 'react';
import SnackBar from './components/SnackBar';

const snackbarType = {
  success: "success",
  fail: "fail"
}

function App() {
  const snackbarRef = useRef(null);
  return (
    <div className="App">
      <button onClick={() => {
        snackbarRef.current.show()
      }}>show snackbar</button>
      <SnackBar message="Action completed!" type={snackbarType.fail} ref={snackbarRef} />
    </div>
  );
}

export default App;
