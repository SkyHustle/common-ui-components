import React from 'react';
import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    if (index === expandedIndex) {
      console.log('expanded');
    } else {
      console.log('collapsed');
    }

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        <div>{item.content}</div>
      </div>
    );
  });

  return (
    <div>{renderedItems}</div>
  );
}

export default Accordion;