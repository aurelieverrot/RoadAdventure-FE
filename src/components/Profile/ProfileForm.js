// Form inside a modal to update the profile.

import React from 'react';
import { Form } from 'semantic-ui-react';

const ProfileForm = (props) => {



  return (
    <Form className="column">
      <p>this is the ProfileForm</p>
      <Form.Group>
        <Form.Input name="username" fluid label='Username' placeholder={props.user.username}/>
        <Form.Input name="username" fluid label='Email' placeholder={props.user.email}/>
        <Form.Input/>
      </Form.Group>
    </Form>
  )
}

export default ProfileForm;