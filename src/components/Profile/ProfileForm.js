import React from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import './Profile.css'

const ProfileForm = (props) => {

  return (
    <Form className="">
      <h2>Your information</h2>
      <Divider/>
      <Form.Group className="form-column" widths='equal'>
        <Form.Input name="username" fluid label='Your Username' defaultValue={props.user.username}/>
        <Form.Input name="email" fluid label='Your Email' defaultValue={props.user.email}/>
        <Button className="update">Update My Profile</Button>
      </Form.Group>
    </Form>
  )
}

export default ProfileForm;