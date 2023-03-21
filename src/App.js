import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { height } from "@mui/system";

export default function App(props) {
  const [openDialog, handleDisplay] = React.useState(false);
  const [yescount, setcount] = React.useState(0);
  const [nocount, setnocount] = React.useState(0);

  const [title, setitle] = React.useState('Did you felt bad what i said?');
  const arr = ['I am sorry, are you still angry with me',
    'Still angry?',
    'Still angry?',
    'Still angry?',
    'Still angry?']
  const brr = ['will you go for a coffee?',
    'Pleaseeee',
    'Pleaseeee',
    'Pleaseeee',
    'Pleaseee'];
  const [selectedoptions, setselectedoptions] = React.useState(false);
  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const dialogStyle = {
    padding: "20px",
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
      setitle('okay :( ');
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
      setitle('Fine , sorry ');
    }
  }

  return (
    <>
      <button style={buttonStyle} onClick={openDialogBox}>
        Open Dialog
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <h3 style={dialogStyle}>
          {title}
        </h3>
        <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <input type='button' onClick={clickedyes} style={{ margin: 'auto' }} value='yes' id='btnYes' />
          <input type='button' onClick={clickedno} style={{ marginLeft: '10px' }} value='no' id='btnNo' />
        </div>
      </Dialog>
    </>
  );
}