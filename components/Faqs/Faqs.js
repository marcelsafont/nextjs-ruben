'use client'
import React, { Component, useState } from 'react'; 
// import Header from '../../components/Header/Header';

export default function Faqs({ data }){
    const items = data.faqPage.faqsItem;
    const [open, setOpen] = useState(10000);
        return(
            <div className="container">

                <div className="listfaqs">
                    
                        {
                            items.map((item, index) => {
                                return (
                                    <div 
                                    key={index}
                                        className={`item ${open === index ? 'open': ''}`}
                                        onClick={() => setOpen(index) }
                                     >
                                        <div>{item.titol}</div>
                                        <div className="text" dangerouslySetInnerHTML={{__html: item.text}} />
                                    </div>
                                )
                            })
                        }
                
                </div>
            </div>
        )
    
}