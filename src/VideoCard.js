import React,{useState} from 'react';
import './VideoCard.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import Button from '@material-ui/core/Button';

  function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function VideoCard({ isCustom, thumbnailUrl, channelImageUrl, postedDate, title, channelName, noOfViews }) {
    
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [titleInput, setTitleInput] = useState('');
    const [thumbtitle,setThumbTitle] =useState('');
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);


    const handleClose = (e) => {
        e.preventDefault();
        setImageUrl(input);
        setThumbTitle(titleInput);
        setOpen(false);
    };
    return (
        <div className='videoCard'>
        <Modal open={open} onClose={handleClose}>
            <div style={modalStyle} className={classes.paper}>
                <form method='post'>
                    <TextField placeholder='Image URL' value={input} onChange={e => setInput(e.target.value)}/>
                    <TextField placeholder='Title' value={titleInput} onChange={e => setTitleInput(e.target.value)}/>

                    {/* <button type='submit'>Set Image URL</button> */}
                    <Button type='submit' onClick={handleClose}>Set Image URL</Button>
                </form>
                
            </div>
            
        </Modal>
            { isCustom && !imageUrl ? (
                <button onClick={(e) => setOpen(true) }>Upload Image</button>
            ) : (
                <img className='videoCard__thumbnail' src={imageUrl || thumbnailUrl} alt="" />
            )}
            
            <div className="videoCard__info">
                <div className='videoCard__channelImageContainer'>
                    <img src={channelImageUrl} alt=""/>
                </div>
                <div className="videoCard__infoText">
                    <p className='videoCard__title'>{thumbtitle || title}</p>
                    <p className='videoCard__channelname'>{channelName}</p>
                    <p className='videoCard__noofviewsandpostedDate'>{noOfViews} • {postedDate}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;
