import './App.css';
import React, { useEffect, useState } from 'react';

function AccordionItem(props) {

  const [hidden, setHidden] = useState(true);

  return (
    <div>
      <div onClick={ () => setHidden(!hidden)}>
        {props.heading}
      </div>
      <div className={ hidden ? "accordion-hidden" : "accordion-show" }>
        {props.children}
      </div>
    </div>
  )
}

export default AccordionItem;