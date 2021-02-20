import { useState } from 'react';
import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Colors = () => {
  toast.configure();
  const [colorCodes] = useState([
    '#33D868',
    '#9d65ff',
    '#F12E90',
    '#e74a25',
    '#7a3f71',
    '#3498db',
    '#5555F7',
    '#1abc9c',
    '#e84393',
    '#718093',
    '#273c75',
    '#34e7e4',
  ]);

  const copyColor = (e) => {
    let color = e.target.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(color);
      navigator.clipboard.readText();
      toast(`Color: ${color} copied`, {
        position: 'top-center',
        transition: Slide,
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <div className="title text-center my-4">
            <h1>My Favorite Colors</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        {colorCodes.map((color, index) => (
          <div className="col-sm-3 m-0 p-0" key={index}>
            <div
              className="color text-light fs-4 text-center d-flex justify-content-center align-items-center"
              style={{ background: color }}
              onClick={copyColor}
            >
              {color}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
