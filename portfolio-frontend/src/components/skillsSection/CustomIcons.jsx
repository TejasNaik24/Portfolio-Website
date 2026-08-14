import React from "react";

// Google ADK (Agent Development Kit) Icon
export const AdkIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Top capsule head */}
    <rect x="4" y="3" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="7" r="1.2" fill="currentColor" />
    <circle cx="15" cy="7" r="1.2" fill="currentColor" />
    {/* Bottom capsule body */}
    <rect x="4" y="13" width="16" height="8" rx="4" stroke="currentColor" strokeWidth="1.8" />
    {/* Code brackets < > inside bottom */}
    <path d="M 8.5 15.5 L 7 17 L 8.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M 15.5 15.5 L 17 17 L 15.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Matplotlib Icon
export const MatplotlibIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Polar background circle */}
    <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="12" cy="12" r="5.5" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    {/* Crosshairs */}
    <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    <line x1="2.5" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
    {/* Diagonal guide lines */}
    <line x1="5.3" y1="5.3" x2="18.7" y2="18.7" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    <line x1="18.7" y1="5.3" x2="5.3" y2="18.7" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    {/* Polar chart wedges / data points */}
    <path d="M 12 12 L 18 8 L 16 12 Z" fill="currentColor" opacity="0.75" />
    <path d="M 12 12 L 15 17 L 12 19 Z" fill="currentColor" opacity="0.85" />
    <path d="M 12 12 L 7 15 L 4 12 Z" fill="currentColor" opacity="0.65" />
    <path d="M 12 12 L 9 5 L 12 3 Z" fill="currentColor" opacity="0.9" />
  </svg>
);

// Vertex AI Icon
export const VertexAiIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Inverted Chevron / V at bottom */}
    <path
      d="M 3.5 12 L 12 17.5 L 20.5 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Vertex node circle */}
    <circle cx="12" cy="17.5" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
    {/* Column 1 (Leftmost) */}
    <rect x="7" y="3" width="1.5" height="3" rx="0.75" fill="currentColor" />
    <circle cx="7.75" cy="8.5" r="0.8" fill="currentColor" />
    <circle cx="7.75" cy="11.5" r="0.8" fill="currentColor" />
    {/* Column 2 */}
    <circle cx="10" cy="5" r="0.8" fill="currentColor" />
    <rect x="9.25" y="7.5" width="1.5" height="3" rx="0.75" fill="currentColor" />
    <circle cx="10" cy="12.5" r="0.8" fill="currentColor" />
    {/* Column 3 (Center) */}
    <circle cx="12" cy="7.5" r="0.8" fill="currentColor" />
    <circle cx="12" cy="10.5" r="0.8" fill="currentColor" />
    <circle cx="12" cy="13.5" r="0.8" fill="currentColor" />
    {/* Column 4 */}
    <circle cx="14" cy="5" r="0.8" fill="currentColor" />
    <rect x="13.25" y="7.5" width="1.5" height="3" rx="0.75" fill="currentColor" />
    <circle cx="14" cy="12.5" r="0.8" fill="currentColor" />
    {/* Column 5 (Rightmost) */}
    <circle cx="16.25" cy="4" r="0.8" fill="currentColor" />
    <rect x="15.5" y="6.5" width="1.5" height="3" rx="0.75" fill="currentColor" />
    <circle cx="16.25" cy="11.5" r="0.8" fill="currentColor" />
  </svg>
);

// Cloud Run Icon
export const CloudRunIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g transform="translate(1.8, 1.8) scale(0.85)">
      {/* Cloud Shape */}
      <path
        d="M 19.35 10.04 C 18.67 6.59 15.64 4 12 4 C 9.11 4 6.6 5.64 5.35 8.04 C 2.34 8.36 0 10.91 0 14 C 0 17.31 2.69 20 6 20 L 19 20 C 21.76 20 24 17.76 24 15 C 24 12.36 21.95 10.22 19.35 10.04 Z"
        fill="currentColor"
        opacity="0.2"
      />
      <path
        d="M 19.35 10.04 C 18.67 6.59 15.64 4 12 4 C 9.11 4 6.6 5.64 5.35 8.04 C 2.34 8.36 0 10.91 0 14 C 0 17.31 2.69 20 6 20 L 19 20 C 21.76 20 24 17.76 24 15 C 24 12.36 21.95 10.22 19.35 10.04 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Play arrow in center */}
      <polygon points="10,9 16,12 10,15" fill="currentColor" />
    </g>
  </svg>
);

// Cloud Build Icon
export const CloudBuildIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Hexagon Container */}
    <path
      d="M 12 2 L 20.66 7 L 20.66 17 L 12 22 L 3.34 17 L 3.34 7 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Hammer & Wrench / Build Symbol inside */}
    <path
      d="M 9 8.5 L 15 14.5 M 15 8.5 L 9 14.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="11.5" r="2.5" fill="currentColor" />
  </svg>
);

// LangGraph Icon (matching official 4-corner 3/4 circle LangGraph logo)
export const LangGraphIcon = (props) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {/* Top-Left 3/4 Circle */}
    <path d="M 12 7.5 A 4.5 4.5 0 1 0 7.5 12 L 7.5 7.5 Z" />
    {/* Top-Right 3/4 Circle */}
    <path d="M 16.5 12 A 4.5 4.5 0 1 0 12 7.5 L 16.5 7.5 Z" />
    {/* Bottom-Left 3/4 Circle */}
    <path d="M 7.5 12 A 4.5 4.5 0 1 0 12 16.5 L 7.5 16.5 Z" />
    {/* Bottom-Right 3/4 Circle */}
    <path d="M 12 16.5 A 4.5 4.5 0 1 0 16.5 12 L 16.5 16.5 Z" />
  </svg>
);
