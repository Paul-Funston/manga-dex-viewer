import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useForm} from 'react-hook-form';
import { useState} from 'react';

const demographics = [
  "Shoujo",
  "Shounen",
  "Josei",
  "Seinen"
]

function NewMangaForm({ show, onHide, onSuccess}) {
  const [validated, setValidated] = useState(false);
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  const onSubmit = (data) => {
    setValidated(true);
    onSuccess(data.title);
    onHide();

  }

  const currentYear = Date.now().year + 5;

  return (
    <Modal show={show} onHide={() => {setValidated(false); onHide();}} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submit new Manga</Modal.Title>
        </Modal.Header>
        <div className='container'>
          <Form  noValidate validated={validated} onSubmit={handleSubmit(onSubmit)} >
            <Form.Group className="my-3" >
              <FloatingLabel
                controlId="formTitle"
                label="English Title"
              >
                <Form.Control 
                  type="text" 
                  isInvalid={errors.title}
                  placeholder='English Title'
                  {...register("title", { required: true, maxLength: 20})} 
                />
                <Form.Control.Feedback type="invalid">Title required with less than 20 characters</Form.Control.Feedback>
              </FloatingLabel>
              
            </Form.Group>
            <Form.Group className='mb-3'>
              <FloatingLabel
                controlId="formDescription"
                label="Description"
              >
                <Form.Control 
                as="textarea" 
                placeholder='Description' 
                style={{height: '100px'}}
                {...register("description", {required: true, minLength: {value: 10, message:"Must be between 10 and 255 characters"}, maxLength: {value: 255, message: 'Must be between 10 and 255 characters'}})} 
                
                />
                <Form.Control.Feedback type='invalid'>Description Required with 10-255 characters</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3'>
              <FloatingLabel
                controlId="formYear"
                label="Year Released"
              >
                <Form.Control 
                  type="number" 
                  placeholder='Year Released'
                  isInvalid={errors.year}
                  {...register("year", {required: true, min: 1980, max: currentYear})}
                />
                <Form.Control.Feedback type='invalid'>Year no sooner than 1980 and no more than 5 years ahead</Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Check
                type='checkbox'
                label="Finished publication"
                {...register("complete")}
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <FloatingLabel 
                controlId="demographic"
                label="Target Demographic"
              >
                <Form.Select 
                  {...register("demographic", {validate: value => demographics.some(d => d === value)})}
                >
                  <option>Target</option>
                  {demographics.map((d) => {
                    return (
                      <option key={d} value={d}>{d}</option>
                    )
                  })}

                </Form.Select>
              </FloatingLabel>
            </Form.Group>
            <Button className="mb-3" type='submit'>Submit form</Button>

          </Form>
        </div>
        
      </Modal>
  )
}

export default NewMangaForm;

/* 
            <Form.Group className='mb-3'>
              <FloatingLabel
                controlId="formX"
                label="X"
              >
                <Form.Control type="" placeholder='X'/>
              </FloatingLabel>
            </Form.Group>

*/