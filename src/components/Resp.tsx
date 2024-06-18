import React from 'react';
import './resp.css';

const prefix = 'react-resp';

type Viewport = 'mobile' | 'tablet' | 'laptop';
type RespMode = 'strict' | 'except';

type ViewportProps = {
  viewport: Viewport;
  mode: RespMode;
  children: React.ReactNode;
};

type RespProps = {
  children?: React.ReactNode;
};

const Container = (props: ViewportProps) => <div className={`${prefix}-${props.mode}-${props.viewport}`}>{props.children}</div>

export const Mobile = ({ children }: RespProps) => <Container mode="strict" viewport="mobile" children={children} />
export const NotMobile = ({ children }: RespProps) => <Container mode="except" viewport="mobile" children={children} />

export const Tablet = ({ children }: RespProps) => <Container mode="strict" viewport="tablet" children={children} />
export const NotTablet = ({ children }: RespProps) => <Container mode="except" viewport="tablet" children={children} />

export const Laptop = ({ children }: RespProps) => <Container mode="strict" viewport="laptop" children={children} />
export const NotLaptop = ({ children }: RespProps) => <Container mode="except" viewport="laptop" children={children} />
