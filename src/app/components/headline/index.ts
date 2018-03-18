export * from './headline.module';
export * from './headline.component';

export interface HeadlineProps {
  /** @name CSS class @hidden */ className?: string;
  /** @name Level */ level: Level;
  /** @name Text align @default Left */ textAlign?: TextAlign;
  /** @name Text @default Lorem ipsum */ text?: string;
  /** @name Color @default inherit */ color?: string;
  /** @name Uppercase @default false */ uppercase?: boolean;
}

export enum Level {
  H1,
  H2,
  H3
}

export enum TextAlign {
  Left,
  Center,
  Right
}
