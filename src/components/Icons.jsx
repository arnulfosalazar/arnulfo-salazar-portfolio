import React from 'react';

export function ArrowUpRight(props) {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M6 18 18 6M6 6h12v12" /></svg>;
}

export function ArrowDown(props) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M12 4v16m-6-6 6 6 6-6" /></svg>;
}

export function PlayIcon(props) {
  return <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m9 5 11 7-11 7V5Z" /></svg>;
}

export function SlidersIcon(props) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" {...props}><path d="M4 7h6m4 0h6M4 17h10m4 0h2"/><circle cx="12" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg>;
}

export function SocialIcon({ name }) {
  if (name === 'linkedin') return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5.4 7.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM3.7 9h3.4v11.4H3.7V9Zm5.6 0h3.3v1.6h.1c.4-.8 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.3v6.4h-3.5v-5.7c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.8H9.3V9Z"/></svg>;
  if (name === 'github') return <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.11 2.51.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>;
  if (name === 'leetcode') return <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 3-9 9a4 4 0 0 0 0 5.7l3 3a4 4 0 0 0 5.7 0l2-2M9 9a4 4 0 0 1 5.7 0l2 2M10 15h11"/></svg>;
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19.9 5.4A18 18 0 0 0 15.6 4l-.5 1.1a16 16 0 0 0-6.2 0L8.4 4a18 18 0 0 0-4.3 1.4C1.4 9.4.7 13.3 1.1 17.2a17 17 0 0 0 5.2 2.6l1.1-1.9-1.6-.8.4-.3a12 12 0 0 0 11.6 0l.4.3-1.6.8 1.1 1.9a17 17 0 0 0 5.2-2.6c.5-4.5-.8-8.4-3-11.8ZM8.5 14.8c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm7 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z"/></svg>;
}
