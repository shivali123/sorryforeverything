import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { height } from "@mui/system";

export default function App(props) {
  const [openDialog, handleDisplay] = React.useState(false);
  const [yescount, setcount] = React.useState(0);
  const [nocount, setnocount] = React.useState(0);

  const [title, setitle] = React.useState('DID YOU FELT BAD WHAT I SAID ????');
  const arr = ['I AM SORRY, ARE YOU STILL ANGRY WITH ME??',
    'STILL ANGRY WITH ME?',
    'STILL ANGRY?',
    'STILL ANGRYYYYY  ????',
    'STILL ANGRY???']
  const brr = ['WILL YOU GO FOR A COFFEE?',
    'PLEASE?',
    'PLEASE  ????',
    'PLEASEEEEEEEE  ?????????',
    'PLEASEEEEEEEE ?????????????????? '];
  const [selectedoptions, setselectedoptions] = React.useState(false);
  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const dialogStyle = {
    padding: "50px",
  };
  const buttonStyle = {
    width: "10rem",
    fontsize: "1.5rem",
    height: "2rem",
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: "green",
    color: "White",
    border: "2px solid yellow",
  };


  const clickedyes = () => {
    if (yescount < 5) {
      setitle(arr[yescount]);
      let c = yescount + 1;
      setcount(c);
      openDialogBox();
    }
    else {
      setitle('OKAY :( ');
    }
  }
  const clickedno = () => {
    if (nocount < 5) {
      setitle(brr[nocount]);
      let c = nocount + 1;
      setnocount(c);
      openDialogBox();
    }
    else {
      setitle('FINE , SORRY ONCE AGAIN :( ');
    }
  }

  return (
    <>
      <button style={buttonStyle} onClick={openDialogBox}>
        Open Dialog
      </button>
      <Dialog onClose={handleClose} open={openDialog} >
        <h3 style={dialogStyle}>
          {title}
        </h3>
        <div style={{ display: 'flex', left: '50%', justifyContent: 'center', alignItems: 'center', alignItems: 'center' }}>
          <input type='button' onClick={clickedyes} style={{ width: 100, marginLeft: '20px', marginBottom: '5px', padding: '10px' }} value='YES' id='btnYes' />
          <input type='button' onClick={clickedno} style={{ width: 100, marginLeft: '20px', marginBottom: '5px', padding: '10px' }} value='NO' id='btnNo' />
        </div>
      </Dialog>
    </>
  );
}