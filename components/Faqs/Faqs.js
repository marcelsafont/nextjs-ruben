'use client';
import React, { useState } from 'react';

export default function Faqs({ data }) {
  const items = data.faqPage.faqsItem;
  const [open, setOpen] = useState(10000);
  return (
    <div className="container">
      <div className="listfaqs">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`item ${open === index ? 'open' : ''}`}
              onClick={() => setOpen(index)}
            >
              <h2 className="title">{item.titol}</h2>
              <div className="text" dangerouslySetInnerHTML={{ __html: item.text }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
