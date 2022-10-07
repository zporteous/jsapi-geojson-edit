import { FormControl, Button,TextField, MenuItem  } from '@mui/material';
import { useState } from 'react';
import BadWordFilter from 'bad-words';
import api from '../config/api';

const filter = new BadWordFilter()
const importance_options = [
  {
    value: 'High',
    label: 'High',
  },
  {
    value: 'Medium',
    label: 'Medium',
  },
  {
    value: 'Low',
    label: 'Low',
  },

];

interface commentFormProps{
  poi_id: number,
  poi_name:string,
}

function CommentForm(props:commentFormProps) {
  const [helperText, setHelperText] = useState('')
  const [importance,setImportance] = useState('High');
  const [commenter,setCommenter] = useState('');
  const [comment,setComment] = useState('');
  const [loading, setLoading] = useState(false);

  function reset() {
    setTimeout(()=>{
      setHelperText("")
    },5000 )
  }
  
  const handleSubmission = async () => {
    setLoading(true)
    if(comment.length<1 || commenter.length<1) {
    setHelperText("Enter values for all fields 🙂")
    setLoading(false)
    reset()
    return
    }
    else if (filter.isProfane(comment) || filter.isProfane(commenter)){
      setHelperText("Please no foul language 🤐👀")
      reset()
      setLoading(false)
      return 
    } else {
      api.createComment(
        {
          poi_id:props.poi_id,
          commenter:commenter,
          comment:comment,
          importance:importance
        }
      )
      .then(res => {
        setLoading(false)
        setHelperText("Comment submitted successfully ✔")
        reset()
      })
      .catch(e=>{
        setLoading(false)
        setHelperText("Something went wrong - please try again 😟")
        reset()
      })
    }
  }

  return (
    <div id="comment-form-container">
      <h3>Submit a comment for the {props.poi_name} location</h3>
      <FormControl fullWidth>
        <TextField 
          id="commenter-input" 
          label="Commenter" 
          variant="outlined"
          value={commenter} 
          onChange={ e=>{
            setCommenter((e.target as HTMLInputElement).value)
            e.preventDefault();
          }}
          style={{marginTop:'15px'}}
        />
        <TextField 
          id="comment-input" 
          label="Comment" 
          variant="outlined" 
          value={comment}
          onChange={ e=>setComment((e.target as HTMLInputElement).value)}
          style={{marginTop:'15px'}}
          multiline
        />
        <TextField 
          id="importance-input" 
          label="Importance" 
          variant="outlined" 
          defaultValue="High"
          onChange={ e=>{
            e.preventDefault();
            setImportance((e.target as HTMLInputElement).value)
            
          }}
          style={{marginTop:'15px'}}
          select
        >
          {importance_options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div>
          <Button 
            style={{margin:'10px'}}
            type="submit"
            onClick={handleSubmission}
            // disabled={buttonState}
            variant="outlined"
          >{loading ? 'Loading' : 'Submit'}
          </Button>
          {loading ? '...' : helperText}
        </div>
      </FormControl>
    </div>
  )
}

export default CommentForm