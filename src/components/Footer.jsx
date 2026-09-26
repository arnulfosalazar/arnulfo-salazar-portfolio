import React from 'react';
import { ArrowDown, ArrowUpRight } from './Icons.jsx';

export default function Footer({ data, onEditProfile }) {
  const contact = data.email ? <a href={`mailto:${data.email}`}>Let's connect <ArrowUpRight/></a> : <button onClick={onEditProfile}>Let's connect <ArrowUpRight/></button>;
  return <footer className="site-footer"><div className="footer-contact"><p>Good things start with a conversation.</p>{contact}</div><div className="footer-bottom"><span>{data.name}<span className="footer-role">Software developer</span></span><a href="#top" className="back-top">Back to top <ArrowDown style={{transform:'rotate(180deg)'}}/></a></div></footer>;
}
