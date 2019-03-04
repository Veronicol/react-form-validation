import React from 'react';

const List = (props) => (
  <div>
    <div>List:</div>
    {props.emails.map((email, i) => <div key={i}>{email}</div>)}
  </div>
);
export default List;